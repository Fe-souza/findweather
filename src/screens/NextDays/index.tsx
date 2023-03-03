import React, { useCallback, useState } from "react";
import { View, StatusBar, Platform, ActivityIndicator } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { theme } from "../../theme";

import DropMiniature from "../../assets/images/drop-miniature.png";
import WindMiniature from "../../assets/images/wind-miniature.png";
import RainingCloudMiniature from "../../assets/images/raining-cloud-miniature.png";

import * as Styled from "./styles";
import Text from "../../componentes/Text";
import { IStackRoutes } from "../../routes/stack.routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IForecastData } from "../../utils/search.interface";
import { formatAPIDate } from "../../utils/format.date";
import { IForecastDay } from "../../utils/forecastdays.interface";
import { useFocusEffect } from "@react-navigation/native";
import { forecastConditionsIcons } from "../../utils/forecasticon";
import { DayTemperature } from "../../componentes/DayTemperature";
import Divider from "../../componentes/Divider";
import Temperature from "../../componentes/Temperature";
import { WeatherDescription } from "../../componentes/WeatherDescription";
import { Header } from "../../componentes/Header";

export type NextDaysScreenNavigationProp = NativeStackNavigationProp<
  IStackRoutes,
  "NextDays"
>;

type INextDays = {
  navigation: NextDaysScreenNavigationProp;
  route: {
    params: {
      forecast: {
        forecastday: Array<IForecastData>;
      };
      forecastDays: Array<IForecastDay>;
    };
  };
};

export const NextDays = ({ navigation, route: { params } }: INextDays): JSX.Element => {

  const { forecast, forecastDays } = params;


  console.log('===>,',forecastDays)

  const [filteredDaysForecast, setFilteredDaysForecast] = useState<
    Array<IForecastDay>
  >([]);

  const isAndroid = Platform.OS === "android";

  const filterForecastDays = () => {
    let filteredList = [];
    let previousDate = "";
    let maxTemp = -Infinity;
    let minTemp = Infinity;

    forecastDays.forEach((item) => {
      const date = item.dt_txt.split(" ")[0];
      if (date !== previousDate) {
        if (previousDate !== "") {
          filteredList[filteredList.length - 1].maxTemp = maxTemp;
          filteredList[filteredList.length - 1].minTemp = minTemp;
        }
        filteredList.push(item);
        maxTemp = -Infinity;
        minTemp = Infinity;
      }

      previousDate = date;
      maxTemp = Math.max(maxTemp, item.main.temp_max);
      minTemp = Math.min(minTemp, item.main.temp_min);
    });

    filteredList[filteredList.length - 1].maxTemp = maxTemp;
    filteredList[filteredList.length - 1].minTemp = minTemp;

    setFilteredDaysForecast(filteredList);
  };

  const firstLetterUpperCase = (description: string) => {
    return description.charAt(0).toLocaleUpperCase() + description.slice(1);
  };

  useFocusEffect(
    useCallback(() => {
      filterForecastDays();
    }, [])
  );

  if (!filteredDaysForecast[0]) {
    return <ActivityIndicator size="large" color={theme.colors.white} />;
  }

  const { weather, maxTemp, minTemp, main, wind } = filteredDaysForecast[1];
  const { daily_will_it_rain } = forecast.forecastday[1].day;

  const dataWeatherDescription = [
    {
      id: 1,
      icon: DropMiniature,
      value: `${main.humidity}%`,
      text: "Umidade",
    },

    {
      id: 2,
      icon: WindMiniature,
      value: `${Math.round(wind.speed)}km/h`,
      text: "Veloc. Vento",
    },

    {
      id: 3,
      icon: RainingCloudMiniature,
      value: `${Math.round(daily_will_it_rain)}%`,
      text: "Chuva",
    },
  ];

  return (
    <>
      <StatusBar backgroundColor={theme.colors.dark400} />
      <Styled.ScrollView showsVerticalScrollIndicator={false}>
        <>
          <Styled.Container>
            <Divider top={16} />

            <Styled.PaddingHorizontal>
              <Header
                onPress={() => navigation.goBack()}
                title="Próximos 5 dias"
                icon={
                  <MaterialIcons
                    name="calendar-today"
                    size={18}
                    color="white"
                  />
                }
              />

              <Divider top={30} />

              <Styled.ContainerSummaryTemperature>
                <Styled.Image
                  source={forecastConditionsIcons(
                    firstLetterUpperCase(weather[0].description)
                  )}
                />

                <View>
                  <Text
                    fontFamily={theme.fontFamily.OverpassRegular}
                    fontSize={theme.fontSize.md20}
                    color={theme.colors.gray100}
                    style={{ textAlign: "left" }}
                  >
                    Amanhã
                  </Text>

                  <Divider top={isAndroid ? -10 : 10} />

                  <Temperature
                    maxTemp={Math.round(maxTemp)}
                    minTemp={Math.round(minTemp)}
                    maxTempFontSize={theme.fontSize.giant76}
                    minTempFontSize={theme.fontSize.xxl33}
                  />

                  <Divider top={isAndroid ? -10 : 0} />

                  <Text
                    fontFamily={theme.fontFamily.OverpassRegular}
                    fontSize={theme.fontSize.md20}
                    color={theme.colors.gray100}
                    style={{ textAlign: "left", width: 180 }}
                  >
                    {firstLetterUpperCase(weather[0].description)}
                  </Text>
                </View>
              </Styled.ContainerSummaryTemperature>

              <Divider top={30} />

              <WeatherDescription data={dataWeatherDescription} />
            </Styled.PaddingHorizontal>

            <Divider bottom={36} />
          </Styled.Container>

          <Divider bottom={35} />

          <Styled.ContainerWeekTemperature>
            {filteredDaysForecast.map((item, index) => {
              const { description, icon } = item.weather[0];

              if (index === 0) {
                return <React.Fragment key={index} />;
              } else {
                return (
                  <DayTemperature
                    key={index}
                    date={formatAPIDate(item.dt_txt)}
                    icon={icon}
                    condition={firstLetterUpperCase(description)}
                    maxTemp={Math.round(item.maxTemp)}
                    minTemp={Math.round(item.minTemp)}
                  />
                );
              }
            })}
          </Styled.ContainerWeekTemperature>

          <Divider bottom={20} />
        </>
      </Styled.ScrollView>
    </>
  );
};