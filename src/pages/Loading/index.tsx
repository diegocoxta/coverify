import React from 'react';

import GlobalStyle from 'src/components/GlobalStyle';

import { Container, Label } from './styled';

export default function LoadingPage(): React.ReactElement {
  return (
    <Container>
      <GlobalStyle />
      <Label>Loading...</Label>
    </Container>
  );
}
