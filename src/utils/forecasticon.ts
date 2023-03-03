import LightRain from "../assets/images/light-rain.png";
import LightRainMiddle from "../assets/images/light-rain-middle.png";
import LightRainNight from "../assets/images/light-rain-night.png";

import Raining from "../assets/images/raining.png";
import RainingNight from "../assets/images/raining-night.png";
import RainingMiddle from "../assets/images/raining-middle.png";

import HeavyRaining from "../assets/images/heavy-raining.png";
import HeavyRainingMiddle from "../assets/images/heavy-raining-middle.png";
import HeavyRainingNight from "../assets/images/heavy-raining-night.png";

import Waterdrop from "../assets/images/waterdrop.png";
import WaterdropMiddle from "../assets/images/waterdrop-middle.png";
import WaterdropNight from "../assets/images/waterdrop-night.png";

import RainingAndThunder from "../assets/images/raining-and-thunder.png";

import HeavyRainingAndThunder from "../assets/images/heavy-raining-and-thunder.png";
import HeavyRainingAndThunderMiddle from "../assets/images/heavy-raining-and-thunder-middle.png";
import HeavyRainingAndThunderNight from "../assets/images/heavy-raining-and-thunder-night.png";

import Thunder from "../assets/images/thunder.png";
import ThunderMiddle from "../assets/images/thunder-middle.png";
import ThunderNight from "../assets/images/thunder-night.png";

import Hailstone from "../assets/images/hailstone.png";
import HailstoneMiddle from "../assets/images/hailstone-middle.png";
import HailstoneNight from "../assets/images/hailstone-night.png";

import Cloud from "../assets/images/cloud.png";

import Sun from "../assets/images/sun.png";

import Night from "../assets/images/night.png";

import Fog from "../assets/images/fog.png";
import FogMiddle from "../assets/images/fog-middle.png";
import FogNight from "../assets/images/fog-night.png";

import IcyFog from "../assets/images/icy-fog.png";
import IcyFogMiddle from "../assets/images/icy-fog-middle.png";
import IcyFogNight from "../assets/images/icy-fog-night.png";

import MidSnowFastWinds from "../assets/images/mid-snow-fast-winds.png";

import FreezingHeavyRaining from "../assets/images/freezing-heavy-raining.png";
import FreezingHeavyRainingMiddle from "../assets/images/freezing-heavy-raining-middle.png";
import FreezingHeavyRainingNight from "../assets/images/freezing-heavy-raining-night.png";

import FreezingLightRain from "../assets/images/freezing-light-rain.png";
import FreezingLightRainMiddle from "../assets/images/freezing-light-rain-middle.png";
import FreezingLightRainNight from "../assets/images/freezing-light-rain-night.png";

import FreezingRaining from "../assets/images/freezing-raining.png";
import FreezingRainingNight from "../assets/images/freezing-raining-night.png";
import FreezingRainingMiddle from "../assets/images/freezing-raining-middle.png";

import Blizzard from "../assets/images/blizzard.png";
import BlizzardMiddle from "../assets/images/blizzard-middle.png";
import BlizzardNight from "../assets/images/blizzard-night.png";

import Snowing from "../assets/images/snowing.png";
import SnowingMiddle from "../assets/images/snowing-middle.png";
import SnowingNight from "../assets/images/snowing-night.png";

import SnowLightRain from "../assets/images/snow-light-rain.png";
import SnowLightRainMiddle from "../assets/images/snow-light-rain-middle.png";
import SnowLightRainNight from "../assets/images/snow-light-rain-night.png";

import SnowHeavyRaining from "../assets/images/snow-heavy-raining.png";
import SnowHeavyRainingMiddle from "../assets/images/snow-heavy-raining-middle.png";
import SnowHeavyRainingNight from "../assets/images/snow-heavy-raining-night.png";

import SnowWithThunder from "../assets/images/snow-with-thunder.png";

import Snow from "../assets/images/snow.png";

import SandDustCloud from "../assets/images/sand-dust-cloud.png";

import VolcanicAshCloud from "../assets/images/volcanic-ash-cloud.png";

import Tornado from "../assets/images/tornado.png";

import SandDustWhirls from "../assets/images/sand-dust-whirls.png";

import Squalls from "../assets/images/squalls.png";

const currentHour = new Date().getHours();

const isMiddle =
  (currentHour >= 3 && currentHour < 6) ||
  (currentHour >= 16 && currentHour < 18);
const isMorning = currentHour >= 6 && currentHour <= 15;

export const forecastConditionsIcons = (weatherCondition: string) => {
  switch (weatherCondition) {
    case "Chuvisco":
    case "Chuva leve":
    case "Chuva fraca":
    case "Chuva e garoa":
    case "Chuvisco irregular":
    case "Chuva fraca irregular":
    case "Garoa de intensidade leve":
      if (isMorning) {
        LightRain;
      } else if (isMiddle) {
        return LightRainMiddle;
      } else {
        return LightRainNight;
      }
    case "Chuva":
    case "Chuva de banho":
    case "Chuva moderada":
    case "Tempestade irregular":
    case "Períodos de chuva moderada":
    case "Possibilidade de chuva irregular":
      if (isMorning) {
        return Raining;
      } else if (isMiddle) {
        return RainingMiddle;
      } else {
        return RainingNight;
      }
    case "Chuva forte":
    case "Chuva extrema":
    case "Chuva torrencial":
    case "Chuva muito forte":
    case "Chuva forte e garoa":
    case "Períodos de chuva forte":
    case "Chuva de forte intensidade":
    case "Garoa de forte intensidade":
      if (isMorning) {
        return HeavyRaining;
      } else if (isMiddle) {
        return HeavyRainingMiddle;
      } else {
        return HeavyRainingNight;
      }
    case "Aguaceiros fracos":
    case "Aguaceiros moderados ou fortes":
    case "Chuva de chuva de intensidade leve":
      if (isMorning) {
        return Waterdrop;
      } else if (isMiddle) {
        return WaterdropMiddle;
      } else {
        return WaterdropNight;
      }
    case "Chuva fraca irregular com trovoada":
    case "Chuva torrencial":
    case "Leve tempestade":
    case "Trovoada com garoa":
    case "Trovoada com chuva leve":
    case "Trovoada com garoa leve":
    case "Trovoada com garoa forte":
      return RainingAndThunder;
    case "Forte tempestade":
    case "Trovoada com chuva":
    case "Chuva moderada ou forte com trovoada":
    case "Trovoada com chuva forte":
      if (isMorning) {
        return HeavyRainingAndThunder;
      } else if (isMiddle) {
        return HeavyRainingAndThunderMiddle;
      } else {
        return HeavyRainingAndThunderNight;
      }
    case "Trovoada":
    case "Possibilidade de trovoada":
      if (isMorning) {
        return Thunder;
      } else if (isMiddle) {
        return ThunderMiddle;
      } else {
        return ThunderNight;
      }
    case "Granizo":
    case "Chuva de granizo":
    case "Aguaceiros fracos com granizo":
    case "Aguaceiros moderados ou fortes com granizo":
      if (isMorning) {
        return Hailstone;
      } else if (isMiddle) {
        return HailstoneMiddle;
      } else {
        return HailstoneNight;
      }
    case "Nublado":
    case "Encoberto":
    case "Poucas nuvens":
    case "Nuvens quebradas":
    case "Nuvens dispersas":
    case "Céu pouco nublado":
    case "Parcialmente nublado":
      return Cloud;
    case "Sol":
      return Sun;
    case "Céu limpo":
      if (isMorning) {
        return Cloud;
      } else if (isMiddle) {
        return Cloud;
      } else {
        return Night;
      }
    case "Neblina":
    case "Nevoeiro":
    case "Névoa":
      if (isMorning) {
        return Fog;
      } else if (isMiddle) {
        return FogMiddle;
      } else {
        return FogNight;
      }
    case "Nevoeiro gelado":
      if (isMorning) {
        return IcyFog;
      } else if (isMiddle) {
        return IcyFogMiddle;
      } else {
        return IcyFogNight;
      }
    case "Rajadas de vento com neve":
      return MidSnowFastWinds;
    case "Chuva congelante":
    case "Chuva gelada moderada ou forte":
      if (isMorning) {
        return FreezingHeavyRaining;
      } else if (isMiddle) {
        return FreezingHeavyRainingMiddle;
      } else {
        return FreezingHeavyRainingNight;
      }
    case "Chuvisco gelado":
    case "Chuva fraca e gelada":
      if (isMorning) {
        return FreezingLightRain;
      } else if (isMiddle) {
        return FreezingLightRainMiddle;
      } else {
        return FreezingLightRainNight;
      }
    case "Chuvisco forte gelado":
    case "Possibilidade de chuvisco gelado irregular":
      if (isMorning) {
        return FreezingRaining;
      } else if (isMiddle) {
        return FreezingRainingMiddle;
      } else {
        return FreezingRainingNight;
      }
    case "Nevasca":
    case "Chuva de neve":
      if (isMorning) {
        return Blizzard;
      } else if (isMiddle) {
        return BlizzardMiddle;
      } else {
        return BlizzardNight;
      }
    case "Neve":
    case "Neve fraca":
    case "Queda de neve fraca":
    case "Queda de neve moderada":
    case "Queda de neve irregular e fraca":
    case "Possibilidade de neve irregular":
    case "Queda de neve moderada e irregular":
    case "Possibilidade de neve molhada irregular":
      if (isMorning) {
        return Snowing;
      } else if (isMiddle) {
        return SnowingMiddle;
      } else {
        return SnowingNight;
      }
    case "Chuva fraca com neve":
    case "Chuva fraca e neve":
    case "Chuva de neve leve":
    case "Aguaceiros fracos com neve":
    case "Possibilidade de chuvisco gelado irregular":
      if (isMorning) {
        return SnowLightRain;
      } else if (isMiddle) {
        return SnowLightRainMiddle;
      } else {
        return SnowLightRainNight;
      }
    case "Chuva e neve":
    case "Chuva forte de neve":
    case "Aguaceiros fracos com neve":
    case "Chuva forte ou moderada com neve":
    case "Aguaceiros moderados ou fortes com neve":
      if (isMorning) {
        return SnowHeavyRaining;
      } else if (isMiddle) {
        return SnowHeavyRainingMiddle;
      } else {
        return SnowHeavyRainingNight;
      }
    case "Neve fraca irregular com trovoada":
    case "Neve moderada ou forte com trovoada":
      return SnowWithThunder;
    case "Neve intensa":
    case "Neve pesada":
    case "Possibilidade de neve irregular":
    case "Possibilidade de neve molhada irregular":
      return Snow;
    case "Pó":
    case "Areia":
      return SandDustCloud;
    case "Cinza vulcanica":
      return VolcanicAshCloud;
    case "Tornado":
      return Tornado;
    case "Confusão":
    case "Redemoinhos de areia/poeira":
      return SandDustWhirls;
    case "Rajadas":
      return Squalls;
    default:
      return Cloud;
  }
};