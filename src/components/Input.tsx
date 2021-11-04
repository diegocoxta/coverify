import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

import Label from './Label';

const Container = styled.div`
  margin-bottom: 20px;
`;

const Field = styled.input`
  background: #262626;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 0px;
  width: 100%;
  box-sizing: border-box;
  color: #b5b5b5;

  :focus {
    outline: none;
  }
`;

const Counter = styled.p`
  font-size: 12px;
  margin: 10px 0 0;
  color: #b5b5b5;
`;

export default function Input(props: InputHTMLAttributes<HTMLInputElement>): React.ReactElement {
  const { maxLength, value } = props;
  return (
    <Container>
      <Label>{props.placeholder}</Label>
      <Field {...props} />
      <Counter>{maxLength ?? 0 - (value?.toString() ?? '').length} remaining characters</Counter>
    </Container>
  );
}
