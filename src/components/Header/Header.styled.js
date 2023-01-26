import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LogoText = styled.span`
font-weight: bold;
margin-left: 8px;
`
export const List = styled.ul`
list-style: none;
display: flex;
`
export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  margin-right: 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  background-color: #efe8f5;
  font-weight: 500;
  &:hover,
  :focus {
    background-color: #feb258;
    color: white;
  }
  &.active {
    color: white;
    background-color: orangered;
  }
`;
export const Wraper = styled.div`
 display: flex;
 align-items: center;
 `