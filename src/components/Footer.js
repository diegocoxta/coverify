import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border-bottom: 20px solid #25d34e;
  border-top: 1px solid #1e1e1e;
  background: #131313;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 20px;
`;

export default function Footer() {
  return <Container />;
}
