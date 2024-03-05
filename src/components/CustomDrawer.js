import React from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Avatar, Title, Drawer, Text } from "react-native-paper";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { useState } from "react";
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
            <TouchableOpacity style={styles.avatarSection}>
              <Avatar.Image
                source={require("../assets/icons/iconHD.png")}
                style={styles.avatar}
                size={50}
              />
              <View style={styles.avatarText}>
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
                <Image
                  source={require("../assets/icons/home.png")}
                  style={{ width: size, height: size }}
                  resizeMode="contain"
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

      <View style={styles.versionText}>
        <MontserratRegularText style={styles.versionTextStyle}>
          V. 1.0.0
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
  avatarSection: {
    flexDirection: "row",
    marginTop: 15,
  },
  avatar: { backgroundColor: Colors.primaryColor },
  avatarText: {
    marginLeft: 15,
    flexDirection: "column",

    width: "70%",
  },
  versionText: {
    paddingHorizontal: 30,
    paddingVertical: Platform.OS == "android" ? 10 : 30,
  },
  versionTextStyle: {
    color: Colors.white,
    fontSize: 12,
  },
});

export default CustomDrawerContent;
