import React, { useCallback, useEffect, useState } from "react";
import { EmptyState } from "./state/EmptyState";
import { WeatherFound } from "./state/WeatherFound";
import * as Styled from "./styles"

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IStackRoutes } from "../../routes/stack.routes";
import { useFocusEffect } from "@react-navigation/native";
import { AsyncStorage, ActivityIndicator, SectionList } from "react-native";
import { FindWeatherAPI } from "../../services/findWeather";
import { theme } from "../../theme";
import { ISearchData } from "../../utils/search.interface";
import { CITY_FIND, COUNTRY_CODE } from "../../storage/storage.config";
import { formatDate } from "../../utils/format.date";
import { IForecastDays } from "../../utils/forecastdays.interface";
import { FindWeatherOpenWeatherAPI } from "../../services/indweather-api-openweather";

type HomeScreenNavigationProp = NativeStackNavigationProp<IStackRoutes, "Home">;

type IHome = {
  navigation: HomeScreenNavigationProp;
};

export const Home = ({ navigation }: IHome): JSX.Element => {
  const [city, setCity] = useState(null);
  const [countryCode, setCountryCode] = useState(null);
  const [response, setResponse] = useState<ISearchData>(null);
  const [currentDate, setCurrentDate] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [forecastDays, setForecastDays] = useState<IForecastDays>(null);

  const getDate = () => {
    setCurrentDate(formatDate());
  };

  const getCityName = useCallback(async () => {
    const storedCity = await AsyncStorage.getItem(CITY_FIND);
    const storedCountryCode = await AsyncStorage.getItem(COUNTRY_CODE);

    setCountryCode(storedCountryCode);

    setCity(storedCity);

    setIsLoading(false);
  }, []);

  const getAPIData = async () => {
    setIsLoading(true);

    await FindWeatherAPI.getForecast(city)
      .then((response) => {
        const data = response.data;

        setResponse(data);
        setIsLoading(false);
      })
      .catch((error) => console.log("Error calling API: ", error));
  };

  const getForecastDays = async () => {
    setIsLoading(true);

    await FindWeatherOpenWeatherAPI.getForecast(city, countryCode)
      .then((res) => {
        const data: IForecastDays = res.data;

        setForecastDays(data);
      })
      .catch((error) =>
        console.log("Error calling 5 next days forecast API: ", error)
      );
  };

  function navigateNextDays(){

    navigation.navigate("NextDays", {
      forecast: response.forecast,
      forecastDays: forecastDays && forecastDays.list,
    })

  }

  useFocusEffect(
    useCallback(() => {
      getCityName();
    }, [])
  );

  useEffect(() => {
  
    if (city) {
      getAPIData();
      getDate();
      getForecastDays();
    } else {
      setIsLoading(false);
      setResponse(null);
      setForecastDays(null);
    }
  }, [city]);

  if (isLoading) {
    return (
      <Styled.ScrollView>
        <ActivityIndicator size="small" color={theme.colors.white} />
      </Styled.ScrollView>
    );
  }

  return (
    <SectionList
      style={{ backgroundColor: theme.colors.dark, paddingHorizontal: 16 }}
      sections={[
        {
          title: "",
          data: [
            response ? (
              <WeatherFound
                current={response.current}
                location={response.location}
                forecast={response.forecast}
                date={currentDate}
                nextDays={navigateNextDays}
              />
            ) : (
              <EmptyState selectCity={() => navigation.navigate("Search")} />
            ),
          ],
        },
      ]}
      renderItem={({ item }) => item}
      keyExtractor={(_, index) => String(index)}
    />
  );
};