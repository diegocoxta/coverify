import React from 'react';
import styled from 'styled-components';

import DraggableImage from '../components/DraggableImage';

const Header = styled.div`
  height: 80px;
  width: 230px;
  margin: 40px 0 15px;
  word-break: break-word;
  text-align: center;
  overflow: hidden;
`;

const SubTitle = styled.p`
  font-family: Arial, sans-serif;
  font-weight: bold;
  margin: 0 0 5px 0;
  text-transform: uppercase;
  color: ${(props) => props.color};
  font-size: 14px;
`;

const Title = styled.p`
  font-family: Arial, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 1;
  margin: 0;
  letter-spacing: -0.04em;
  color: ${(props) => props.color};
`;

const Image = styled.div`
  width: 340px;
  height: 210px;
  background: #fff;
  overflow: hidden;
`;

export default function Model2(props) {
  return (
    <>
      <Header>
        <SubTitle color={props.titleColor}>This Is</SubTitle>
        <Title color={props.titleColor}>{props.title}</Title>
      </Header>
      <Image>{props.image && <DraggableImage source={props.image} width={360} />}</Image>
    </>
  );
}
