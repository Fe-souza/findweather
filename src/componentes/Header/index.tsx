

import React from "react"
import { Platform, TouchableOpacityProps, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Text from "../Text";
import { theme } from "../../theme"
import * as Styled from "./styles"


interface iHeader extends TouchableOpacityProps {
    backButton?:boolean
    title:string
    icon?: React.ReactNode;
}
export const Header = ({
    backButton=true,
    title,
    icon,
    ...rest
}:iHeader): JSX.Element => {
    return (
    <Styled.Container >
         
         {backButton?(
         <Styled.BackButton {...rest}>
            <AntDesign name="left" size={20} color={theme.colors.white} />
        </Styled.BackButton>):null}
       
        {icon ? (
        <View
          style={{
            alignItems: Platform.OS === "android" ? "center" : "stretch",
            flexDirection: "row",
            marginLeft: "20%",
          }}
        >
          {icon}
          <Text
            fontFamily={theme.fontFamily.OverpassRegular}
            fontSize={theme.fontSize.sm18}
            color={theme.colors.white}
            style={{ marginLeft: 10 }}
          >
            {title}
          </Text>

          <View />
        </View>
      ) : (
        <Text
          fontFamily={theme.fontFamily.OverpassRegular}
          fontSize={theme.fontSize.sm18}
          color={theme.colors.white}
          style={{ marginLeft: "30%" }}
        >
          {title}
        </Text>
      )}
       
    </Styled.Container>
    )
}