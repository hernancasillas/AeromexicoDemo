/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import Colors from "../constants/Colors";
import { MontserratBoldText } from "./StyledText"; // Ajusta la ruta según la ubicación real de tu componente de texto

const CustomHeader = ({ handleButtonDrawer, hasOpener }) => {
  return (
    <View
      style={{
        borderWidth: 0,
        padding: 10,
        backgroundColor: Colors.primaryColor,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 50,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
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
      {hasOpener ? (
        <TouchableOpacity
          style={{ padding: 10, alignItems: "center" }}
          onPress={handleButtonDrawer}
        >
          <Image
            source={require("../assets/icons/bars.png")}
            resizeMode="contain"
            style={{ width: 33 }}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default CustomHeader;
