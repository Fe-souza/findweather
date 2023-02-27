import React, { useState } from "react";
import { EmptyState } from "./state/EmptyState";
import { WeatherFound } from "./state/WeatherFound";
import * as Styled from "./styles"

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IStackRoutes } from "../../routes/stack.routes";

type HomeScreenNavigationProp = NativeStackNavigationProp<IStackRoutes, "Home">;

type IHome = {
  navigation: HomeScreenNavigationProp;
};

export const Home = ({ navigation }: IHome): JSX.Element => {
    const [cityselected,setCityselected] = useState("") 

    return (
      <Styled.Container>
       {cityselected ? (<WeatherFound />):(<EmptyState selectCity={() => navigation.navigate("Search")}/>)} 
      </Styled.Container>
    );
  };