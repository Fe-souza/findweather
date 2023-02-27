import React from "react"
import { Image, TouchableOpacity } from "react-native"

import { theme } from "../../../../theme"
import ClimateChange from "../../../../assets/images/climate-change.png"
import Text from "../../../../componentes/Text"
import * as Styled from "./styles";
import Divider from "../../../../componentes/Divider"

interface EmptyStateProps{
    selectCity: () => void;
}

export const EmptyState = ({selectCity}:EmptyStateProps): JSX.Element  => {

    return(
        <Styled.Container>
             <Divider top={60} />
             <Text 
                color={theme.colors.white} 
                fontFamily={theme.fontFamily.OverpassRegular} 
                fontSize={theme.fontSize.xxl33} 
                >
                Find
                <Text 
                color={theme.colors.white} 
                fontFamily={theme.fontFamily.OverpassBold} 
                fontSize={theme.fontSize.xxl33} 
                >Weather</Text>
            </Text>
            <Divider top={100} />
            <Image source={ClimateChange}/>
            <Divider top={105} />
            <TouchableOpacity onPress={() => selectCity()} >
                <Text 
                    color={theme.colors.gray100} 
                    fontFamily={theme.fontFamily.OverpassRegular} 
                    fontSize={theme.fontSize.md22} 
                    style={{ textDecorationLine: "underline",textAlign: "center" }}
                    >
                    Selecione aqui um local e encontre o clima em tempo real
                </Text>
            </TouchableOpacity>
        </Styled.Container>
    )
}