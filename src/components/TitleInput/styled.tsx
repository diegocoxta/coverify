import styled from '@emotion/styled';

export const Container = styled.div`
  margin-bottom: 20px;
`;

export const Field = styled.input`
  background: #262626;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 0px;
  width: 100%;
  box-sizing: border-box;
  color: #b5b5b5;

  &:focus {
    outline: none;
  }
`;

export const RemainingCharacters = styled.p`
  font-size: 12px;
  margin: 10px 0 0;
  color: #b5b5b5;
`;
