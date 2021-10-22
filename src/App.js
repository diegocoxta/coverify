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
  const [image, setImage] = useState(null);

  const generatedContentRef = useRef(null);

  console.log({ image })

  function createImageToDownload() {
    // Generate meme image from the content of 'content' div
    domtoimage.toBlob(generatedContentRef.current, { quality: 1, scale: 3 }).then((dataUrl) => {
      FileSaver.saveAs(dataUrl, "cover.png");    
    })
  }

  return (
    <Container>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <input type="file" onChange={e => setImage(URL.createObjectURL(e.target.files[0]))} />
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