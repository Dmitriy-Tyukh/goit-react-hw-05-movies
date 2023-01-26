import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  color: blue;
`;

export const ItemStyled = styled.li`
  list-style-type: none;
  
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const List = styled.ul`
  list-style: none;
`;