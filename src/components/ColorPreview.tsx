import React from 'react';
import styled from 'styled-components';

const Icon = styled.div<{ color: string }>`
  width: 15px;
  height: 15px;
  background: ${(props) => props.color};
  margin-right: 10px;
  border-radius: 10px;
`;

interface ColorPreviewProps {
  color: string;
  label?: string;
}

export default function ColorPreview(props: ColorPreviewProps): React.ReactElement {
  return (
    <>
      <Icon color={props.color} />
      {props.label}
    </>
  );
}
