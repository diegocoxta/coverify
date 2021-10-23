import React from 'react';
import styled from 'styled-components';

import Label from './Label';

const Container = styled.div``;

const Field = styled.input`
  background: #fff;
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  border: 0px;
  width: 100%;
  box-sizing: border-box;

  :focus {
    outline: none;
  }
`;

const Counter = styled.p`
  margin: 0px;
  font-family: Arial, sans-serif;
  font-size: 12px;
  margin: 10px 0;
`;

export default function Input(props) {
  return (
    <Container>
      <Label>Playlist name</Label>
      <Field {...props} />
      <Counter>{props.maxLength - props.value.length} remaining characters</Counter>
    </Container>
  );
}
