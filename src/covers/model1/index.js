import React from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';

import * as assets from '../../assets';

const Container = styled.div`
  width: 240px;
  height: 240px;
  background-color: ${(props) => props.color};
  background-image: url(${(props) => assets[props.spotifyLogo]});
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: 15px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
`;

const Title = styled.p`
  font-family: Arial, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 1;
  text-align: center;
  letter-spacing: -0.04em;
  color: ${(props) => props.color};
  width: 180px;
  margin: 10px;
  height: 55px;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  width: 210px;
  height: 130px;
  background: #fff;
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  width: 210px;
  cursor: grabbing;
`;

export default function Model1(props) {
  return (
    <Container ref={props.generatedContentRef} color={props.color} spotifyLogo={props.spotifyLogo}>
      <Title color={props.titleColor}>{props.title}</Title>

      <ImageContainer>
        {props.image && (
          <Draggable
            allowAnyClick={true}
            axis="y"
            handle=".handle"
            defaultPosition={{ x: 0, y: 0 }}
            grid={[1, 1]}
            scale={1}
          >
            <Image className="handle" src={props.image} />
          </Draggable>
        )}
      </ImageContainer>
    </Container>
  );
}
