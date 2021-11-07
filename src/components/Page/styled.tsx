import styled from 'styled-components';

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
  position: fixed;
  top: 10px;
  right: 10px;
  width: 148px;
  transition: all 0.2s;

  :hover {
    background: #1e1e1e;
  }

  @media (min-width: 750px) {
    top: 20px;
    right: 40px;
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

export const AvatarArrownDown = styled.span.attrs({
  children: '▼',
})`
  color: #fff;
  font-size: 10px;
  margin-left: 6px;
`;

export const Header = styled.h1`
  color: #fff;
  margin: 0;
  font-size: 56px;
  margin-top: 20px;
  padding: 20px 20px 0;
  font-weight: 400;
  text-align: center;
`;

export const SubHeader = styled.p`
  color: #a4a4a4;
  padding: 0;
  font-size: 18px;
  margin: 0 20px 50px;
  text-align: center;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  border-radius: 10px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 750px) {
    flex-direction: row;
  }
`;

export const Footer = styled.div`
  border-bottom: 20px solid #25d34e;
  border-top: 1px solid #1e1e1e;
  background: #131313;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;
