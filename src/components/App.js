import React, { useState } from 'react';
import Header from './Header';
import Uploader from  './Uploader';
import Graph from './Graph'
import {
  createStat,
  fetchStats,
  fetchStat,
} from './../libs/usecase';


const App = () => {
  const [mode, setMode] = useState("upload");
  const [stat, setStat] = useState({});

  // this app is simple enough to not use routing
  const renderBody = () => {
    // return (
    //   <div>
    //     <Graph />
    //   </div>
    // );

    if (mode === "upload") {
      return (
        <div>
          <Uploader
            setMode={setMode}
            setStat={setStat}
            saveStat={createStat}
          />
        </div>
      );
    } else if (mode === "history") {
      return (
        <div>
        </div>
      );
    } else if (mode === "visualize" && Object.keys(stat).length > 0) {
      return (
        <div>
          <Graph data={stat.statistics.cpu} />
        </div>
      );
    }
  };

  return (
    <div>
      <Header mode={mode} onChangeMode={setMode} />
      {renderBody()}
    </div>
  );
};

export default App;
