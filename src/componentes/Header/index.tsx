

import React from "react"
import { TouchableOpacityProps } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Text from "../Text";
import { theme } from "../../theme"
import * as Styled from "./styles"


interface iHeader extends TouchableOpacityProps {
    backButton?:boolean
    title:string
}
export const Header = ({
    backButton=true,
    title,
    ...rest
}:iHeader): JSX.Element => {
    return (
    <Styled.Container >
         
         {backButton?(
         <Styled.BackButton {...rest}>
            <AntDesign name="left" size={20} color={theme.colors.white} />
        </Styled.BackButton>):null}
       
        <Text
        fontFamily={theme.fontFamily.OverpassRegular}
        fontSize={theme.fontSize.sm18}
        color={theme.colors.white}
        style={{ marginLeft: "30%" }}
        >
            {title}
        </Text>
       
    </Styled.Container>
    )
}