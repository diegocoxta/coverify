import React from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';

import * as assets from '../../assets';

const Container = styled.div`
  width: 400px;
  height: 400px;
  background-color: ${(props) => props.color};
  background-image: url(${(props) => assets[props.spotifyLogo]});
  background-repeat: no-repeat;
  background-size: 30px;
  background-position: 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
`;

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

const Image = styled.img`
  width: 360px;
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
