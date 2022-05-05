import styled from "styled-components";

export const Button = styled.button`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  color: #FFF;
  padding: 0 32px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  img {
    margin-right: 36px;
    align-items: flex-start;
  }
`;
export const GoogleBtn = styled(Button)`
  background: #EA4335;
  margin-top: 4em;
  margin-bottom: 1em;

  &:hover{
    background: #e6493c;
    transition: .2s;
  }
`;
export const FacebookBtn = styled(Button)`
  background: #3B5998;
  &:hover{
    background: #396399;
    transition: .2s;
  }
`;
export const SubmitButton = styled(Button)`
  background: #18265A;
  width: 80%;
  margin: 2em 10% 0;
  justify-content: center;
  &:hover{
    background: #00468C;
    transition: .2s;
  }
  @media screen and (max-width: 768px) {
    margin: 2em 10% 0;
  }
`;