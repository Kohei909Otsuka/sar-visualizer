import jsonFileParser from './jsonFileParser';
const fs = require('fs');
const path = require('path');

it('returns expected object', () => {
  const filePath = path.join(__dirname, 'dummy_sar.json')
  const file = fs.readFileSync(filePath);

  const input = file.toString();
  const expected = {
    id: "uid",
    nodename: 'centos-s-2vcpu-4gb-sgp1-01',
    sysname: 'Linux',
    release: '3.10.0-693.17.1.el7.x86_64',
    machine: 'x86_64',
    number_of_cpus: 2,
    file_date: '2019-02-09',
    statistics: {
      cpu: [
        {
          timestamp: '2019-02-09 07:59:21',
          user: 1.00,
          nice: 2.00,
          system: 3.00,
          iowait: 4.00,
          steal: 5.00,
          idle: 100.00,
        },
        {
          timestamp: '2019-02-09 07:59:26',
          user: 1.10,
          nice: 2.20,
          system: 3.30,
          iowait: 4.40,
          steal: 5.50,
          idle: 100.00,
        },
      ]
    }
  };
  const mockIdGen = jest.fn(() => "uid")

  expect(jsonFileParser(input, mockIdGen)).toEqual(expected);
})
