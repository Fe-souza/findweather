import styled from 'styled-components/native';
import { IText } from '.';

export const Text = styled.Text<IText>`
  font-family: ${({fontFamily}) => fontFamily};
  font-size: ${({fontSize}) => fontSize}px;
  color: ${({color}) => color};
  
`;
