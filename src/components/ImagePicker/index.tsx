import React, { useRef } from 'react';

import { useLocale } from '~/utils/locale';

import Button from '~/components/Button';
import Label from '~/components/Label';

import { Container, HiddenInput, PrivacyDisclaimer } from './styled';

interface ImagePickerProps {
  onChange: (file: string) => void;
  value?: string;
}

export default function ImagePicker(props: ImagePickerProps): React.ReactElement {
  const inputRef = useRef<HTMLInputElement>(null);
  const locale = useLocale();

  const changeImage = (file?: File | null) => {
    if (!file) {
      return false;
    }

    props.onChange(URL.createObjectURL(file));
  };

  return (
    <Container>
      <Label>{locale.getTranslationFor('form.image.title')}</Label>
      <Button onClick={() => inputRef.current?.click()}>
        {props.value
          ? locale.getTranslationFor('form.image.button_active')
          : locale.getTranslationFor('form.image.button')}
      </Button>
      <HiddenInput ref={inputRef} type="file" onChange={(e) => changeImage(e?.target?.files?.item(0))} />
      <PrivacyDisclaimer>{locale.getTranslationFor('form.image.privacy_discraymer')}</PrivacyDisclaimer>
    </Container>
  );
}
