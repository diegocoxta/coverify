import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 240px;
  height: 240px;
  background-color: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 1;
  text-align: center;
  letter-spacing: -0.04em;
  color: #FFFFFF;
`;

const ImageContainer = styled.div`
  width: 210px;
  height: 130px;
  background: #fff;
`;

const Image = styled.img`
  width: 210px;
  height: 130px;
`;

export default function Model1(props) {
  return (
    <Container ref={props.generatedContentRef} color={props.color}>
      <Title>{props.title}</Title>
      <ImageContainer>
        <Image src={props.image} />
      </ImageContainer>
    </Container>
  );
}