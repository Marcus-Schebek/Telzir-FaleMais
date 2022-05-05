
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #18265A;
  height: 112px;
  display: flex;
  z-index: 10;
  justify-content: space-between; 
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }

 
  >img{
    height: 68px;
    margin-bottom: 1.3rem;
    margin-left: 3rem;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  width: 100vw;
  white-space: nowrap; 

`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  justify-content: flex-end;
  width: 100vw;
  >span{
    color: #F5f5f5;
    cursor: pointer;
  }
  >img{
    border-radius: 50%;
    height: 48px;
  }
  @media screen and (max-width: 768px) {
    
    >img{
      display: none;
    }
    
    >span{
      display: none
    }
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: none;
  padding: 10px 22px;
  color: #F3AE02;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #00468C;
    color: #ffffff;
  }
`;