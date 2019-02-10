import React, { useState } from 'react';
import Header from './Header.js';
import Uploader from  './Uploader.js';
import Graph from './Graph.js'


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
          <Uploader setMode={setMode} setStat={setStat} />
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
