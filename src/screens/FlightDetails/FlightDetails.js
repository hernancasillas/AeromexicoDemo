/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
/* eslint-disable quotes */
import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from "react-native";
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

export const FlightDetails = ({ navigation }) => {
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

  /**
   * Function to handle when the user presses the back button
   */
  const handleButton = () => {
    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <TouchableOpacity
          style={styles.backButtonContainer}
          onPress={handleButton}
        >
          <Image
            source={require("../../assets/icons/arrowLeft.png")}
            style={styles.backButtonIcon}
            resizeMode="contain"
          />
          <MontserratBoldText style={styles.backButtonText}>
            Atrás
          </MontserratBoldText>
        </TouchableOpacity>

        <View style={styles.container}>
          <View>
            <Carousel
              loop={false}
              width={width}
              height={550}
              autoPlay={false}
              data={flightsArray}
              scrollAnimationDuration={100}
              onSnapToItem={(index) => setIndex(index)}
              pagingEnabled={true}
              renderItem={({ item }) => (
                <View style={styles.flightCardContainer}>
                  <View style={styles.flightCardHeaderContainer}>
                    <View style={styles.rowSpaceBetween}>
                      <Image
                        source={require("../../assets/images/logoav.png")}
                        style={styles.logo}
                        resizeMode="contain"
                      />
                      <View style={styles.headerFlightContainer}>
                        <MontserratRegularText>Vuelo</MontserratRegularText>
                        <MontserratSemiBoldText
                          style={styles.headerFlightValue}
                        >
                          {item.flight}
                        </MontserratSemiBoldText>
                      </View>
                      <View style={styles.headerGateValue}>
                        <MontserratRegularText>Sala</MontserratRegularText>
                        <MontserratSemiBoldText
                          style={styles.headerFlightValue}
                        >
                          {item.gate}
                        </MontserratSemiBoldText>
                      </View>
                    </View>

                    <View
                      style={[
                        styles.rowSpaceBetween,
                        {
                          top: 15,
                        },
                      ]}
                    >
                      <MontserratSemiBoldText style={styles.headerPrimaryText}>
                        {item.originName}
                      </MontserratSemiBoldText>
                      <MontserratSemiBoldText style={styles.headerPrimaryText}>
                        {item.destinationName}
                      </MontserratSemiBoldText>
                    </View>
                    <View style={styles.rowSpaceBetween}>
                      <MontserratSemiBoldText
                        style={{ fontSize: 32, color: Colors.black }}
                      >
                        {item.originAbbreviation}
                      </MontserratSemiBoldText>
                      <Image
                        source={require("../../assets/images/plane.png")}
                        style={styles.flightImage}
                        resizeMode="contain"
                      />
                      <MontserratSemiBoldText style={styles.cityAbbreviation}>
                        {item.destinationAbbeviation}
                      </MontserratSemiBoldText>
                    </View>

                    <View style={styles.rowSpaceBetween}>
                      <View>
                        <MontserratRegularText style={styles.infoLabel}>
                          Abordaje
                        </MontserratRegularText>
                        <MontserratBoldText style={styles.infoValue}>
                          {item.boardingTime}
                        </MontserratBoldText>
                      </View>
                      <View style={{ left: -30 }}>
                        <MontserratRegularText style={styles.infoLabel}>
                          Salida
                        </MontserratRegularText>
                        <MontserratBoldText style={styles.infoValue}>
                          {item.departureTime}
                        </MontserratBoldText>
                      </View>
                      <View>
                        <MontserratRegularText
                          style={[
                            styles.infoLabel,
                            {
                              alignSelf: "flex-end",
                            },
                          ]}
                        >
                          Aterrizaje
                        </MontserratRegularText>
                        <MontserratBoldText style={styles.infoValue}>
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
                        <MontserratRegularText style={styles.infoLabel}>
                          Pasajero
                        </MontserratRegularText>
                        <MontserratBoldText
                          style={{ color: Colors.primaryColor, fontSize: 16 }}
                        >
                          {item.passengerName}
                        </MontserratBoldText>
                      </View>

                      <View>
                        <MontserratRegularText style={styles.infoLabel}>
                          Asiento
                        </MontserratRegularText>
                        <MontserratBoldText
                          style={[
                            styles.infoValue,
                            {
                              alignSelf: "flex-end",
                            },
                          ]}
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
                activeIndicatorConfig={styles.activeIndicator}
                inactiveIndicatorConfig={styles.inactiveIndicator}
                decreasingDots={[
                  {
                    config: {
                      color: "white",
                      margin: 3,
                      opacity: 0.5,
                      size: 6,
                    },
                    quantity: 1,
                  },
                  {
                    config: {
                      color: "white",
                      margin: 3,
                      opacity: 0.5,
                      size: 4,
                    },
                    quantity: 1,
                  },
                ]}
              />
            </View>
          </View>
        </View>
        <View style={styles.bottomView} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  backButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    width: "25%",
    margin: 20,
    backgroundColor: Colors.white,
    borderRadius: 5,
    elevation: 2,
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  backButtonIcon: { width: 23 },
  backButtonText: { color: Colors.primaryColor, marginLeft: 5 },
  headerFlightContainer: { alignItems: "flex-end", marginLeft: 120 },
  headerFlightValue: { color: Colors.primaryColor, fontSize: 16 },
  flightCardContainer: {
    borderWidth: 0,
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    elevation: 5,
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  flightCardHeaderContainer: {
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 20,
    elevation: 5,
  },
  rowSpaceBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: { width: 70 },
  headerPrimaryText: { color: Colors.primaryColor },
  flightImage: { width: "50%" },
  cityAbbreviation: { fontSize: 32, color: Colors.black },
  infoLabel: { fontSize: 12, marginBottom: 5 },
  infoValue: { color: Colors.primaryColor, fontSize: 16 },
  activeIndicator: {
    color: "grey",
    margin: 3,
    opacity: 1,
    size: 9,
  },
  inactiveIndicator: {
    color: "grey",
    margin: 3,
    opacity: 0.3,
    size: 9,
  },
  bottomView: {
    height: 60,
  },
  headerGateValue: { alignItems: "flex-end" },
});
