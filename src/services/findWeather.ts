import { api } from "./api";

const { API_KEY } = process.env

export const FindWeatherAPI = {
  getForecast: (city: string) => {
    return api.get(`forecast.json?key=042b329aee614c79a31194321232702&q=${city}&days=7&aqi=no&alerts=no&lang=pt`)
  }
}