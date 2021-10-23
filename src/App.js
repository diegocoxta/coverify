import React, { useState, useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import ColorPicker from './components/ColorPicker';
import ImagePicker from './components/ImagePicker';
import OptionsToggle from './components/OptionsToggle';
import ColorPreview from './components/ColorPreview';
import DownloadButton from './components/DownloadButton';
import Input from './components/Input';
import Covers from './components/Covers';
import Footer from './components/Footer';
import Avatar from './components/Avatar';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background:#0F0F0F ;

    @media (min-width: 750px) {
      height: 100vh;
      width: 100vw;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const Container = styled.div`
  margin: 0 auto;
  background: #131313;

  @media (min-width: 750px) {
    display: flex;
    flex-direction: row;
    display: flex;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 5px solid #1e1e1e;
  border-radius: 10px;
  padding: 10px;
`;

const Preview = styled.div`
  width: 100%;
  padding: 20px;
`;

const Fieldset = styled.div`
  background: #131313;
  padding: 20px;
  margin: 5px 0;
  border-radius: 5px;

  &:hover {
    background: #1e1e1e;
  }
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
    <>
      <GlobalStyle />
      <Avatar />
      <Container>
        <Form>
          <Fieldset>
            <Input maxLength={22} type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </Fieldset>
          <Fieldset>
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
          </Fieldset>
          <Fieldset>
            <ImagePicker image={image} setImage={setImage} />
          </Fieldset>{' '}
          <Fieldset>
            <ColorPicker color={accentColor} setColor={setAccentColor} />
          </Fieldset>
          <Fieldset>
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
                { value: '', label: 'None' },
              ]}
            />
          </Fieldset>
        </Form>
        <Preview>
          <Fieldset>
            <OptionsToggle
              label="Choose your favorite cover model"
              value={view}
              onChange={setView}
              options={[
                { value: 1, label: '#1' },
                { value: 2, label: '#2' },
                { value: 3, label: '#3' },
                { value: 4, label: '#4' },
              ]}
            />
          </Fieldset>
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
      <Footer />
    </>
  );
}
