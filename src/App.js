import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import ColorPicker from './components/ColorPicker';
import ImagePicker from './components/ImagePicker';
import OptionsToggle from './components/OptionsToggle';
import ColorPreview from './components/ColorPreview';
import DownloadButton from './components/DownloadButton';
import Input from './components/Input';
import Covers from './components/Covers';

const Container = styled.div`
  margin: 0 auto;
  background: gray;

  @media (min-width: 760px) {
    width: 960px;
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

export default function App() {
  const [title, setTitle] = useState('Your playlist name');
  const [titleColor, setTitleColor] = useState('#000000');
  const [accentColor, setAccentColor] = useState('#7900D9');
  const [image, setImage] = useState(null);
  const [spotifyLogo, setSpotifyLogo] = useState('spotifyBlackLogo');
  const [view, setView] = useState(1);

  const generatedContentRef = useRef(null);

  return (
    <Container>
      <Form>
        <Input maxLength={22} type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
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
        <OptionsToggle
          label="Choose your favorite cover model"
          value={view}
          onChange={setView}
          options={[
            { value: 1, label: 'Model 1' },
            { value: 2, label: 'Model 2' },
            { value: 3, label: 'Model 3' },
            { value: 4, label: 'Model 4' },
          ]}
        />
        <Covers
          innerRef={generatedContentRef}
          title={title}
          titleColor={titleColor}
          color={accentColor}
          logo={spotifyLogo}
          image={image}
          view={view}
        />

        <DownloadButton content={generatedContentRef.current} />
      </Preview>
    </Container>
  );
}
