import { View, Text } from "react-native";
import React from "react";

export default function Login({ navigation }) {
  console.log("navigation ", navigation);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => {
          navigation.push("Todo-App");
        }}
        style={{ backgroundColor: "lightgrey", padding: 20 }}
      >
        TODO APP
      </Text>
    </View>
  );
}
