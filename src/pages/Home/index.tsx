import React, { useRef, useReducer } from 'react';
import domtoimage from 'dom-to-image-more';
import FileSaver from 'file-saver';

import { logCoverDownload, LogCoverEditEvent as CoverEdit } from 'src/utils/analytics';
import { usei18n } from 'src/utils/i18n';
import { formState, formReducer } from 'src/reducers/form';

import Page from 'src/components/Page';
import ColorPicker from 'src/components/ColorPicker';
import ImagePicker from 'src/components/ImagePicker';
import OptionsToggle from 'src/components/OptionsToggle';
import TitleInput from 'src/components/TitleInput';
import Covers from 'src/components/Covers';

import { Form, Fieldset, Preview, DownloadButton } from './styled';

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
