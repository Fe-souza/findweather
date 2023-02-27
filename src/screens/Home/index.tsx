import React, { useState } from "react";
import { EmptyState } from "./state/EmptyState";
import { WeatherFound } from "./state/WeatherFound";
import * as Styled from "./styles"


export const Home = (): JSX.Element => {
    const [cityselected,setCitySelected] = useState("")
    return (
      <Styled.Container>
       {cityselected ? (<WeatherFound />):(<EmptyState selectCity={()=>setCitySelected("São Paulo")}/>)} 
      </Styled.Container>
    );
  };