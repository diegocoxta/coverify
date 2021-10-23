import React from 'react';
import styled from 'styled-components';

import DraggableImage from './components/DraggableImage';

const Title = styled.p`
  font-family: Arial, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 1;
  letter-spacing: -0.04em;
  color: ${(props) => props.color};
  width: 360px;
  margin: 10px;
  height: 100px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ImageContainer = styled.div`
  width: 360px;
  height: 230px;
  background: #fff;
  position: relative;
  overflow: hidden;
`;

export default function Model1(props) {
  return (
    <>
      <Title color={props.titleColor}>{props.title}</Title>
      <ImageContainer>{props.image && <DraggableImage source={props.image} width={360} />}</ImageContainer>
    </>
  );
}
