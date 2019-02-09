import React, { useState } from 'react';
import Header from './Header.js';
import Uploader from  './Uploader.js';


const App = () => {
  const [mode, setMode] = useState("upload");

  return (
    <div>
      <Header mode={mode} onChangeMode={setMode} />
      <Uploader />
    </div>
  );
};

export default App;
