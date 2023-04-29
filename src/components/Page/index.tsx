import React from 'react';

import { usei18n } from 'src/utils/i18n';

import GlobalStyle from 'src/components/GlobalStyle';

import {
  Background,
  Header,
  SubHeader,
  Container,
  Footer,
  Avatar,
  AvatarArrownDown,
  AvatarName,
  AvatarPhoto,
} from './styled';

interface PageProps {
  accentColor: string;
  children: React.ReactElement | React.ReactElement[];
}

export default function Page(props: PageProps): React.ReactElement {
  const i18n = usei18n();

  return (
    <>
      <GlobalStyle />
      <Background color={props.accentColor} />
      <Avatar href="https://diegocosta.me?utm_medium=coverify&utm_campaign=coverify-avatar&utm_source=coverify">
        <AvatarPhoto alt="diegocosta.me" src="https://avatars.githubusercontent.com/u/3134422?s=60&v=4" />
        <AvatarName>diegocosta.me</AvatarName>
        <AvatarArrownDown />
      </Avatar>
      <Header>coverify.</Header>
      {i18n
        .getTranslationFor('page.description')
        .split('\n')
        .map((d, index) => (
          <SubHeader key={`subheader-${index}`}>{d}</SubHeader>
        ))}
      <Container>{props.children}</Container>
      <Footer>
        CC-BY {new Date().getFullYear()} •
        <a href="https://github.com/diegocoxta/coverify.">{i18n.getTranslationFor('footer.sourceCode')}</a>
      </Footer>
    </>
  );
}
