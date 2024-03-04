import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { StatusBar, StyleSheet } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { Colors } from "react-native/Libraries/NewAppScreen";
import RootNavigator from "./src/navigators/RootNavigator";

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <RootNavigator>
      <StatusBar backgroundColor={Colors.primaryColor} barStyle={"default"} />
    </RootNavigator>
  );
}

export default App;
