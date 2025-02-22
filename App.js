import React from "react";
import {
  Button,
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: "orange" }}>
      <Button
        color="orange"
        title="Click Me"
        onPress={() => {
          "Button Tapped!";
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
