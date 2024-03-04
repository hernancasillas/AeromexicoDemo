import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Avatar, Title, Drawer, Text } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useEffect, useState, useCallback } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Colors from "../constants/Colors";
import { MontserratRegularText } from "./StyledText";

const CustomDrawerContent = (props) => {
  const { navigation } = props;

  const [active, setActive] = useState("TripsStack");

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <TouchableOpacity style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={require("../assets/icons/iconHD.png")}
                style={{ backgroundColor: Colors.primaryColor }}
                size={50}
              />
              <View
                style={{
                  marginLeft: 15,
                  flexDirection: "column",

                  width: "70%",
                }}
              >
                <Title style={styles.title}>¡Bienvenid@!</Title>
                <Text numberOfLines={1} style={styles.caption}>
                  {"Agencia de Viaje"}
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <Drawer.Section style={styles.drawerSection} showDivider={false}>
            <Drawer.Item
              icon={({ color, size }) => (
                <Ionicons
                  name="home-outline"
                  color={Colors.white}
                  size={size}
                />
              )}
              label={
                <MontserratRegularText style={styles.activeLabelStyle}>
                  Inicio
                </MontserratRegularText>
              }
              theme={{
                colors: {
                  secondaryContainer: Colors.grey,
                },
              }}
              style={styles.item}
              onPress={() => {
                props.navigation.navigate("TripsStack");
                setActive("TripsStack");
              }}
              {...props}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <View
        style={{
          paddingHorizontal: 30,
          paddingVertical: Platform.OS == "android" ? 10 : 30,
        }}
      >
        <MontserratRegularText
          style={{ color: Colors.primaryColor, fontSize: 12 }}
        >
          V. 1.0
        </MontserratRegularText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
  },
  drawerContent: {
    flex: 1,
    borderWidth: 0,
    backgroundColor: Colors.primaryColor,
  },

  activeLabelStyle: {
    fontFamily: "Montserrat-Bold",
    color: Colors.white,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontFamily: "Montserrat-Bold",
    color: Colors.white,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "Montserrat-Regular",
    color: Colors.white,
  },

  drawerSection: {
    marginTop: 15,
    borderBottomColor: "#f4f4f4",
    borderBottomWidth: 1,
    backgroundColor: Colors.primaryColor,
  },

  item: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 5,
    marginVertical: 5,
  },
});

export default CustomDrawerContent;
