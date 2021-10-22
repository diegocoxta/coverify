import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import domtoimage from 'dom-to-image-more';
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
  const [titleColor, setTitleColor] = useState('black');
  const [accentColor, setAccentColor] = useState('#7900D9');
  const [file, setFile] = useState(null);
  const [spotifyLogo, setSpotifyLogo] = useState('spotifyBlackLogo');

  const generatedContentRef = useRef(null);

  function createImageToDownload() {
    domtoimage.toBlob(generatedContentRef.current, { quality: 1, scale: 3 }).then((dataUrl) => {
      FileSaver.saveAs(dataUrl, 'cover.png');
    });
  }

  return (
    <Container>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <select value={titleColor} onChange={(e) => setTitleColor(e.target.value)}>
        <option value="#000000">Black</option>
        <option value="#ffffff">White</option>
      </select>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <ChromePicker color={accentColor} onChange={(color) => setAccentColor(color.hex)} />
      <select value={spotifyLogo} onChange={(e) => setSpotifyLogo(e.target.value)}>
        <option value="spotifyBlackLogo">Black</option>
        <option value="spotifyWhiteLogo">White</option>
        <option value="">Without Spotify Logo</option>
      </select>
      <Model1
        generatedContentRef={generatedContentRef}
        title={title}
        titleColor={titleColor}
        color={accentColor}
        spotifyLogo={spotifyLogo}
        image={file && URL.createObjectURL(file)}
      />
      <button onClick={createImageToDownload}>Download Image</button>
    </Container>
  );
}
