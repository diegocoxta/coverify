import React from 'react';
import styled from 'styled-components';

import DraggableResizableImage from '~/components/Covers/components/DraggableResizableImage';
import BlankImage from '~/components/Covers/components/BlankImage';

import ViewProps from './ViewProps';

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
  font-family: Arial, sans-serif;
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
      <Image>{props.image && <DraggableResizableImage source={props.image} initialWidth={310} />}</Image>
    </>
  );
}
