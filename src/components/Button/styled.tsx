import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-radius: 20px;
  cursor: pointer;
  width: 100%;
  background: transparent;
  border: 1px solid #3f3f3f;
  color: #b5b5b5;
  text-transform: uppercase;
  transition: 0.5s all linear;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;
