import React from 'react';

import Label from 'src/components/Label';
import ColorDot from 'src/components/ColorDot';

import { Container, Options, Option } from './styled';

interface OptionsToggleProps {
  label?: string;
  options: Array<{
    value: string;
    label: string | React.ReactElement;
    color?: string;
  }>;
  value: string;
  onChange: (value: string) => void;
}

export default function OptionsToggle(props: OptionsToggleProps): React.ReactElement {
  return (
    <Container>
      {props.label && <Label>{props.label}</Label>}
      <Options>
        {props.options.map((option, index) => (
          <Option selected={option.value === props.value} onClick={() => props.onChange(option.value)} key={index}>
            {option.color && <ColorDot color={option.color} />}
            {option.label}
          </Option>
        ))}
      </Options>
    </Container>
  );
}
