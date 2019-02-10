import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Uploader from  './Uploader';
import History from './History';
import Graph from './Graph'
import {
  createStat,
  fetchStats,
  fetchStat,
} from './../libs/usecase';


const StyledBody = styled.div`
  margin: 0px 10px;
`;

const App = () => {
  const [mode, setMode] = useState("upload");
  const [stat, setStat] = useState({});
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetchStats()
      .then(stats =>
        // slice only meta data
        setStats(stats.map(stat => ({
          id: stat.id,
          nodename: stat.nodename,
          system: stat.system,
          release: stat.release,
          machine: stat.machine,
          number_of_cpus: stat.number_of_cpus,
          file_date: stat.file_date,
        })))
      )
  })

  // this app is simple enough to not use routing
  let body;
  const renderBody = () => {
    if (mode === "upload") {
      body = (
        <Uploader
          setMode={setMode}
          setStat={setStat}
          saveStat={createStat}
          stats={stats}
        />
      );
    } else if (mode === "history") {
      body = (
        <History stats={stats}/>
      );
    } else if (mode === "visualize" && Object.keys(stat).length > 0) {
      body = (
        <Graph data={stat.statistics.cpu} />
      );
    }

    return (
      <StyledBody>
        {body}
      </StyledBody>
    );
  };

  return (
    <div>
      <Header mode={mode} onChangeMode={setMode} />
      {renderBody()}
    </div>
  );
};

export default App;
