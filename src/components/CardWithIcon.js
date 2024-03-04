import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from "react-native";
import Clipboard from "@react-native-clipboard/clipboard";
import Colors from "../constants/Colors";
import { MontserratBoldText, MontserratRegularText } from "./StyledText";

/**
 * Component to show a card with an icon.
 * @param {*} param0
 * @returns
 */
const CardWithIcon = ({
  imageSource,
  title,
  description,
  isFirstItem,
  hasCoupon,
  coupon,
  platform,
  couponImage,
  showToast,
}) => {
  /**
   * Function to copy a string to clipboard
   * @param {string} coupon
   */
  const copyToClipboard = (coupon) => {
    showToast();
    Clipboard.setString(coupon);
  };

  const styles = StyleSheet.create({
    container: {
      borderRadius: 20,
      backgroundColor: "white",
      elevation: 5,
      width: "80%",
      alignSelf: "center",
      marginTop: !isFirstItem ? 20 : 0,
    },
    card: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      paddingHorizontal: 20,
      paddingVertical: 5,
    },
    iconSize: {
      width: 40,
    },
    title: {
      color: Colors.black,
    },
    description: {
      fontSize: 12,
    },
    textView: { borderWidth: 0, marginLeft: 10 },
    rowWithCoupon: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    coupon: {
      borderWidth: 1,
      borderStyle: "dashed",
      borderColor: Colors.primaryColor,
      borderRadius: 10,
      borderWidth: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      padding: 5,
      marginHorizontal: 2,
    },
    couponIcon: {
      width: 12,
    },
    couponText: {
      color: Colors.primaryColor,
      fontSize: 12,
      marginLeft: 3,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={imageSource}
          style={styles.iconSize}
          resizeMode="contain"
        />
        <View style={styles.textView}>
          <MontserratBoldText style={styles.title}>{title}</MontserratBoldText>

          {hasCoupon ? (
            <View style={styles.rowWithCoupon}>
              <MontserratRegularText style={styles.description}>
                {description}
              </MontserratRegularText>
              <TouchableOpacity
                style={styles.coupon}
                onPress={() => {
                  copyToClipboard(coupon);
                }}
              >
                <Image
                  source={couponImage}
                  style={styles.couponIcon}
                  resizeMode="contain"
                />
                <MontserratBoldText style={styles.couponText}>
                  {coupon}
                </MontserratBoldText>
              </TouchableOpacity>

              <MontserratRegularText style={styles.description}>
                en {platform}
              </MontserratRegularText>
            </View>
          ) : (
            <MontserratRegularText style={styles.description}>
              {description}
            </MontserratRegularText>
          )}
        </View>
      </View>
    </View>
  );
};

export default CardWithIcon;
