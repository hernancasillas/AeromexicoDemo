/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { FlightDetails, HomeScreen } from "../../screens";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { MontserratBoldText } from "../../components/StyledText";
import Colors from "../../constants/Colors";

const TripsStack = createStackNavigator();
const TripsStackNavigator = (props) => {
  return (
    <TripsStack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: Colors.primaryColor, // Cambia el color de fondo del header aquí
        },
        headerTitle: () => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              left: -5,
            }}
          >
            <MontserratBoldText style={{ color: "white", fontSize: 20 }}>
              Agencia de Viaje
            </MontserratBoldText>
            <MontserratBoldText
              style={{ color: "white", fontSize: 12, top: -10, marginLeft: 5 }}
            >
              ®
            </MontserratBoldText>
          </View>
        ),
        headerTitleAlign: "left",
      }}
      initialRouteName="HomeScreen"
    >
      <TripsStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity
              style={styles.headerIconView}
              onPress={() => {
                props.navigation.openDrawer();
              }}
            >
              <Image
                source={require("../../assets/icons/bars.png")}
                resizeMode="contain"
                style={styles.headerIcon}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <TripsStack.Screen
        name="FlightDetails"
        component={FlightDetails}
        options={{
          headerLeftLabelVisible: false,
          headerLeft: () => null,
        }}
      />
    </TripsStack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerIconView: { padding: 10, alignItems: "center" },
  headerIcon: { width: 33, height: 33, marginRight: 5 },
});

export default TripsStackNavigator;
