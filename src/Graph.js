import React from 'react';
import {
  LineChart,
  Line,
  YAxis,
  XAxis,
  Tooltip,
  Legend,
} from 'recharts';
import { solarized } from './constant';

const dummy = [
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
    user: 1.1,
    nice: 2.20,
    system: 3.30,
    iowait: 4.40,
    steal: 5.50,
    idle: 100.00,
  }
];

const cpuKinds = ['user', 'nice', 'system', 'iowait', 'steal', 'idle']
const colors = [
  solarized.yellow,
  solarized.orange,
  solarized.red,
  solarized.magenta,
  solarized.violet,
  solarized.blue,
  solarized.cyan,
  solarized.green,
];

const Graph = (props) => {
  const { data } = props;
  return (
    	<LineChart width={1200} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="timestamp"/>
       <YAxis/>
       <Tooltip/>
       <Legend />
       {
          cpuKinds.map((kind,i) => (
            <Line key={kind} type="monotone" dataKey={kind} stroke={colors[(i+1)%colors.length]} />
          ))
        }
      </LineChart>
  );
};

export default Graph;
