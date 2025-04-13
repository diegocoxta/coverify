import styled from '@emotion/styled';

import Button from '~/components/Button';

export const Background = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  background-image: linear-gradient(rgba(0, 0, 0, 0.6) 0, #121212 100%);
  height: 332px;
  margin-top: -60px;
  position: absolute;
  width: 100%;
  z-index: -1;
`;

export const Avatar = styled.a`
  background: #060707;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 3px;
  text-decoration: none;
  width: 148px;
  transition: all 0.2s;
  margin: 20px auto 0px;

  &:hover {
    background: #1e1e1e;
  }

  @media (min-width: 1400px) {
    top: 20px;
    right: 40px;
    position: fixed;
  }
`;

export const AvatarPhoto = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin-right: 10px;
`;

export const AvatarName = styled.span`
  color: #fff;
  font-size: 13px;
`;

export const AvatarIcon = styled.span`
  color: #fff;
  font-size: 10px;
  margin-left: 6px;
`;

export const Header = styled.h1`
  color: #fff;
  margin: 0;
  font-size: 56px;
  padding: 20px 20px 0;
  font-weight: 900;
  text-align: center;
`;

export const SubHeader = styled.p`
  color: #a4a4a4;
  padding: 0;
  font-size: 18px;
  text-align: center;
  margin: 20px 30px;
`;

export const Container = styled.div`
  margin: 50px auto 0;
  max-width: 960px;
  border-radius: 10px;
  margin-bottom: 30px;

  @media (min-width: 750px) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

export const Translations = styled.div`
  text-align: center;
  margin: 20px 0;
`;

export const Footer = styled.footer`
  margin: 50px auto;
  max-width: 960px;
  color: #a4a4a4;
  padding-left: 30px;

  a {
    padding-left: 5px;
    color: #a4a4a4;
    text-decoration: none;
  }
`;

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

  &:disabled {
    cursor: default;
    background: gray;
  }

  &:enabled {
    &:hover {
      background: #21c549;
      transform: scale(1.05);
    }
  }
`;
