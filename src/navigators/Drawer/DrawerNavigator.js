/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable quotes */
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useWindowDimensions } from "react-native";
import TripsStackNavigator from "../Stacks/TripsStack";
import CustomDrawerContent from "../../components/CustomDrawer";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  //To show permanent drawer when screen is rotated
  const { width, height } = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= height ? "permanent" : "front",
        drawerPosition: "left",
        headerShown: false,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="TripsStack" component={TripsStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
