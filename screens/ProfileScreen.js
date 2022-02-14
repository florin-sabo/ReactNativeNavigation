import React from "react";
import { View, Text } from "react-native";

const ProfileScreen = () => {
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "#FF4F56",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <Text style={{ fontSize: 40, fontWeight: "bold", letterSpacing: 4 }}>
        Profile
      </Text>
    </View>
  );
};

export default ProfileScreen;
