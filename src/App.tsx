import React, { useRef, useReducer } from 'react';
import domtoimage from 'dom-to-image-more';
import FileSaver from 'file-saver';

import { useLocale } from '~/utils/locale';
import { formState, formReducer, LogCoverEditEvent } from '~/reducers/form';

import Page, { Form, Preview, Fieldset, DownloadButton } from '~/components/Page';
import ColorPicker from '~/components/ColorPicker';
import ImagePicker from '~/components/ImagePicker';
import OptionsToggle from '~/components/OptionsToggle';
import TitleInput from '~/components/TitleInput';
import Covers from '~/components/Covers';

export default function HomePage(): React.ReactElement {
  const locale = useLocale();
  const previewRef = useRef<HTMLDivElement>(undefined);
  const [state, dispatch] = useReducer(formReducer, formState);

  const onDownloadClick = () => {
    // call this method two times as a temporary fix to iOS Sarafi limitations
    domtoimage.toPng(previewRef.current, { quality: 1, scale: 3 }).then(() => {
      domtoimage.toPng(previewRef.current, { quality: 1, scale: 3 }).then((dataUrl: string) => {
        FileSaver.saveAs(dataUrl, 'cover.png');
      });
    });
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
                type: LogCoverEditEvent.TITLE_CHANGED,
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
                type: LogCoverEditEvent.TITLE_COLOR_CHANGED,
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
                type: LogCoverEditEvent.IMAGE_CHANGED,
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
                type: LogCoverEditEvent.VIEW_CHANGED,
                value: view,
              })
            }
          />
          <ColorPicker
            value={state.accentColor}
            onChange={(color) =>
              dispatch({
                type: LogCoverEditEvent.COLOR_CHANGED,
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
                type: LogCoverEditEvent.STREAMING_SERVICE_LOGO_CHANGED,
                value: logo,
              })
            }
          />
        </Fieldset>
      </Form>
    </Page>
  );
}
