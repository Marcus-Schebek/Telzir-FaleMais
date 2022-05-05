import styled from "styled-components";

export const PageAuth = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Aside = styled.aside`
  flex: 6;
  background-color: #18265a;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 120px 48px;

  img {
    max-width: 520px;
    margin: 0;
  }

  strong {
    font: 700 64px "'M PLUS Rounded 1c'", sans-serif;
    line-height: 64px;
    color: #f3ae02;
  }

  span {
    font: 700 36px "'M PLUS Rounded 1c'", sans-serif;
    font-size: 48px;
    line-height: 32px;
    margin-top: 24px;
    color: #f8f8f8;
  }

  @media screen and (max-width: 960px) {
    display: none;
  }
`;
export const Main = styled.main`
  flex: 9;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo {
    position: absolute;
    top: 20%;
    max-width: 175px;
    margin-left: 5em;
  }

  .main-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    align-items: stretch;
    text-align: center;
  }
`;
