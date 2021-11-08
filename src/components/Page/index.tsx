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
      <Avatar href="https://diegocosta.me?utm_medium=capinha&utm_campaign=capinha-avatar&utm_source=capinha">
        <AvatarPhoto alt="diegocosta.me" src="https://avatars.githubusercontent.com/u/3134422?s=60&v=4" />
        <AvatarName>diegocosta.me</AvatarName>
        <AvatarArrownDown />
      </Avatar>
      <Header>capinha.</Header>
      <SubHeader>{i18n.getTranslationFor('page.description')}</SubHeader>
      <Container>{props.children}</Container>
      <Footer>
        CC-BY {new Date().getFullYear()} •
        <a href="https://github.com/diegocosta/capinha">{i18n.getTranslationFor('footer.sourceCode')}</a>
      </Footer>
    </>
  );
}
