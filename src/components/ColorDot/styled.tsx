import styled from 'styled-components';

export const ColorDot = styled.div<{ color: string }>`
  width: 15px;
  height: 15px;
  background: ${(props) => props.color};
  margin-right: 10px;
  border-radius: 10px;
`;
