import 'react-native-gesture-handler';
import React from "react";
import Navigator from "./routes/homeStack";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./routes/homeStack";
import RootDrawerNavigator from "./routes/drawer";

export default function App() {
  return(
    <RootDrawerNavigator />
      // <HomeStack />
  )
}
