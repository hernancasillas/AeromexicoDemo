import React, { memo, useState, useLayoutEffect, useCallback } from "react";
import { Text, View, TouchableOpacity, Dimensions, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import AnimatedDotsCarousel from "react-native-animated-dots-carousel";
import Barcode from "@kichiyaki/react-native-barcode-generator";
import Colors from "../../constants/Colors";
import {
  MontserratBoldText,
  MontserratRegularText,
  MontserratSemiBoldText,
} from "../../components/StyledText";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const FlightDetails = ({ navigation, route }) => {
  const [index, setIndex] = useState(0);

  const flightsArray = [
    {
      flight: "AVA01",
      gate: "101E",
      originName: "Ciudad de México",
      originAbbreviation: "MEX",
      destinationName: "Dublín",
      destinationAbbeviation: "DUB",
      boardingTime: "05:55 AM",
      departureTime: "06:25 AM",
      landingTime: "11:00 PM",
      passengerName: "Moe Szyslak",
      seat: "54F",
      barcode: "A81NHD83301JAMPS",
    },
    {
      flight: "AVA01",
      gate: "101E",
      originName: "Ciudad de México",
      originAbbreviation: "MEX",
      destinationName: "Dublín",
      destinationAbbeviation: "DUB",
      boardingTime: "05:55 AM",
      departureTime: "06:25 AM",
      landingTime: "11:00 PM",
      passengerName: "Jane Szyslak",
      seat: "54E",
      barcode: "A81NAN19381JAMQW",
    },
    {
      flight: "AVA01",
      gate: "101E",
      originName: "Ciudad de México",
      originAbbreviation: "MEX",
      destinationName: "Dublín",
      destinationAbbeviation: "DUB",
      boardingTime: "05:55 AM",
      departureTime: "06:25 AM",
      landingTime: "11:00 PM",
      passengerName: "Edna Szyslak",
      seat: "54D",
      barcode: "A81NHD83391OPXS",
    },
  ];

  const increaseIndex = () => {
    setIndex(Math.min(index + 1, LENGTH - 1));
  };
  const decreaseIndex = () => {
    setIndex(Math.max(index - 1, 0));
  };

  const handleButton = () => {
    navigation.pop();
  };

  return (
    <View style={{ flex: 1 }}>
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
      </View>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
          borderWidth: 0,
          alignItems: "center",
          width: "22%",
          margin: 20,
          backgroundColor: "white",
          borderRadius: 5,
          elevation: 2,
          borderColor: "rgba(0, 0, 0, 0.1)",
          borderWidth: 1,
        }}
        onPress={handleButton}
      >
        <Image
          source={require("../../assets/icons/arrowLeft.png")}
          style={{ width: 23 }}
          resizeMode="contain"
        />
        <MontserratBoldText style={{ color: Colors.primaryColor }}>
          Atrás
        </MontserratBoldText>
      </TouchableOpacity>

      <View style={{ flex: 1 }}>
        <View style={{ borderWidth: 0 }}>
          <Carousel
            loop={false}
            width={width}
            height={height / 1.4}
            autoPlay={false}
            data={flightsArray}
            scrollAnimationDuration={100}
            onSnapToItem={(index) => setIndex(index)}
            pagingEnabled={true}
            renderItem={({ item, index }) => (
              <View
                style={{
                  borderWidth: 0,
                  borderRadius: 20,
                  marginHorizontal: 20,
                  marginVertical: 10,
                  elevation: 5,
                  backgroundColor: "white",
                }}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    padding: 20,
                    borderRadius: 20,
                    elevation: 5,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Image
                      source={require("../../assets/images/logoav.png")}
                      style={{ width: 70 }}
                      resizeMode="contain"
                    />
                    <View style={{ alignItems: "flex-end", marginLeft: 120 }}>
                      <MontserratRegularText>Vuelo</MontserratRegularText>
                      <MontserratSemiBoldText
                        style={{ color: Colors.primaryColor, fontSize: 16 }}
                      >
                        {item.flight}
                      </MontserratSemiBoldText>
                    </View>
                    <View style={{ alignItems: "flex-end" }}>
                      <MontserratRegularText>Sala</MontserratRegularText>
                      <MontserratSemiBoldText
                        style={{ color: Colors.primaryColor, fontSize: 16 }}
                      >
                        {item.gate}
                      </MontserratSemiBoldText>
                    </View>
                  </View>

                  <View
                    style={{
                      borderWidth: 0,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      top: 15,
                    }}
                  >
                    <MontserratSemiBoldText
                      style={{ color: Colors.primaryColor }}
                    >
                      {item.originName}
                    </MontserratSemiBoldText>
                    <MontserratSemiBoldText
                      style={{
                        color: Colors.primaryColor,
                      }}
                    >
                      {item.destinationName}
                    </MontserratSemiBoldText>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <MontserratSemiBoldText
                      style={{ fontSize: 32, color: Colors.black }}
                    >
                      {item.originAbbreviation}
                    </MontserratSemiBoldText>
                    <Image
                      source={require("../../assets/images/plane.png")}
                      style={{ width: "50%" }}
                      resizeMode="contain"
                    />
                    <MontserratSemiBoldText
                      style={{ fontSize: 32, color: Colors.black }}
                    >
                      {item.destinationAbbeviation}
                    </MontserratSemiBoldText>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View>
                      <MontserratRegularText
                        style={{ fontSize: 12, marginBottom: 5 }}
                      >
                        Abordaje
                      </MontserratRegularText>
                      <MontserratBoldText
                        style={{ color: Colors.primaryColor, fontSize: 16 }}
                      >
                        {item.boardingTime}
                      </MontserratBoldText>
                    </View>
                    <View style={{ left: -30 }}>
                      <MontserratRegularText
                        style={{ fontSize: 12, marginBottom: 5 }}
                      >
                        Salida
                      </MontserratRegularText>
                      <MontserratBoldText
                        style={{ color: Colors.primaryColor, fontSize: 16 }}
                      >
                        {item.departureTime}
                      </MontserratBoldText>
                    </View>
                    <View>
                      <MontserratRegularText
                        style={{
                          fontSize: 12,
                          marginBottom: 5,
                          alignSelf: "flex-end",
                        }}
                      >
                        Aterrizaje
                      </MontserratRegularText>
                      <MontserratBoldText
                        style={{ color: Colors.primaryColor, fontSize: 16 }}
                      >
                        {item.landingTime}
                      </MontserratBoldText>
                    </View>
                  </View>
                  <Image
                    source={require("../../assets/images/divider.png")}
                    style={{ marginVertical: 20, width: "100%" }}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View>
                      <MontserratRegularText style={{ fontSize: 12 }}>
                        Pasajero
                      </MontserratRegularText>
                      <MontserratBoldText
                        style={{ color: Colors.primaryColor, fontSize: 16 }}
                      >
                        {item.passengerName}
                      </MontserratBoldText>
                    </View>

                    <View>
                      <MontserratRegularText style={{ fontSize: 12 }}>
                        Asiento
                      </MontserratRegularText>
                      <MontserratBoldText
                        style={{
                          color: Colors.primaryColor,
                          fontSize: 16,
                          alignSelf: "flex-end",
                        }}
                      >
                        {item.seat}
                      </MontserratBoldText>
                    </View>
                  </View>
                </View>
                <Barcode
                  format="CODE128"
                  value={item.barcode}
                  text={item.barcode}
                  textStyle={{
                    fontSize: 12,
                    letterSpacing: 3,
                    fontFamily: "Coda-Regular",
                    marginTop: 10,
                  }}
                  style={{
                    marginVertical: 40,
                    backgroundColor: "transparent",
                    width: "100%",
                  }}
                  height={76}
                  maxWidth={width / 1.3}
                />
              </View>
            )}
          />
          <View
            style={{
              borderWidth: 0,
              alignItems: "center",
            }}
          >
            <AnimatedDotsCarousel
              length={flightsArray.length}
              currentIndex={index}
              maxIndicators={4}
              interpolateOpacityAndColor={true}
              activeIndicatorConfig={{
                color: "grey",
                margin: 3,
                opacity: 1,
                size: 9,
              }}
              inactiveIndicatorConfig={{
                color: "grey",
                margin: 3,
                opacity: 0.3,
                size: 9,
              }}
              decreasingDots={[
                {
                  config: { color: "white", margin: 3, opacity: 0.5, size: 6 },
                  quantity: 1,
                },
                {
                  config: { color: "white", margin: 3, opacity: 0.5, size: 4 },
                  quantity: 1,
                },
              ]}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
