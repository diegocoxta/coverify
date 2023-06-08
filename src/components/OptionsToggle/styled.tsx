import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
`;

export const Options = styled.div`
  display: flex;
`;

export const Option = styled.button<{ selected: boolean }>`
  display: flex;
  padding: 10px;
  border-radius: 30px;
  cursor: pointer;
  margin: 0 10px 0 0;
  transition: 0.5s all linear;
  background: transparent;
  border: 1px solid #3f3f3f;
  color: #b5b5b5;
  text-transform: uppercase;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  ${(props) => props.selected && `background: rgba(255, 255, 255, 0.1);`}
`;
