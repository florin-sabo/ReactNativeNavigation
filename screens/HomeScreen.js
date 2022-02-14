import React from "react";
import { View, Text } from "react-native";

const HomeScreen = () => {
  return (
    <View
    style={{
      height: "100%",
      backgroundColor: "#54CBFF",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Text style={{fontSize: 40, fontWeight: "bold", letterSpacing: 5}}>Home</Text>
    </View>
  );
};

export default HomeScreen;
