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
import { CITY_FIND } from "../../storage/storage.config";
import { formatDate } from "../../utils/format.date";

type HomeScreenNavigationProp = NativeStackNavigationProp<IStackRoutes, "Home">;

type IHome = {
  navigation: HomeScreenNavigationProp;
};

export const Home = ({ navigation }: IHome): JSX.Element => {
  const [city, setCity] = useState(null);
  const [response, setResponse] = useState<ISearchData>(null);
  const [currentDate, setCurrentDate] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getDate = () => {
    setCurrentDate(formatDate());
  };

  const getCityName = useCallback(async () => {
    const storedCity = await AsyncStorage.getItem(CITY_FIND);

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

  useFocusEffect(
    useCallback(() => {
      getCityName();
    }, [])
  );

  useEffect(() => {
  
    if (city) {
      getAPIData();
      getDate();
    } else {
      setIsLoading(false);
      setResponse(null);
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