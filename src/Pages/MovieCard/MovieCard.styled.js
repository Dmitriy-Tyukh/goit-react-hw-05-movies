import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';

export const ButtonBack = styled(Button)`
  max-width: 150px;
  margin-bottom: 16px;
  padding: 8px;
  background-color: #efe8f5;
  color: black;
  border-radius: 8px;
  transition: all 0.2s ease-out;
  font-size: 12px;
  font-weight: bold;
  border: none;
  &:hover,
  :focus {
    border: none;
    color: white;
    background-color: orangered;
  }
`;

export const List = styled.ul`
list-style: none;
display: flex;
grid-gap: 3;
 > li {
    margin-right: 16px;
}
`

export const Section = styled.section`
margin-bottom: 8px;
`
export const AdditionalLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width:100px;
  font-weight: 600;
  margin-bottom: 16px;
  padding: 8px;
  background-color: #efe8f5;
  color: black;
  border-radius: 7px;
  transition: all 0.2s ease-out;
  &:hover,
  :focus {
    background-color: #feb258;
    color: white;
  }
  &.active {
    background-color: orangered;
    color: white;
  }
`;
