import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useWindowDimensions } from "react-native";
//import CustomDrawerContent from "../components/CustomDrawer/CustomDrawer";
import TripsStackNavigator from "../Stacks/TripsStack";
import CustomDrawerContent from "../../components/CustomDrawer";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  //To show permanent drawer when screen is rotated
  const { width, height } = useWindowDimensions();
  /* const { theme, appearance } = useTheme();
  const colorSet = theme.colors[appearance]; */

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= height ? "permanent" : "front",
        drawerPosition: "left",
        headerShown: false,
        /*  drawerActiveTintColor: colorSet.primaryForeground,
        drawerActiveBackgroundColor: colorSet.secondaryBackground, */
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      {/* <Drawer.Screen
        name="MainStack"
        options={{ title: "Home" }}
        component={HomeStackNavigator}
      /> */}
      <Drawer.Screen
        name="TripsStack"
        options={{
          title: "Home",
          /* drawerIcon: (config) => (
            <Ionicons
              name="home-outline"
              color={colorSet.primaryForeground}
              size={20}
            />
          ), */
        }}
        component={TripsStackNavigator}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
