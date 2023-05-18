import React from 'react';
import { Helmet } from 'react-helmet';

import { useLocale } from '~/utils/locale';

import GlobalStyle from '~/components/GlobalStyle';

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
  Form,
  Preview,
  Fieldset,
  DownloadButton,
} from './styled';

interface PageProps {
  accentColor: string;
  children: React.ReactElement | React.ReactElement[];
}

export default function Page(props: PageProps): React.ReactElement {
  const locale = useLocale();

  return (
    <>
      <Helmet>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Create spotify-inspired covers for your personal playlists" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <title>coverify. create spotify-inspired covers for your personal playlists.</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <Background color={props.accentColor} />
      <Avatar href="https://diegocosta.me?utm_medium=coverify&utm_campaign=coverify-avatar&utm_source=coverify">
        <AvatarPhoto alt="diegocosta.me" src="https://avatars.githubusercontent.com/u/3134422?s=60&v=4" />
        <AvatarName>diegocosta.me</AvatarName>
        <AvatarArrownDown />
      </Avatar>
      <Header>coverify.</Header>
      {locale
        .getTranslationFor('page.description')
        .split('\n')
        .map((d, index) => (
          <SubHeader key={`subheader-${index}`}>{d}</SubHeader>
        ))}
      <Container>{props.children}</Container>
      <Footer>
        CC-BY {new Date().getFullYear()} •
        <a href="https://github.com/diegocoxta/coverify.">{locale.getTranslationFor('footer.sourceCode')}</a>
      </Footer>
    </>
  );
}

export { Form, Preview, Fieldset, DownloadButton };
