import React from 'react';
import styled from 'styled-components';
import Dropzone from 'react-dropzone';
import { solarized } from './../utils/constant.js';
import jsonFileParser from './../libs/jsonFileParser';

const Wrapper = styled.div`
  height: 70vh;
  border-width: 2px;
  border-radius: 5px;
  border-color: ${ solarized.base1 };
  border-style: dashed;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${ solarized.base1 }
  font-size: 2.0em;
`;

// TODO: move idGetn to data strage module
const idGen = () => {
  const now = new Date()
  return now.getTime().toString(16) +
    Math.floor(10000 * Math.random()).toString(16)
};

const Uploader = (props) => {
  const { setMode, setStat, saveStat } = props;

  const handleFileAccepted = (files) => {
    console.log('success file', files);
    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result;
      let stat = jsonFileParser(text, idGen);
      stat.file = files[0].name;
      console.log('loaded file content', stat);
      console.log('loaded file object', files[0]);

      // 1. update state of app
      setStat(stat);
      setMode("visualize");
      // 2. save to indexexDB
      saveStat(stat);
    };
    reader.readAsText(files[0]);
  };

  const handleFileRejected = (file) => {
    console.log('fail file', file);
  };

  return (
    <div>
      <Dropzone
        onDropAccepted={handleFileAccepted}
        onDropRejected={handleFileRejected}
      >
        {({getRootProps, getInputProps}) => {
          return (
            <Wrapper
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              Drag and drop here
            </Wrapper>
          );
        }}
      </Dropzone>
    </div>
  );
};

export default Uploader;
