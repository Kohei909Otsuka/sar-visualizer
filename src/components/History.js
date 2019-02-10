import React from 'react';

//time, file name, os, machine, cpus
const History = (props) => {
  const { stats } = props;
  const renderItems = (stat) => (
    <tr key={stat.id} onClick={() => console.log('row clicked', stat.id)}>
      <td>{stat.file_date}</td>
      <td>some file name</td>
      <td>{stat.os}</td>
      <td>{stat.machine}</td>
      <td>{stat.number_of_cpus}</td>
    </tr>
  );

  return (
    <table>
      <thead>
        <tr>
          <th>time</th>
          <th>file</th>
          <th>os</th>
          <th>machine</th>
          <th>cpus</th>
        </tr>
      </thead>
      <tbody>
        { stats.map(stat => (renderItems(stat))) }
      </tbody>
    </table>
  );
};

export default History;
