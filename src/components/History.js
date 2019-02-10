import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { solarized } from './../utils/constant.js';

//time, file name, os, machine, cpus
const Table = styled.table`
  font-size: 1.2em;
  text-align: left;
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
`;
const TableHeader = styled.thead`
  color: ${ solarized.base01 };
`;
const TableBody = styled.tbody`
  color: ${ solarized.base1 };
`;
const TableRaw = styled.tr`
  border: solid 1px;
`;
const TableBodyRaw = styled(TableRaw)`
  :hover {
    background: ${ solarized.cyan } !important;
    color: white;
  }
`;
const TableHeaderCell = styled.th`
 padding: 20px;
`;
const TableBodyCell = styled.td`
 padding: 20px;
`;

const History = (props) => {
  const { stats, onClickStat } = props;

  const renderItems = (stat) => {
    const onRawClick = () => (onClickStat(stat.id));
    return (
      <TableBodyRaw key={stat.id}>
        <TableBodyCell onClick={onRawClick}>{stat.file_date}</TableBodyCell>
        <TableBodyCell onClick={onRawClick}>some file name</TableBodyCell>
        <TableBodyCell onClick={onRawClick}>{stat.sysname}</TableBodyCell>
        <TableBodyCell onClick={onRawClick}>{stat.machine}</TableBodyCell>
        <TableBodyCell onClick={onRawClick}>{stat.number_of_cpus}</TableBodyCell>
        <TableBodyCell>
          <FontAwesomeIcon icon={faTrash} />
        </TableBodyCell>
      </TableBodyRaw>
    );
  };

  return (
    <Table>
      <TableHeader>
        <TableRaw>
          <TableHeaderCell>time</TableHeaderCell>
          <TableHeaderCell>file</TableHeaderCell>
          <TableHeaderCell>os</TableHeaderCell>
          <TableHeaderCell>machine</TableHeaderCell>
          <TableHeaderCell>cpus</TableHeaderCell>
          <TableHeaderCell></TableHeaderCell>
        </TableRaw>
      </TableHeader>
      <TableBody>
        { stats.map(stat => (renderItems(stat))) }
      </TableBody>
    </Table>
  );
};

export default History;
