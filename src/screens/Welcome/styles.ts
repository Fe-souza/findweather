import styled from 'styled-components/native';
import { theme } from '../../theme';

export const Container = styled.View`
  flex:1;
  justify-content: center;
  background-color: ${theme.colors.dark};
  padding: 0 16px;
  
`;
export const ContainerImage = styled.View`
  align-items: center;
  margin-bottom: 57px;
`;

export const ContainerTitle = styled.View`
  margin-bottom: 33px;
`;

export const ContainerDescription = styled.View`
  margin-bottom: 74px;
`;



