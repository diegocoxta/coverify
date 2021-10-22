import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import domtoimage from 'dom-to-image-more'
import FileSaver from 'file-saver';
import { ChromePicker } from 'react-color';


import Model1 from './covers/model1';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export default function App() {
  const [title, setTitle] = useState('Your playlist name');
  const [color, setColor] = useState('#7900D9');
  const [image, setImage] = useState('https://images.unsplash.com/photo-1415886541506-6efc5e4b1786?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80');

  const generatedContentRef = useRef(null);

  function createImageToDownload() {
    // Generate meme image from the content of 'content' div
    domtoimage.toBlob(generatedContentRef.current, { quality: 1, scale: 3 }).then((dataUrl) => {
      FileSaver.saveAs(dataUrl, "cover.png");    
    })
  }

  return (
    <Container>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <input value={color} onChange={e => setColor(e.target.value)} />
      <input value={image} onChange={e => setImage(e.target.value)} />
      <ChromePicker color={color} onChange={color => setColor(color.hex)} />
      <Model1
        generatedContentRef={generatedContentRef}
        title={title}
        color={color}
        image={image} />
      <button onClick={createImageToDownload}>Download Image</button>
    </Container>
  );
}