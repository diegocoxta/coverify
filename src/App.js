import React, { useState, useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import ColorPicker from './components/ColorPicker';
import ImagePicker from './components/ImagePicker';
import OptionsToggle from './components/OptionsToggle';
import ColorPreview from './components/ColorPreview';
import DownloadButton from './components/DownloadButton';
import Input from './components/Input';
import Covers from './components/Covers';
import Avatar from './components/Avatar';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color:#121212;
    background-size: 100% 200px;
    background-repeat: no-repeat;
    font-family: Arial, sans-serif;
  }
`;

const GradientBackground = styled.div`
  background-color: ${(props) => props.color};
  background-image: linear-gradient(rgba(0, 0, 0, 0.6) 0, #121212 100%);
  height: 332px;
  margin-top: -60px;
  position: absolute;
  width: 100%;
  z-index: -1;
`;

const Header = styled.h1`
  color: #fff;
  margin: 0;
  padding: 0;
  font-size: 56px;
  margin-top: 50px;
  padding: 20px 20px 0;
  font-weight: 400;
`;

const SubHeader = styled.p`
  color: #a4a4a4;
  margin: 0;
  padding: 0;
  font-size: 18px;
  margin: 0 20px;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  border-radius: 10px;
  margin-bottom: 30px;

  @media (min-width: 750px) {
    display: flex;
    flex-direction: row;
    display: flex;
  }
`;

const Footer = styled.div`
  border-bottom: 20px solid #25d34e;
  border-top: 1px solid #1e1e1e;
  background: #131313;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Form = styled.div`
  width: 100%;
`;

const Preview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Fieldset = styled.div`
  margin: 20px 10px;
  padding: 20px;
  box-sizing: border-box;
  background: #181818;
  border-radius: 10px;
`;

export default function App() {
  const [title, setTitle] = useState('Your playlist name');
  const [titleColor, setTitleColor] = useState('#000000');
  const [accentColor, setAccentColor] = useState('#8F2A34');
  const [image, setImage] = useState(null);
  const [spotifyLogo, setSpotifyLogo] = useState('spotifyBlackLogo');
  const [view, setView] = useState(1);

  const generatedContentRef = useRef(null);

  return (
    <>
      <GlobalStyle />
      <GradientBackground color={accentColor} />
      <Avatar />
      <Container>
        <Form>
          <Header>covermix.</Header>
          <SubHeader>Create spotify-inspired covers for your personal playlists.</SubHeader>
          <Fieldset>
            <Input maxLength={22} type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </Fieldset>
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

          <Fieldset>
            <ColorPicker color={accentColor} setColor={setAccentColor} />
          </Fieldset>

          <Fieldset>
            <ImagePicker image={image} setImage={setImage} />
          </Fieldset>
          <Fieldset>
            <OptionsToggle
              label="Choose the text color"
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
