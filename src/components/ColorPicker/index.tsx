import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

import { useLocale } from '~/utils/locale';

import Button from '~/components/Button';
import ColorDot from '~/components/ColorDot';
import Label from '~/components/Label';

import { Container, Popover, Cover } from './styled';

interface ColorPickerProps {
  label?: string;
  value: string;
  onChange: (color: string) => void;
}

export default function ColorPicker(props: ColorPickerProps): React.ReactElement {
  const [enableColorPicker, setEnableColorPicker] = useState(false);
  const locale = useLocale();

  return (
    <Container>
      {props.label && <Label>{props.label}</Label>}
      <Button onClick={() => setEnableColorPicker(!enableColorPicker)}>
        <ColorDot color={props.value} />
        {locale.getTranslationFor('form.template.color_picker')}
      </Button>
      {enableColorPicker && (
        <Popover>
          <Cover onClick={() => setEnableColorPicker(false)} />
          <ChromePicker color={props.value} onChange={(color) => props.onChange(color.hex)} />
        </Popover>
      )}
    </Container>
  );
}
