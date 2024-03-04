import React, { memo, useState, useEffect, useCallback } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  RefreshControl,
  ScrollView,
  Platform,
  Alert,
  Linking,
  Image,
  Dimensions,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import CardWithIcon from "../../components/CardWithIcon";
import Colors from "../../constants/Colors";
import {
  MontserratBoldText,
  NeueHaasBoldText,
  NeueHaasLightText,
  NeueHaasMediumText,
} from "../../components/StyledText";
import Toast from "react-native-toast-message";

export const HomeScreen = ({ navigation }) => {
  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);

  const handleButton = () => {
    navigation.navigate("FlightDetails");
  };
  const handleButtonDrawer = () => {
    navigation.openDrawer();
  };

  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Cupon copiado.",
    });
  };

  useEffect(() => {
    // calculate image width and height
    let imageWidth = Image.resolveAssetSource(
      require("../../assets/images/dublin.png")
    ).width;
    let imageHeight = Image.resolveAssetSource(
      require("../../assets/images/dublin.png")
    ).height;
    const screenWidth = Dimensions.get("window").width;
    const scaleFactor = imageWidth / screenWidth;
    const imageHeightOk = imageHeight / scaleFactor;

    setImgWidth(screenWidth);
    setImgHeight(imageHeightOk);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
        <TouchableOpacity
          style={{ padding: 10, alignItems: "center" }}
          onPress={handleButtonDrawer}
        >
          <Image
            source={require("../../assets/icons/bars.png")}
            resizeMode="contain"
            style={{ width: 33 }}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ borderWidth: 0, justifyContent: "flex-start" }}>
          <ImageBackground
            source={require("../../assets/images/dublin.png")}
            style={{
              width: imgWidth,
              height: imgHeight,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MontserratBoldText style={{ color: "white", fontSize: 50 }}>
              Dublín
            </MontserratBoldText>
          </ImageBackground>
          <View
            style={{
              borderRadius: 20,
              elevation: 5,
              backgroundColor: "white",

              padding: 20,
              width: "80%",
              alignSelf: "center",
              top: -35,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <MontserratBoldText style={{ fontSize: 22, color: Colors.black }}>
                Tu vuelo de mañana
              </MontserratBoldText>
              <TouchableOpacity disabled>
                <Image
                  source={require("../../assets/images/tooltip-off.png")}
                  style={{
                    width: 20,
                    marginLeft: 10,
                  }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",

                justifyContent: "space-between",
                width: "100%",
                borderWidth: 0,
                marginTop: 10,
              }}
            >
              <View style={{ borderWidth: 0 }}>
                <NeueHaasBoldText style={{ color: Colors.black }}>
                  06:25
                </NeueHaasBoldText>
                <NeueHaasLightText style={{ color: Colors.black }}>
                  MEX
                </NeueHaasLightText>
              </View>
              <Image
                source={require("../../assets/images/steps-no-heigth.png")}
                style={{ width: "70%", top: -5 }}
                resizeMode="contain"
              />
              <View style={{ borderWidth: 0 }}>
                <NeueHaasBoldText style={{ color: Colors.black }}>
                  23:00
                </NeueHaasBoldText>
                <NeueHaasLightText style={{ color: Colors.black }}>
                  DUB
                </NeueHaasLightText>
              </View>
            </View>
            <Image
              source={require("../../assets/images/divider-line.png")}
              style={{ marginVertical: 20, width: "100%" }}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 15,
                  borderWidth: 0,
                  alignItems: "center",
                  width: "49%",
                  backgroundColor: Colors.disabled,
                  borderRadius: 10,
                }}
                disabled
              >
                <MontserratBoldText
                  style={{ color: Colors.white, fontSize: 12 }}
                >
                  CAMBIAR VUELO
                </MontserratBoldText>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 15,
                  borderWidth: 0,
                  alignItems: "center",
                  width: "49%",
                  backgroundColor: Colors.primaryColor,
                  borderRadius: 10,
                }}
                onPress={handleButton}
              >
                <MontserratBoldText
                  style={{ color: Colors.white, fontSize: 12 }}
                >
                  PASE DE ABORDAR
                </MontserratBoldText>
              </TouchableOpacity>
            </View>
          </View>
          <CardWithIcon
            imageSource={require("../../assets/icons/baggage.png")}
            title="Equipaje incluido"
            description="1 pieza de 50cm x 30cm x 40cm"
            isFirstItem
          />
          <CardWithIcon
            imageSource={require("../../assets/icons/seat.png")}
            title="Asiento premium"
            description="2B - Pasillo"
          />
          <CardWithIcon
            imageSource={require("../../assets/icons/bus.png")}
            title="Transporte al aeropuerto"
            hasCoupon
            description="Usa el cupón:"
            coupon="ANU38SP"
            platform="Uber"
            couponImage={require("../../assets/icons/sheet.png")}
            showToast={showToast}
          />
        </View>
        <View style={{ height: 60 }} />
      </ScrollView>
      <Toast />
    </SafeAreaView>
  );
};
