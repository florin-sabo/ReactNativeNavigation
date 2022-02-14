import React from "react";
import { View, Text } from "react-native";

const AddScreen = () => {
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "#33E6FA",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 40, fontWeight: "bold", letterSpacing: 4 }}>
        Add
      </Text>
    </View>
  );
};

export default AddScreen;
