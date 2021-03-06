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
  deleteStat,
} from './../libs/usecase';


const StyledBody = styled.div`
  margin: 30px 10px;
`;

const GraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

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
          sysname: stat.sysname,
          release: stat.release,
          machine: stat.machine,
          number_of_cpus: stat.number_of_cpus,
          file_date: stat.file_date,
          file: stat.file,
        })))
      )
  }, [])

  const onSelectStat = (id) => {
    fetchStat(id)
      .then(stat => {
        setStat(stat);
        setMode("visualize");
      })
  };

  const onDeleteStat = (id) => {
    deleteStat(id)
      .then(() => {
        setStats(stats.filter(stat => stat.id !== id));
      })
  }

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
        <History
          stats={stats}
          onClickStat={onSelectStat}
          onDeleteStat={onDeleteStat}
        />
      );
    } else if (mode === "visualize" && Object.keys(stat).length > 0) {
      body = (
        <GraphWrapper>
          <Graph
            title="CPU"
            data={stat.statistics.cpu}
            kinds={['user', 'nice', 'system', 'iowait', 'steal', 'idle']}
          />
          <Graph
            title="Memory"
            data={stat.statistics.memory}
            kinds={['free', 'used', 'used_percent', 'buffers', 'cached']}
          />
        </GraphWrapper>
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
