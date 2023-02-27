import React from "react"
import { Image } from "react-native"
import * as Styled from "./styles";
import CloudAndThunder from "../../assets/images/cloud-and-thunder.png"
import Text from "../../componentes/Text"
import { theme } from "../../theme";
import Button from "../../componentes/Button";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IStackRoutes } from "../../routes/stack.routes";

type WelcomeScreenNavigationProp = NativeStackNavigationProp<
  IStackRoutes,
  "Welcome"
>;

type IWelcome = {
  navigation: WelcomeScreenNavigationProp;
};

export const Welcome = ({ navigation }: IWelcome): JSX.Element  => {

    return(
        <Styled.Container>
            <Styled.ContainerImage>
                <Image source={CloudAndThunder}/>
            </Styled.ContainerImage>
            <Styled.ContainerTitle>
            <Text 
                color={theme.colors.white} 
                fontFamily={theme.fontFamily.OverpassBold} 
                fontSize={theme.fontSize.xxl33} 
                style={{ textAlign: "center" }}
                >
                Descubra o Clima na sua Cidade
            </Text>
            </Styled.ContainerTitle>
           <Styled.ContainerDescription>
                <Text 
                    color={theme.colors.gray100} 
                    fontFamily={theme.fontFamily.OverpassRegular} 
                    fontSize={theme.fontSize.md22}
                    style={{ textAlign: "center" }}>
                    Com o FindWeather nunca ficou tão fácil ter a previsão do tempo na palma da sua mão 
                </Text>
            </Styled.ContainerDescription>
            <Button 
                backgroundColor={theme.colors.dark300} 
                borderColor={theme.colors.gray300} 
                borderRadius={18} 
                height={54}
                    onPress={() => {
                    navigation.navigate("Home");
                }}>

                <Text 
                    color={theme.colors.gray100} 
                    fontFamily={theme.fontFamily.OverpassRegular} 
                    fontSize={theme.fontSize.md22}
                    style={{ textAlign: "center", }}
                    
                    >
                Iniciar
                </Text>
            </Button>
            
        
        </Styled.Container>
    )
}