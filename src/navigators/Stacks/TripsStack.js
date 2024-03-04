import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { FlightDetails, HomeScreen } from "../../screens";

const TripsStack = createStackNavigator();
const TripsStackNavigator = () => {
  return (
    <TripsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeScreen"
    >
      <TripsStack.Screen name="HomeScreen" component={HomeScreen} />
      <TripsStack.Screen name="FlightDetails" component={FlightDetails} />
    </TripsStack.Navigator>
  );
};

export default TripsStackNavigator;
