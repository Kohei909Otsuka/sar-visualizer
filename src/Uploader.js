import React from 'react';
import styled from 'styled-components';
import Dropzone from 'react-dropzone';
import { solarized } from './constant';

const Wrapper = styled.div`
  // ここはそとでいいのでは?
  margin: 0px 10px;

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

const Uploader = () => {
  const handleFileAccepted = (files) => {
    console.log('success file', files);
    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result;
      console.log('loaded file content', text)
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
