import React from 'react';
import styled from 'styled-components';

import ViewProps from './ViewProps';
import DraggableImage from '../components/DraggableImage';
import BlankImage from '../components/BlankImage';

const Header = styled.div`
  height: 80px;
  width: 230px;
  margin: 40px 0 15px;
  word-break: break-word;
  text-align: center;
  overflow: hidden;
`;

const Title = styled.p<{ color: ViewProps['titleColor'] }>`
  font-style: normal;
  font-weight: bold;
  font-size: 38px;
  line-height: 1;
  margin: 0;
  letter-spacing: -0.04em;
  color: ${(props) => props.color};
`;

const Image = styled(BlankImage)`
  width: 310px;
  height: 190px;
`;

export default function Model1(props: ViewProps): React.ReactElement {
  return (
    <>
      <Header>
        <Title color={props.titleColor}>{props.title}</Title>
      </Header>
      <Image>{props.image && <DraggableImage source={props.image} width={360} />}</Image>
    </>
  );
}
