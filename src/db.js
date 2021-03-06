import Dexie from 'dexie';
import { formatDate } from './utils/date';

const db = new Dexie('sar');
// index only id, cuz there is nothing to search by field
db.version(1).stores({
    stats: `id`
});

const seedCpus = (count, baseTime) => {
  return Array(count).fill().map((x,i) => {
    const time  = new Date((baseTime.getTime() + (i+1) * 60 * 1000));

    return {
      timestamp: formatDate(time),
      user: Math.floor(100 * Math.random()),
      nice: Math.floor(100 * Math.random()),
      system: Math.floor(100 * Math.random()),
      iowait: Math.floor(100 * Math.random()),
      steal: Math.floor(100 * Math.random()),
      idle: Math.floor(100 * Math.random()),
    };
  });
};

const seedMems = (count, baseTime) => {
  return Array(count).fill().map((x,i) => {
    const time  = new Date((baseTime.getTime() + (i+1) * 60 * 1000));
    const max = 10000;
    const min = 500;

    return {
      timestamp: formatDate(time),
      free: Math.floor(Math.random() * (max - min)) + min,
      used: Math.floor(Math.random() * (max - min)) + min,
      used_percent: Math.floor(100* Math.random()),
      buffers: Math.floor(100* Math.random()),
      cached: Math.floor(1000* Math.random()),
    };
  });
};

// import seed data
db.on('populate', () =>{
  const now = new Date();

  db.stats.add({
    id: 1,
    nodename: 'localhost',
    sysname: 'Linux',
    release: '1.7.0',
    machine: 'x86_64',
    number_of_cpus: 1,
    file_date: '2019-02-09',
    file: 'cpu_test.json',
    statistics: {
      cpu: seedCpus(50, now),
      memory: seedMems(50, now),
    }
  });
  db.stats.add({
    id: 2,
    nodename: 'remotehost',
    sysname: 'Linux',
    release: '1.7.0',
    machine: 'x86_64',
    number_of_cpus: 2,
    file_date: '2019-02-10',
    file: 'cpu_test2.json',
    statistics: {
      cpu: seedCpus(50, now),
      memory: seedMems(50, now),
    }
  });
  db.stats.add({
    id: 3,
    nodename: '192.168.000.123',
    sysname: 'Linux',
    release: '1.7.0',
    machine: 'x86_64',
    number_of_cpus: 2,
    file_date: '2019-02-11',
    file: 'cpu_test3.json',
    statistics: {
      cpu: seedCpus(50, now),
      memory: seedMems(50, now),
    }
  });
});
db.open();

export default db;
