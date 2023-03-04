import React from "react";
import { theme } from "../../theme";
import Temperature from "../Temperature";
import Text from "../Text";

import * as Styled from "./styles";

interface IDayTemperature {
  date: string;
  icon: string;
  condition: string;
  minTemp: number;
  maxTemp: number;
}

export const DayTemperature = ({
  date,
  icon,
  condition,
  minTemp,
  maxTemp,
}: IDayTemperature): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.ContainerDate>
        <Text
          fontFamily={theme.fontFamily.OverpassRegular}
          color={theme.colors.white}
          fontSize={theme.fontSize.sm18}
        >
          {date}
        </Text>
      </Styled.ContainerDate>

      <Styled.ContainerIconCondition>
        <Styled.Image
          source={{
            uri: `https://openweathermap.org/img/wn/${icon}@2x.png`,
          }}
        />

        <Text
          fontFamily={theme.fontFamily.OverpassRegular}
          color={theme.colors.gray100}
          fontSize={theme.fontSize.sm18}
          style={{ width: 100 }}
        >
          {condition}
        </Text>
      </Styled.ContainerIconCondition>

      <Styled.ContainerTemperature>
        <Temperature
          maxTemp={maxTemp}
          maxTempFontSize={18}
          minTemp={minTemp}
          minTempFontSize={18}
          roundSize={10}
        />
      </Styled.ContainerTemperature>
    </Styled.Container>
  );
};