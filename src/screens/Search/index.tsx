import React, { useState } from 'react'
import { ActivityIndicator, Image } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import Divider from '../../componentes/Divider';
import { Header } from '../../componentes/Header';
import { FindWeatherAPI } from '../../services/findWeather';
import { theme } from '../../theme';
import { ErrorContent } from './componentes/Error';
import * as Styled from './styles'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IStackRoutes } from "../../routes/stack.routes";
import { ISearchData } from '../../utils/search.interface';
import { CardResult, ICardResult } from '../../componentes/CardResult';

type SearchScreenNavigationProp = NativeStackNavigationProp<
  IStackRoutes,
  "Search"
>;

type ISearch = {
    navigation: SearchScreenNavigationProp;
  };

export const Search = ({ navigation }: ISearch): JSX.Element => {

    
    const [isError, setIsError] = useState(false);
    const [textTyped, setTextTyped] = useState("");
    const [response, setResponse] = useState<ISearchData>(null);
    const [dataCard, setDataCard] = useState({} as ICardResult);
  
    const [isLoading, setIsLoading] = useState(false);
  
    const handleCallAPI = async () => {
      FindWeatherAPI.getForecast(textTyped)
        .then((res) => {
          setIsLoading(true);
          setTextTyped("");
          setResponse(res.data);
  
          const { location, current } = res.data;
  
          setDataCard({
            location: {
              name: location.name,
              region: location.region,
              country: location.country,
            },
            current: {
              temp_c: current.temp_c,
            },
            condition: {
              text: current.condition.text,
              icon: current.condition.icon,
            },
          });
          setIsLoading(false);
        })
        .catch((error) => {
          console.log("Error to get api data: ", error);
  
          setIsError(true);
          setTextTyped("");
          setIsLoading(false);
        });
    };
  
    const handleNavigateHome = () => {
      navigation.navigate("Home");
    };
  
    return (
      <>
        <Styled.ScrollView>
          <Styled.Container>
            <Divider top={16} />
  
            <Header title="Busca" onPress={handleNavigateHome} />
  
            <Divider top={48} />
  
            <Styled.ContainerInputButton>
              <Styled.ContainerInput>
                <Ionicons
                  name="search-outline"
                  size={24}
                  color={theme.colors.white}
                />
  
                <Styled.Input
                  placeholder="Digite o nome de uma cidade"
                  placeholderTextColor={theme.colors.gray200}
                  value={textTyped}
                  autoCapitalize="sentences"
                  onChangeText={(text) => {
                    setTextTyped(text);
                    setIsError(false);
                    setResponse(null);
                  }}
                  onSubmitEditing={handleCallAPI}
                />
              </Styled.ContainerInput>
  
              <Styled.SearchButton onPress={handleCallAPI}>
                <Ionicons
                  name="md-location-sharp"
                  size={30}
                  color={theme.colors.white}
                />
              </Styled.SearchButton>
            </Styled.ContainerInputButton>
  
            {isLoading && (
              <>
                <Divider top={40} />
                <ActivityIndicator size="small" color={theme.colors.white} />
              </>
            )}
  
            <Divider top={42} />
  
            {isError && <ErrorContent />}
            {response && !isError && !isLoading && (
              <CardResult data={dataCard} onPress={handleNavigateHome} />
            )}
          </Styled.Container>
        </Styled.ScrollView>
      </>
    );
  };