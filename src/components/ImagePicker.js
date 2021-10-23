import React, { useRef } from 'react';
import styled from 'styled-components';

import Button from './Button';

const Container = styled.div``;

const HiddenInput = styled.input`
  display: none;
`;

export default function ImagePicker(props) {
  const inputRef = useRef(null);

  return (
    <Container>
      <Button onClick={() => inputRef.current.click()}>
        {props.image ? 'Choose another image' : 'Choose an image'}
      </Button>
      <HiddenInput ref={inputRef} type="file" onChange={(e) => props.setImage(e.target.files[0])} />
    </Container>
  );
}
