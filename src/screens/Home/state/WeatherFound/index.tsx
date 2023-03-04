import React from "react"
import { FlatList, Image } from "react-native"
import { theme } from "../../../../theme"
import Text from "../../../../componentes/Text"
import * as Styled from "./styles";
import Divider from "../../../../componentes/Divider"
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { CardHourTemperature } from "../../../../componentes/CardHourTemperature";
import { WeatherDescription } from "../../../../componentes/WeatherDescription";


import Raining from "../../../../assets/images/raining.png";
import DropMiniature from "../../../../assets/images/drop-miniature.png";
import WindMiniature from "../../../../assets/images/wind-miniature.png";
import RainingCloud from "../../../../assets/images/raining-cloud-miniature.png";

import { ICurrent, IForecastData, ILocation } from "../../../../utils/search.interface";
interface IWeatherFoundData {
  location: ILocation;
  current: ICurrent;
  forecast: {
    forecastday: Array<IForecastData>;
  };
  date: string | null;
  nextDays: () => void;
}

export const WeatherFound = ({
  location,
  current,
  forecast,
  date,
  nextDays,
}: IWeatherFoundData): JSX.Element  => {const { humidity, wind_kph } = current;
const { daily_chance_of_rain } = forecast.forecastday[0].day;

const dataWeatherDescription = [
  {
    id: 1,
    icon: DropMiniature,
    value: `${humidity}%`,
    text: "Umidade",
  },

  {
    id: 2,
    icon: WindMiniature,
    value: `${Math.floor(wind_kph)}km/h`,
    text: "Veloc. Vento",
  },

  {
    id: 3,
    icon: RainingCloud,
    value: `${Math.floor(daily_chance_of_rain)}%`,
    text: "Chuva",
  },
];

return (
  <>
    <Styled.Container>
      <Divider top={27} />

      <Styled.LocationIconContainer>
        <Ionicons
          name="location-sharp"
          size={22}
          color={theme.colors.white}
        />

        <Styled.LocationTextContainer>
          <Styled.LocationCityCountryContainer>
            <Text
              fontFamily={theme.fontFamily.OverpassRegular}
              fontSize={theme.fontSize.sm18}
              color={theme.colors.white}
            >
              {""} {location.name}, {""}
            </Text>

            <Text
              fontFamily={theme.fontFamily.OverpassRegular}
              fontSize={theme.fontSize.sm18}
              color={theme.colors.white}
            >
              {location.country}
            </Text>
          </Styled.LocationCityCountryContainer>

          <Divider top={3} />

          <Text
            fontFamily={theme.fontFamily.OverpassRegular}
            fontSize={theme.fontSize.xs16}
            color={theme.colors.gray100}
          >
            {""} {date}
          </Text>
        </Styled.LocationTextContainer>
      </Styled.LocationIconContainer>

      <Divider top={19} />

      <Styled.ImageContainer>
        <Image source={Raining} />
      </Styled.ImageContainer>

      <Divider top={10} />

      <Styled.ContainerTemperature>
        <Text
          fontFamily={theme.fontFamily.OverpassBold}
          fontSize={theme.fontSize.giant76}
          color={theme.colors.white}
        >
          {Math.floor(current.temp_c)}
        </Text>
        <Text
          fontFamily={theme.fontFamily.OverpassBold}
          fontSize={theme.fontSize.lg30}
          color={theme.colors.white}
        >
          º
        </Text>
      </Styled.ContainerTemperature>

      <Text
        fontFamily={theme.fontFamily.OverpassRegular}
        fontSize={theme.fontSize.md22}
        color={theme.colors.gray100}
      >
        {current.condition.text}
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

      <Styled.NextDaysContainer 
      onPress={() => nextDays()}>
        <Text
          fontFamily={theme.fontFamily.OverpassRegular}
          fontSize={theme.fontSize.xs16}
          color={theme.colors.gray100}
        >
          Próximos 5 dias
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

    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={forecast.forecastday[0].hour}
      keyExtractor={(_, index) => String(index)}
      ItemSeparatorComponent={() => <Styled.Separator />}
      renderItem={({ item, index }) => {
        const dataCardHourTemperature = [
          {
            id: index,
            icon: item.condition.icon,
            temperatureValue: Math.floor(item.temp_c),
            hour: item.time.substring(11, 16),
          },
        ];
        return (
          <CardHourTemperature data={dataCardHourTemperature} key={index} />
        );
      }}
    />

    <Divider bottom={15} />
  </>
);
};