import React from 'react';
import styled from 'styled-components';

import * as assets from '../../assets';
import Model1 from './Model1';

const Container = styled.div``;

const Cover = styled.div`
  width: 400px;
  height: 400px;
  background-color: ${(props) => props.color};
  background-image: url(${(props) => assets[props.logo]});
  background-repeat: no-repeat;
  background-size: 30px;
  background-position: 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Covers(props) {
  return (
    <Container>
      <Cover ref={props.innerRef} color={props.color} logo={props.logo}>
        <Model1 {...props} />
      </Cover>
    </Container>
  );
}
