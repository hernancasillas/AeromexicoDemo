import React from "react";
import { Text } from "react-native";

export function MontserratBoldText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "Montserrat-Bold" }]} />
  );
}

export function MontserratRegularText(props) {
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: "Montserrat-Regular" }]}
    />
  );
}
export function MontserratSemiBoldText(props) {
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: "Montserrat-SemiBold" }]}
    />
  );
}
export function CodaRegularText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "Coda-Regular" }]} />
  );
}
export function NeueHaasBoldText(props) {
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: "NeueHaasUnica-Bold" }]}
    />
  );
}
export function NeueHaasMediumText(props) {
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: "NeueHaasUnica-Medium" }]}
    />
  );
}
export function NeueHaasLightText(props) {
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: "NeueHaasUnica-Light" }]}
    />
  );
}
