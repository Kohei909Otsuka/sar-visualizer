import React, { useState } from 'react';
import styled from 'styled-components';
import {
  LineChart,
  Line,
  YAxis,
  XAxis,
  Tooltip,
  Legend,
} from 'recharts';
import { solarized } from './../utils/constant.js';

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

const Title = styled.p`
  color: ${ solarized.base1 };
  font-size: 1.2em;
`;

const Graph = (props) => {
  const { data, kinds, title } = props;
  const [activeKeys, setActiveKeys] = useState(kinds);

  const toggleKey = (key) => {
    if (activeKeys.includes(key)) {
      setActiveKeys(activeKeys.filter(akey => akey !== key))
    } else {
      setActiveKeys(activeKeys.concat([key]))
    }
  };

  return (
    <div>
      <Title>{title}</Title>
      <LineChart width={1200} height={300} data={data}>
        <XAxis dataKey="timestamp"/>
        <YAxis/>
        <Tooltip/>
        <Legend onClick={e => toggleKey(e.dataKey)}/>
        {
          kinds.map((kind,i) => {
            const color = activeKeys.includes(kind) ?
              colors[(i+1)%colors.length] : 'transparent';
            return (
              <Line
                key={kind}
                type="monotone"
                dataKey={kind}
                stroke={color}
              />
            );
          })
        }
      </LineChart>
    </div>
  );
};

export default Graph;
