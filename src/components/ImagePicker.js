import React, { useRef } from 'react';
import styled from 'styled-components';

import Button from './Button';

const Container = styled.div``;

const HiddenInput = styled.input`
  display: none;
`;

const PrivacyDisclaimer = styled.p`
  margin: 0px;
  font-size: 12px;
  margin: 10px 0 0;
  color: #b5b5b5;
  text-align: center;
`;

export default function ImagePicker(props) {
  const inputRef = useRef(null);

  const changeImage = (file) => {
    if (!file) {
      return false;
    }

    props.setImage(file);
  };

  return (
    <Container>
      <Button onClick={() => inputRef.current.click()}>
        {props.image ? 'Choose another image' : 'Choose an image'}
      </Button>
      <HiddenInput ref={inputRef} type="file" onChange={(e) => changeImage(e.target.files[0])} />
      <PrivacyDisclaimer>
        The image will be processed in your browser, it should never be collected, or stored by me.
      </PrivacyDisclaimer>
    </Container>
  );
}
