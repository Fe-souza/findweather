import React from "react"
import { Image } from "react-native"
import { theme } from "../../../../theme"
import Text from "../../../../componentes/Text"
import * as Styled from "./styles";
import Divider from "../../../../componentes/Divider"
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { CardHourTemperature } from "../../../../componentes/CardHourTemperature";
import { WeatherDescription } from "../../../../componentes/WeatherDescription";
import Temperature from "../../../../componentes/Temperature";


import Raining from "../../../../assets/images/raining.png";
import DropMiniature from "../../../../assets/images/drop-miniature.png";
import WindMiniature from "../../../../assets/images/wind-miniature.png";
import RainingCloud from "../../../../assets/images/raining-cloud-miniature.png";
import ClimateChange from "../../../../assets/images/climate-change.png"

export const WeatherFound = (): JSX.Element  => {

    const dataWeatherDescription = [
        {
          id: 1,
          icon: DropMiniature,
          value: "24%",
          text: "Umidade",
        },
      
        {
          id: 2,
          icon: WindMiniature,
          value: "30km/h",
          text: "Veloc. Vento",
        },
      
        {
          id: 3,
          icon: RainingCloud,
          value: "76%",
          text: "Chuva",
        },
      ];
      
      const dataCardHourTemperature = [
        {
          id: 1,
          icon: DropMiniature,
          temperatureValue: 23,
          hour: "09:00",
        },
      
        {
          id: 2,
          icon: WindMiniature,
          temperatureValue: 18,
          hour: "13:00",
        },
      
        {
          id: 3,
          icon: RainingCloud,
          temperatureValue: 8,
          hour: "17:00",
        },
      
        {
          id: 4,
          icon: RainingCloud,
          temperatureValue: 8,
          hour: "23:00",
        },
      ];

return (
<>
<Styled.Container>
  <Divider top={27} />

  <Styled.LocationIconContainer>
    <Ionicons name="location-sharp" size={22} color={theme.colors.white} />

    <Styled.LocationTextContainer>
      <Styled.LocationCityCountryContainer>
        <Text
          fontFamily={theme.fontFamily.OverpassRegular}
          fontSize={theme.fontSize.sm18}
          color={theme.colors.white}
        >
        São Paulo, 
        </Text>

        <Text
          fontFamily={theme.fontFamily.OverpassRegular}
          fontSize={theme.fontSize.sm18}
          color={theme.colors.white}
        >
          Brasil
        </Text>
      </Styled.LocationCityCountryContainer>

      <Divider top={3} />

      <Text
        fontFamily={theme.fontFamily.OverpassRegular}
        fontSize={theme.fontSize.xs16}
        color={theme.colors.gray100}
      >
        {""} Domingo, 01 Jan de 2023
      </Text>
    </Styled.LocationTextContainer>
  </Styled.LocationIconContainer>

  <Divider top={19} />

  <Styled.ImageContainer>
    <Image source={Raining} />
  </Styled.ImageContainer>

  <Temperature
    maxTemp={23}
    minTemp={18}
    maxTempFontSize={theme.fontSize.giant76}
    minTempFontSize={theme.fontSize.xl40}
  />

  <Text
    fontFamily={theme.fontFamily.OverpassRegular}
    fontSize={theme.fontSize.md22}
    color={theme.colors.gray100}
    style={{ textAlign: "center" }}
  >
    Chuva Moderada
  </Text>
  </Styled.Container>


<Divider top={30} />

<WeatherDescription data={dataWeatherDescription} />

<Divider top={30} />

<Styled.TodayAndNextDaysContainer>
  <Text
    fontFamily={theme.fontFamily.OverpassRegular}
    fontSize={theme.fontSize.md20}
    color={theme.colors.white}
  >
    Hoje
  </Text>

  <Styled.NextDaysContainer>
    <Text
      fontFamily={theme.fontFamily.OverpassRegular}
      fontSize={theme.fontSize.xs16}
      color={theme.colors.gray100}
    >
      Próximos 7 dias
    </Text>

    <SimpleLineIcons
      name="arrow-right"
      size={11}
      color={theme.colors.gray100}
      style={{ marginLeft: 4 }}
    />
  </Styled.NextDaysContainer>
</Styled.TodayAndNextDaysContainer>

<Divider top={15} />

<CardHourTemperature data={dataCardHourTemperature} />

<Divider bottom={15} />
</>

)}