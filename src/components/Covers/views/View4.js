import React from 'react';
import styled from 'styled-components';

import DraggableImage from '../components/DraggableImage';

const Header = styled.div`
  height: 80px;
  width: 230px;
  margin: 30px 0 15px;
  word-break: break-word;
  text-align: center;
  overflow: hidden;
`;

const Title = styled.p`
  font-family: Arial, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 38px;
  line-height: 1;
  margin: 0;
  letter-spacing: -0.04em;
  color: ${(props) => props.color};
`;

const Image = styled.div`
  width: 340px;
  height: 215px;
  background: #fff;
  overflow: hidden;
`;

export default function Model4(props) {
  return (
    <>
      <Header>
        <Title color={props.titleColor}>{props.title}</Title>
      </Header>
      <Image>{props.image && <DraggableImage source={props.image} width={360} />}</Image>
    </>
  );
}
