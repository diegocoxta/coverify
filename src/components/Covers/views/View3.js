import React from 'react';
import styled from 'styled-components';

import DraggableImage from '../components/DraggableImage';
import BlankImage from '../components/BlankImage';
import * as assets from '../../../assets';

const Title = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  padding-left: 10px;
  line-height: 1;
  margin: 0;
  letter-spacing: -0.04em;
  color: ${(props) => props.color};
  position: absolute;
  bottom: 20px;
  border-left: 10px solid ${(props) => props.borderColor};
`;

const SpotifyLogo = styled.div`
  background-image: url(${(props) => assets[props.logo]});
  background-repeat: no-repeat;
  background-size: 30px;
  width: 30px;
  height: 30px;
  position: absolute;
  z-index: 2;
  top: 20px;
  left: 20px;
`;

const Image = styled(BlankImage)`
  width: 340px;
  height: 330px;
  border-bottom: 10px solid ${(props) => props.color};
  position: absolute;
`;

export default function Model3(props) {
  return (
    <>
      <SpotifyLogo logo={props.logo} />
      <Image color={props.color}>
        {props.image && <DraggableImage source={props.image} width={360} />}
        <Title color={props.titleColor} borderColor={props.color}>
          {props.title}
        </Title>
      </Image>
    </>
  );
}
