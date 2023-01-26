import styled from '@emotion/styled';
import Button from '@mui/material/Button';
export const FormStyled = styled.form`
  width: 300px;
  vertical-align: middle;
  white-space: nowrap;
  position: relative;
  margin-bottom: 128px;
`;

export const InputStyled = styled.input`
  width: 300px;
  height: 50px;
  background-color: #2b303b;
  border: none;
  font-size: 12pt;
  float: left;
  /* color: #262626; */
  padding-left: 45px;
  border-radius: 5px;
  color: #fff;
  padding-left: 16px;
`;

export const ButtonStyled = styled(Button)`
  position: absolute;
  top: 0%;
  right: 0%;
  height: 50px;
 
  /* background-color: #2b303b;
  border: none;
  font-size: 10pt;
  float: left;
  color: #262626;
  padding-left: 45px;
  border-radius: 5px;
  color: #fff;
  padding-left: 16px; */
  padding-left: 24px;
  /* font-weight: bold; */
  font-size: 12px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  color: white;
  background-color: silver;

  &:hover {
    background-color: grey;
    border: none;
    color: #fff;
  }
`;
