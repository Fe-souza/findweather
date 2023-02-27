
import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';

const getStatusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : 0;


export const Container = styled.SafeAreaView`
  margin-top: ${getStatusBarHeight}px;
`;


export const LocationIconContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
`;

export const LocationTextContainer = styled.View``;

export const LocationCityCountryContainer = styled.View`
  flex-direction: row;
`;

export const ImageContainer = styled.View`
  align-items: center;
`;

export const TodayAndNextDaysContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;



export const NextDaysContainer = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6
}))`
  flex-direction: row;
  align-items: center;
  height: 30px;
`;