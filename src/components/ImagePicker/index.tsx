import React, { useRef } from 'react';

import { usei18n } from 'src/utils/i18n';

import Button from 'src/components/Button';
import Label from 'src/components/Label';

import { Container, HiddenInput, PrivacyDisclaimer } from './styled';

interface ImagePickerProps {
  onChange: (file: string) => void;
  value?: string;
}

export default function ImagePicker(props: ImagePickerProps): React.ReactElement {
  const inputRef = useRef<HTMLInputElement>(null);
  const i18n = usei18n();

  const changeImage = (file?: File | null) => {
    if (!file) {
      return false;
    }

    props.onChange(URL.createObjectURL(file));
  };

  return (
    <Container>
      <Label>{i18n.getTranslationFor('form.image.title')}</Label>
      <Button onClick={() => inputRef.current?.click()}>
        {props.value ? i18n.getTranslationFor('form.image.button_active') : i18n.getTranslationFor('form.image.button')}
      </Button>
      <HiddenInput ref={inputRef} type="file" onChange={(e) => changeImage(e?.target?.files?.item(0))} />
      <PrivacyDisclaimer>{i18n.getTranslationFor('form.image.privacy_discraymer')}</PrivacyDisclaimer>
    </Container>
  );
}
