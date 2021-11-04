import React from 'react';
import styled from 'styled-components';

import assets from '../../assets';

import ViewProps from './views/ViewProps';
import View1 from './views/View1';
import View2 from './views/View2';
import View3 from './views/View3';
import View4 from './views/View4';

const Container = styled.div``;

const Cover = styled.div<{ color?: string; logo?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 340px;
  height: 340px;
  background-color: ${(props) => props.color};
  background-image: url(${(props) => props.logo && assets[props.logo]});
  background-repeat: no-repeat;
  background-size: 30px;
  background-position: 20px 20px;
  overflow: hidden;
  position: relative;
`;

const Disclaimer = styled.p`
  color: #b5b5b5;
  text-align: center;
  font-size: 12px;
`;

interface CoverProps extends ViewProps {
  innerRef: React.RefObject<HTMLDivElement>;
  view: string;
}

export default function Covers(props: CoverProps): React.ReactElement {
  const renderViews = (view: string) => {
    switch (view) {
      case '4':
        return <View4 {...props} />;
      case '3':
        return <View3 {...props} />;
      case '2':
        return <View2 {...props} />;
      case '1':
      default:
        return <View1 {...props} />;
    }
  };

  return (
    <Container>
      <Cover ref={props.innerRef} color={props.color} logo={props.logo}>
        {renderViews(props.view)}
      </Cover>
      <Disclaimer>Tip: Drag the image to position adjustment.</Disclaimer>
    </Container>
  );
}
