/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import CardWithIcon from "../../components/CardWithIcon";
import Colors from "../../constants/Colors";
import {
  MontserratBoldText,
  NeueHaasBoldText,
  NeueHaasLightText,
} from "../../components/StyledText";
import Toast from "react-native-toast-message";

export const HomeScreen = ({ navigation }) => {
  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);

  const handleButton = () => {
    navigation.navigate("FlightDetails");
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
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View>
          <ImageBackground
            source={require("../../assets/images/dublin.png")}
            style={{
              width: imgWidth,
              height: imgHeight,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MontserratBoldText style={styles.imageTitle}>
              Dublín
            </MontserratBoldText>
          </ImageBackground>
          <View style={styles.yourFlightCard}>
            <View style={styles.rowFlexStart}>
              <MontserratBoldText style={styles.yourFlightText}>
                Tu vuelo de mañana
              </MontserratBoldText>
              <TouchableOpacity disabled>
                <Image
                  source={require("../../assets/images/tooltip-off.png")}
                  style={styles.toolTip}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.hoursRow}>
              <View>
                <NeueHaasBoldText style={styles.regularText}>
                  06:25
                </NeueHaasBoldText>
                <NeueHaasLightText style={styles.regularText}>
                  MEX
                </NeueHaasLightText>
              </View>
              <Image
                source={require("../../assets/images/steps-no-heigth.png")}
                style={styles.imageSteps}
                resizeMode="contain"
              />
              <View>
                <NeueHaasBoldText style={styles.regularText}>
                  23:00
                </NeueHaasBoldText>
                <NeueHaasLightText style={styles.regularText}>
                  DUB
                </NeueHaasLightText>
              </View>
            </View>
            <Image
              source={require("../../assets/images/divider-line.png")}
              style={styles.imageDivider}
            />
            <View style={styles.rowSpaceBetween}>
              <TouchableOpacity
                style={[
                  styles.buttonContainer,
                  {
                    backgroundColor: Colors.disabled,
                  },
                ]}
                disabled
              >
                <MontserratBoldText style={styles.buttonText}>
                  CAMBIAR VUELO
                </MontserratBoldText>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.buttonContainer,
                  {
                    backgroundColor: Colors.primaryColor,
                  },
                ]}
                onPress={handleButton}
              >
                <MontserratBoldText style={styles.buttonText}>
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
        <View style={styles.bottomView} />
      </ScrollView>
      <Toast />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageTitle: { color: "white", fontSize: 50 },
  yourFlightCard: {
    borderRadius: 20,
    elevation: 5,
    backgroundColor: "white",

    padding: 20,
    width: "80%",
    alignSelf: "center",
    top: -35,
  },
  rowFlexStart: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  yourFlightText: { fontSize: 22, color: Colors.black },
  toolTip: {
    width: 20,
    marginLeft: 10,
  },
  hoursRow: {
    flexDirection: "row",

    justifyContent: "space-between",
    width: "100%",
    borderWidth: 0,
    marginTop: 10,
  },
  regularText: { color: Colors.black },
  imageSteps: { width: "70%", top: -5 },
  imageDivider: { marginVertical: 20, width: "100%" },
  rowSpaceBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderWidth: 0,
    alignItems: "center",
    width: "49%",

    borderRadius: 10,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 12,
    textAlign: "center",
  },
  bottomView: { height: 60 },
});
