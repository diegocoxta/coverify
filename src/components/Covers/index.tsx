import React from 'react';
import styled from '@emotion/styled';

import assets from '~/assets';
import { useLocale } from '~/utils/locale';

import ViewProps from '~/components/Covers/views/ViewProps';
import View1 from '~/components/Covers/views/View1';
import View2 from '~/components/Covers/views/View2';
import View3 from '~/components/Covers/views/View3';
import View4 from '~/components/Covers/views/View4';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Cover = styled.div<{ color?: ViewProps['accentColor']; logo?: ViewProps['spotifyLogo'] }>`
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
  innerRef: React.RefObject<HTMLDivElement | undefined>;
}

export default function Covers(props: CoverProps): React.ReactElement {
  const locale = useLocale();

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

  const coverProps: Record<string, unknown> = {
    color: props.accentColor,
    logo: props.spotifyLogo,
    ref: props.innerRef,
  };

  return (
    <Container>
      <Cover {...coverProps}>{renderViews(props.view)}</Cover>
      <Disclaimer>{locale.getTranslationFor('preview.tip')}</Disclaimer>
    </Container>
  );
}
