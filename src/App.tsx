import React, { useState, useRef } from 'react';

import { logCoverDownload, logCoverEdit } from './utils/analytics';

import * as Layout from './components/Layout';
import ColorPicker from './components/ColorPicker';
import ImagePicker from './components/ImagePicker';
import OptionsToggle from './components/OptionsToggle';
import ColorPreview from './components/ColorPreview';
import DownloadButton from './components/DownloadButton';
import Input from './components/Input';
import Covers from './components/Covers';
import Avatar from './components/Avatar';

export default function App(): React.ReactElement {
  const [title, setTitle] = useState<string>('Your playlist name');
  const [titleColor, setTitleColor] = useState<string>('#000000');
  const [accentColor, setAccentColor] = useState(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  const [image, setImage] = useState<File | null | undefined>(null);
  const [spotifyLogo, setSpotifyLogo] = useState('spotifyBlackLogo');
  const [view, setView] = useState<string>('1');

  const generatedContentRef = useRef(null);

  return (
    <>
      <Layout.GlobalStyle />
      <Layout.GradientBackground color={accentColor} />
      <Avatar />
      <Layout.Header>covermix.</Layout.Header>
      <Layout.SubHeader>Create Spotify-inspired covers for your personal playlists.</Layout.SubHeader>
      <Layout.Container>
        <Layout.Form>
          <Layout.Fieldset>
            <Input
              placeholder="Title"
              maxLength={22}
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                logCoverEdit('title_changed', e.target.value);
              }}
            />
            <OptionsToggle
              value={titleColor}
              onChange={(color) => {
                setTitleColor(color);
                logCoverEdit('title_color_changed', color);
              }}
              options={[
                {
                  value: '#000000',
                  label: <ColorPreview color="#000000" label="Black" />,
                },
                {
                  value: '#ffffff',
                  label: <ColorPreview color="#ffffff" label="White" />,
                },
              ]}
            />
          </Layout.Fieldset>
          <Layout.Fieldset>
            <ImagePicker
              label="Image"
              image={image}
              setImage={(image) => {
                setImage(image);
                logCoverEdit('image_changed');
              }}
            />
          </Layout.Fieldset>
          <Layout.Fieldset>
            <OptionsToggle
              label="Template"
              value={view}
              onChange={(view) => {
                setView(view);
                logCoverEdit('view_changed', view);
              }}
              options={[
                { value: '1', label: '#1' },
                { value: '2', label: '#2' },
                { value: '3', label: '#3' },
                { value: '4', label: '#4' },
              ]}
            />
            <ColorPicker
              color={accentColor}
              setColor={(color) => {
                setAccentColor(color);
                logCoverEdit('color_changed', color);
              }}
            />
          </Layout.Fieldset>
          <Layout.Fieldset>
            <OptionsToggle
              label="Spotify Icon"
              value={spotifyLogo}
              onChange={(logo) => {
                setSpotifyLogo(logo);
                logCoverEdit('spotify_logo_changed', logo);
              }}
              options={[
                {
                  value: 'spotifyBlackLogo',
                  label: <ColorPreview color="#000000" label="Black" />,
                },
                {
                  value: 'spotifyWhiteLogo',
                  label: <ColorPreview color="#ffffff" label="White" />,
                },
                { value: '', label: 'None' },
              ]}
            />
          </Layout.Fieldset>
        </Layout.Form>
        <Layout.Preview>
          <Covers
            innerRef={generatedContentRef}
            title={title}
            titleColor={titleColor}
            color={accentColor}
            logo={spotifyLogo}
            image={image}
            view={view}
          />
          <DownloadButton onDownload={() => logCoverDownload()} content={generatedContentRef.current} />
        </Layout.Preview>
      </Layout.Container>
      <Layout.Footer />
    </>
  );
}
