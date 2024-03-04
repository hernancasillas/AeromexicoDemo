import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Clipboard from "@react-native-clipboard/clipboard";
import Colors from "../constants/Colors";
import { MontserratBoldText, MontserratRegularText } from "./StyledText";

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
  const copyToClipboard = (coupon) => {
    console.log("Coupon copied: ", coupon);
    showToast();
    Clipboard.setString(coupon);
  };
  return (
    <View
      style={{
        borderRadius: 20,
        backgroundColor: "white",
        elevation: 5,
        width: "80%",
        alignSelf: "center",
        marginTop: !isFirstItem ? 20 : 0,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingHorizontal: 20,
          paddingVertical: 5,
        }}
      >
        <Image
          source={imageSource}
          style={{ width: 40 }}
          resizeMode="contain"
        />
        <View style={{ borderWidth: 0, marginLeft: 10 }}>
          <MontserratBoldText style={{ color: Colors.black }}>
            {title}
          </MontserratBoldText>
          {!hasCoupon ? (
            <MontserratRegularText style={{ fontSize: 12 }}>
              {description}
            </MontserratRegularText>
          ) : null}
          {hasCoupon ? (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <MontserratRegularText style={{ fontSize: 12 }}>
                {description}
              </MontserratRegularText>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderStyle: "dashed",
                  borderColor: Colors.primaryColor,
                  borderTopColor: "white",
                  borderRadius: 10,
                  borderWidth: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 5,
                  marginHorizontal: 5,
                }}
                onPress={() => {
                  copyToClipboard(coupon);
                }}
              >
                <Image
                  source={couponImage}
                  style={{ width: 12 }}
                  resizeMode="contain"
                />
                <MontserratBoldText
                  style={{
                    color: Colors.primaryColor,
                    fontSize: 12,
                    marginLeft: 3,
                  }}
                >
                  {coupon}
                </MontserratBoldText>
              </TouchableOpacity>

              <MontserratRegularText style={{ fontSize: 12 }}>
                en {platform}
              </MontserratRegularText>
            </View>
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default CardWithIcon;
