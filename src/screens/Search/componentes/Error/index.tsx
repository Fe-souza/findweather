import React from 'react'
import { Image } from 'react-native'
import Divider from "../../../../componentes/Divider";
import Text from "../../../../componentes/Text"
import * as Styled from './styles'
import { theme } from "../../../../theme";

import NotFoundDestinationPNG from "../../../../assets/images/not-found-destination.png"



export const ErrorContent = () => (
    <Styled.Container >
      <Image source={NotFoundDestinationPNG} />
  
      <Divider top={40} />
  
      <Text
        fontFamily={theme.fontFamily.OverpassSemiBold}
        fontSize={theme.fontSize.xs16}
        color={theme.colors.gray100}
      >
        OPS!
      </Text>
  
      <Divider top={18} />
  
      <Text
        fontFamily={theme.fontFamily.OverpassSemiBold}
        fontSize={theme.fontSize.xs16}
        color={theme.colors.gray100}
      >
        Não foi possível encontrar o local desejado!
      </Text>
    </Styled.Container>
  );
  