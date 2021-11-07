import styled from 'styled-components';

import Button from 'src/components/Button';

export const Form = styled.div`
  width: 100%;
`;

export const Preview = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Fieldset = styled.div`
  margin: 0px 10px 20px;
  padding: 20px;
  box-sizing: border-box;
  background: #181818;
  border-radius: 10px;
`;

export const DownloadButton = styled(Button)`
  background: #21c549;
  margin: 20px 0;
  color: #fff;
  border: 0px;
  transition: all 0.2s;

  :disabled {
    cursor: default;
    background: gray;
  }

  :enabled {
    :hover {
      background: #21c549;
      transform: scale(1.05);
    }
  }
`;
