import React, { InputHTMLAttributes } from 'react';

import { useLocale } from '~/utils/locale';

import Label from '~/components/Label';

import { Container, Field, RemainingCharacters } from './styled';

export default function TitleInput(props: InputHTMLAttributes<HTMLInputElement>): React.ReactElement {
  const { value } = props;
  const locale = useLocale();

  const customProps = {
    ...props,
    placeholder: locale.getTranslationFor('form.title.placeholder'),
    maxLength: 22,
    type: 'text',
  };

  return (
    <Container>
      <Label>{locale.getTranslationFor('form.title.title')}</Label>
      <Field {...customProps} />
      <RemainingCharacters>
        {(customProps.maxLength ?? 0) - (value?.toString() ?? '').length}{' '}
        {locale.getTranslationFor('form.title.remaining_characters')}
      </RemainingCharacters>
    </Container>
  );
}
