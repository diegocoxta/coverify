import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #121212;
    background-size: 100% 200px;
    background-repeat: no-repeat;
    font-family: Arial, sans-serif;
  }
`;

export const GradientBackground = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  background-image: linear-gradient(rgba(0, 0, 0, 0.6) 0, #121212 100%);
  height: 332px;
  margin-top: -60px;
  position: absolute;
  width: 100%;
  z-index: -1;
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
