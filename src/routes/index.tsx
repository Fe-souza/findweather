import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {StackRoutes} from "./stack.routes";
import { ActivityIndicator, AsyncStorage } from "react-native";
import { WELCOME } from "../storage/storage.config";

export const Routes = (): JSX.Element => {

  const [isUserFirstTime, setIsUserFirtTime] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const getUserFirstTime = async () => {
      setIsLoading(true);

      await AsyncStorage.getItem(WELCOME)
        .then((res) => {
         
          setIsUserFirtTime(res);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log("Error getting USER_FIRST_TIME from storage: ", error);
          setIsLoading(false);
        });
    };

    getUserFirstTime();
   
    
  }, []);

  if (isLoading) {
    return <ActivityIndicator size="small" color="black" />;
  }

  return (
    <NavigationContainer>
      <StackRoutes initialRoute={isUserFirstTime ? "Home" : "Welcome"}/>
    </NavigationContainer>
  );
};
