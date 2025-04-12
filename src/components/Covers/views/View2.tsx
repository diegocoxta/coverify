import React from 'react';
import styled from '@emotion/styled';

import DraggableResizableImage from '~/components/Covers/components/DraggableResizableImage';
import BlankImage from '~/components/Covers/components/BlankImage';

import ViewProps from './ViewProps';

const Header = styled.div`
  height: 80px;
  width: 230px;
  margin: 40px 0 15px;
  overflow-wrap: break-word;
  text-align: center;
  overflow: hidden;
`;

const SubTitle = styled.p<{ color: ViewProps['titleColor'] }>`
  font-weight: bold;
  margin: 0 0 5px 0;
  text-transform: uppercase;
  color: ${(props) => props.color};
  font-size: 14px;
`;

const Title = styled.p<{ color: ViewProps['titleColor'] }>`
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 1;
  margin: 0;
  letter-spacing: -0.04em;
  color: ${(props) => props.color};
  font-family: Arial, sans-serif;
`;

const Image = styled(BlankImage)`
  width: 340px;
  height: 210px;
`;

export default function Model2(props: ViewProps): React.ReactElement {
  return (
    <>
      <Header>
        <SubTitle color={props.titleColor}>This Is</SubTitle>
        <Title color={props.titleColor}>{props.title}</Title>
      </Header>
      <Image>{props.image && <DraggableResizableImage source={props.image} initialWidth={340} />}</Image>
    </>
  );
}
