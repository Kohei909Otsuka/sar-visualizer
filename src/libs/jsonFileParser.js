const jsonFileParser = (jsonString, idGen) => {
  const original = JSON.parse(jsonString)
  const firstHost = original.sysstat.hosts[0];

  const metaData = {
    id: idGen(),
    nodename: firstHost.nodename,
    sysname: firstHost.sysname,
    release: firstHost.release,
    machine: firstHost.machine,
    number_of_cpus: firstHost['number-of-cpus'],
    file_date: firstHost['file-date'],
  };

  let statistics = {};

  const cpus = firstHost.statistics.filter(obj => (
    Object.keys(obj).includes('cpu-load-all')
  )).map(cpu => ({
    timestamp: cpu.timestamp.date + ' ' + cpu.timestamp.time,
    user: cpu['cpu-load-all'][0].usr,
    nice: cpu['cpu-load-all'][0].nice,
    system: cpu['cpu-load-all'][0].sys,
    iowait: cpu['cpu-load-all'][0].iowait,
    steal: cpu['cpu-load-all'][0].steal,
    idle: cpu['cpu-load-all'][0].idle,
  }));

  statistics.cpu = cpus;
  return Object.assign({}, metaData, { statistics });
};

export default jsonFileParser;
