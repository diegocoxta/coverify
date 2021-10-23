import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import Model1 from './covers/model1';

import ColorPicker from './components/ColorPicker';
import ImagePicker from './components/ImagePicker';
import OptionsToggle from './components/OptionsToggle';
import ColorPreview from './components/ColorPreview';
import DownloadButton from './components/DownloadButton';

const Container = styled.div`
  width: 960px;
  margin: 0 auto;
  background: gray;

  @media (min-width: 760px) {
    display: flex;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

const Preview = styled.div`
  width: 100%;
`;

const TitleInput = styled.input`
  background: #fff;
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;

  :focus {
    outline: none;
  }
`;

export default function App() {
  const [title, setTitle] = useState('Your playlist name');
  const [titleColor, setTitleColor] = useState('black');
  const [accentColor, setAccentColor] = useState('#7900D9');
  const [image, setImage] = useState(null);
  const [spotifyLogo, setSpotifyLogo] = useState('spotifyBlackLogo');

  const generatedContentRef = useRef(null);

  return (
    <Container>
      <Form>
        <TitleInput type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <OptionsToggle
          label="Choose the title color"
          value={titleColor}
          onChange={setTitleColor}
          options={[
            {
              value: '#000000',
              label: (
                <>
                  <ColorPreview color="#000000" /> Black
                </>
              ),
            },
            {
              value: '#ffffff',
              label: (
                <>
                  <ColorPreview color="#ffffff" /> White
                </>
              ),
            },
          ]}
        />
        <ImagePicker image={image} setImage={setImage} />
        <ColorPicker color={accentColor} setColor={setAccentColor} />
        <OptionsToggle
          label="Choose the Spotify logo color"
          value={spotifyLogo}
          onChange={setSpotifyLogo}
          options={[
            {
              value: 'spotifyBlackLogo',
              label: (
                <>
                  <ColorPreview color="#000000" /> Black
                </>
              ),
            },
            {
              value: 'spotifyWhiteLogo',
              label: (
                <>
                  <ColorPreview color="#ffffff" /> White
                </>
              ),
            },
            { value: '', label: 'Without logo' },
          ]}
        />
      </Form>
      <Preview>
        <Model1
          generatedContentRef={generatedContentRef}
          title={title}
          titleColor={titleColor}
          color={accentColor}
          spotifyLogo={spotifyLogo}
          image={image && URL.createObjectURL(image)}
        />
        <DownloadButton content={generatedContentRef.current} />
      </Preview>
    </Container>
  );
}
