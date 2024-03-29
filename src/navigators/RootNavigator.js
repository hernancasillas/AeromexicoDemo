import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import DrawerNavigator from "./Drawer/DrawerNavigator";

const RootNavigator = () => {
  return (
    <NavigationContainer
      screenOptions={{ headerShown: false, animationEnabled: false }}
    >
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
