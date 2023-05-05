import React, { useRef, useReducer } from 'react';
import { graphql } from 'gatsby';
import domtoimage from 'dom-to-image-more';
import FileSaver from 'file-saver';
import styled from 'styled-components';

import { logCoverDownload, LogCoverEditEvent as CoverEdit } from '~/utils/analytics';
import { usei18n } from '~/utils/i18n';
import { formState, formReducer } from '~/reducers/form';

import Page from '~/components/Page';
import ColorPicker from '~/components/ColorPicker';
import ImagePicker from '~/components/ImagePicker';
import OptionsToggle from '~/components/OptionsToggle';
import TitleInput from '~/components/TitleInput';
import Covers from '~/components/Covers';

import Button from '~/components/Button';

export const Form = styled.div`
  width: 100%;
`;

export const Preview = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Fieldset = styled.div`
  margin: 0px 10px 20px;
  padding: 20px;
  box-sizing: border-box;
  background: #181818;
  border-radius: 10px;
`;

export const DownloadButton = styled(Button)`
  background: #21c549;
  margin: 20px 0;
  color: #fff;
  border: 0px;
  transition: all 0.2s;

  :disabled {
    cursor: default;
    background: gray;
  }

  :enabled {
    :hover {
      background: #21c549;
      transform: scale(1.05);
    }
  }
`;

export default function HomePage(): React.ReactElement {
  const i18n = usei18n();
  const previewRef = useRef(null);
  const [state, dispatch] = useReducer(formReducer, formState);

  const onDownloadClick = () => {
    // call this method two times as a temporary fix to iOS Sarafi limitations
    domtoimage.toPng(previewRef.current, { quality: 1, scale: 3 }).then(() => {
      domtoimage.toPng(previewRef.current, { quality: 1, scale: 3 }).then((dataUrl: string) => {
        FileSaver.saveAs(dataUrl, 'cover.png');
      });
    });

    logCoverDownload();
  };

  return (
    <Page accentColor={state.accentColor}>
      <Preview>
        <Covers
          {...state}
          title={state.title !== '' ? state.title : i18n.getTranslationFor('form.title.placeholder')}
          innerRef={previewRef}
        />
        <DownloadButton disabled={!previewRef.current} onClick={onDownloadClick}>
          {i18n.getTranslationFor('preview.download')}
        </DownloadButton>
      </Preview>
      <Form>
        <Fieldset>
          <TitleInput
            value={state.title}
            onChange={(e) =>
              dispatch({
                type: CoverEdit.title_changed,
                value: e.target.value,
              })
            }
          />
          <OptionsToggle
            options={[
              {
                value: '#000000',
                label: i18n.getTranslationFor('form.title.color_black'),
                color: '#000000',
              },
              {
                value: '#ffffff',
                label: i18n.getTranslationFor('form.title.color_white'),
                color: '#ffffff',
              },
            ]}
            value={state.titleColor}
            onChange={(color) =>
              dispatch({
                type: CoverEdit.title_color_changed,
                value: color,
              })
            }
          />
        </Fieldset>
        <Fieldset>
          <ImagePicker
            value={state.image}
            onChange={(image) =>
              dispatch({
                type: CoverEdit.image_changed,
                value: image,
              })
            }
          />
        </Fieldset>
        <Fieldset>
          <OptionsToggle
            label={i18n.getTranslationFor('form.template.title')}
            options={[
              { value: '1', label: '#1' },
              { value: '2', label: '#2' },
              { value: '3', label: '#3' },
              { value: '4', label: '#4' },
            ]}
            value={state.view}
            onChange={(view) =>
              dispatch({
                type: CoverEdit.view_changed,
                value: view,
              })
            }
          />
          <ColorPicker
            value={state.accentColor}
            onChange={(color) =>
              dispatch({
                type: CoverEdit.color_changed,
                value: color,
              })
            }
          />
        </Fieldset>
        <Fieldset>
          <OptionsToggle
            label={i18n.getTranslationFor('form.spotify.title')}
            options={[
              {
                value: 'spotifyBlackLogo',
                label: i18n.getTranslationFor('form.spotify.icon_black'),
                color: '#000000',
              },
              {
                value: 'spotifyWhiteLogo',
                label: i18n.getTranslationFor('form.spotify.icon_white'),
                color: '#ffffff',
              },
              { value: '', label: i18n.getTranslationFor('form.spotify.icon_none') },
            ]}
            value={state.spotifyLogo}
            onChange={(logo) =>
              dispatch({
                type: CoverEdit.spotify_logo_changed,
                value: logo,
              })
            }
          />
        </Fieldset>
      </Form>
    </Page>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
