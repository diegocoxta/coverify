import React, { InputHTMLAttributes } from 'react';

import { usei18n } from '~/utils/i18n';

import Label from '~/components/Label';

import { Container, Field, RemainingCharacters } from './styled';

export default function TitleInput(props: InputHTMLAttributes<HTMLInputElement>): React.ReactElement {
  const { value } = props;
  const i18n = usei18n();

  const customProps = {
    ...props,
    placeholder: i18n.getTranslationFor('form.title.placeholder'),
    maxLength: 22,
    type: 'text',
  };

  return (
    <Container>
      <Label>{i18n.getTranslationFor('form.title.title')}</Label>
      <Field {...customProps} />
      <RemainingCharacters>
        {(customProps.maxLength ?? 0) - (value?.toString() ?? '').length}{' '}
        {i18n.getTranslationFor('form.title.remaining_characters')}
      </RemainingCharacters>
    </Container>
  );
}
