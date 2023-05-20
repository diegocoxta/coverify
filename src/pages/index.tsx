import React, { useRef, useReducer } from 'react';
import { graphql, HeadProps } from 'gatsby';
import domtoimage from 'dom-to-image-more';
import FileSaver from 'file-saver';

import { logCoverDownload, LogCoverEditEvent as CoverEdit } from '~/utils/analytics';
import { useLocale } from '~/utils/locale';
import { formState, formReducer } from '~/reducers/form';

import Page, { Form, Preview, Fieldset, DownloadButton } from '~/components/Page';
import ColorPicker from '~/components/ColorPicker';
import ImagePicker from '~/components/ImagePicker';
import OptionsToggle from '~/components/OptionsToggle';
import TitleInput from '~/components/TitleInput';
import Covers from '~/components/Covers';

export default function HomePage(): React.ReactElement {
  const locale = useLocale();
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
          title={state.title !== '' ? state.title : locale.getTranslationFor('form.title.placeholder')}
          innerRef={previewRef}
        />
        <DownloadButton disabled={!previewRef.current} onClick={onDownloadClick}>
          {locale.getTranslationFor('preview.download')}
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
                label: locale.getTranslationFor('form.title.color_black'),
                color: '#000000',
              },
              {
                value: '#ffffff',
                label: locale.getTranslationFor('form.title.color_white'),
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
            label={locale.getTranslationFor('form.template.title')}
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
            label={locale.getTranslationFor('form.spotify.title')}
            options={[
              {
                value: 'spotifyBlackLogo',
                label: locale.getTranslationFor('form.spotify.icon_black'),
                color: '#000000',
              },
              {
                value: 'spotifyWhiteLogo',
                label: locale.getTranslationFor('form.spotify.icon_white'),
                color: '#ffffff',
              },
              { value: '', label: locale.getTranslationFor('form.spotify.icon_none') },
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

export const Head = (props: HeadProps<Queries.HomePageQuery, { language: string }>) => (
  <>
    <html lang={props.pageContext.language} />
    <link rel="manifest" href="/manifest.json" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="description" content="Create spotify-inspired covers for your personal playlists" />
    <link rel="apple-touch-icon" href="/logo192.png" />
    <title>coverify. create spotify-inspired covers for your personal playlists.</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;900&display=swap" rel="stylesheet" />
  </>
);

export const query = graphql`
  query HomePage($language: String!) {
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
