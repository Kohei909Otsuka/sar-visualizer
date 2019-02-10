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

  const statistics = {cpu: [], memory: []};

  firstHost.statistics.forEach(stat => {
    statistics.cpu.push(convertCpu(stat));
    statistics.memory.push(convertMem(stat));
  });

  return Object.assign({}, metaData, { statistics });
};

const formatTime = (src) => (
  src.timestamp.date + ' ' + src.timestamp.time
);
const convertCpu = (src) => {
  const cpu = src['cpu-load-all'][0];
  return {
    timestamp: formatTime(src),
    user: cpu.usr,
    nice: cpu.nice,
    system: cpu.sys,
    iowait: cpu.iowait,
    steal: cpu.steal,
    idle: cpu.idle,
  };
};

const convertMem = (src) => {
  const mem = src.memory;
  return {
    timestamp: formatTime(src),
    free: Math.floor(KbToMb(mem.memfree)),
    used: Math.floor(KbToMb(mem.memused)),
    used_percent: mem['memused-percent'],
    buffers: Math.floor(KbToMb(mem.buffers)),
    cached: Math.floor(KbToMb(mem.cached)),
  };
};

const KbToMb = (kb) => {
  return (kb / 1000);
};

export default jsonFileParser;
