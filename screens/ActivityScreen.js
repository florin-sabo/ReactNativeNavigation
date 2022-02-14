import React from "react";
import { View, Text } from "react-native";

const ActivityScreen = () => {
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "#FF99CC",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 40, fontWeight: "bold", letterSpacing: 4 }}>
        Activity
      </Text>
    </View>
  );
};

export default ActivityScreen;
