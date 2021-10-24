import React, { useState } from 'react';
import styled from 'styled-components';
import { ChromePicker } from 'react-color';

import Button from './Button';
import ColorPreview from './ColorPreview';
import Label from './Label';

const Popover = styled.div`
  position: absolute;
  z-index: 2;
`;

const Cover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export default function ColorPicker(props) {
  const [colorPicker, setColorPicker] = useState(false);

  return (
    <>
      {props.label && <Label>{props.label}</Label>}
      <Button onClick={() => setColorPicker(!colorPicker)}>
        <ColorPreview color={props.color} />
        Choose an color
      </Button>
      {colorPicker && (
        <Popover>
          <Cover onClick={() => setColorPicker(false)} />
          <ChromePicker color={props.color} onChange={(color) => props.setColor(color.hex)} />
        </Popover>
      )}
    </>
  );
}
