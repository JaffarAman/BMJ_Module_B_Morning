import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>HELLO WORLD</Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    marginTop: 40,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: "red",
    fontSize: 30,
  },
});
