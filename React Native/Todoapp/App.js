import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

const App = () => {
  console.log("hello world");
  const [inputValue, setInputValue] = useState("");
  console.log("inputValue", inputValue);
  return (
    // // <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    // //   <View style={styles.container}>
    // //     <Text style={styles.text}>HELLO WORLD</Text>
    // //     <Text style={styles.text}>HELLO WORLD</Text>
    // //     <Text style={styles.text}>HELLO WORLD</Text>
    // //   <Text style={styles.text}>HELLO WORLD</Text>
    // //   </View>
    // // </ScrollView>
    // <View style={styles.container}>
    //   <Image
    //     source={require("./assets/car.jpg")}
    //     style={styles.image}
    //     resizeMode="contain"
    //     // blurRadius={10}
    //     // defaultSource={}
    //     fadeDuration={1000}
    //   />
    //   {/* <Image
    //     source={{
    //       uri: "https://media.wired.com/photos/5d09594a62bcb0c9752779d9/125:94/w_1994,h_1500,c_limit/Transpo_G70_TA-518126.jpg",
    //     }}
    //     style={styles.image}
    //     resizeMode="contain"
    //   /> */}

    //   <View>
    //     <TextInput
    //       secureTextEntry={false}
    //       style={styles.inputBar}
    //       placeholder="ENTER YOUR NAME"
    //       onChangeText={(e) => setInputValue(e)}
    //       multiline={true}
    //       keyboardType={"url"}
    //     />

    //     {/* <Button
    //       title="SUBMIT"
    //       color="red"
    //       onPress={() => console.log("hello")}
    //     /> */}
    //     <View style={{ alignItems: "center", marginTop: 21 }}>
    //       <TouchableOpacity
    //         onPress={() => console.log("touchableopacity")}
    //         activeOpacity={0.5}
    //         style={{
    //           backgroundColor: "green",
    //           height: 50,
    //           width: 150,
    //           borderRadius: 15,
    //           alignItems: "center",
    //           justifyContent: "center",
    //         }}
    //       >
    //         <Text style={{ fontSize: 20, color: "white" }}>SUBMIT</Text>
    //       </TouchableOpacity>
    //     </View>
    //   </View>
    // </View>
    // <View style={styles.parent}>
    //   <View style={styles.one}>
    //     <Text>One</Text>
    //   </View>
    //   <View style={styles.two}>
    //     <Text></Text>
    //   </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 30,
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    // flexDirection: "row",
  },
  text: {
    fontSize: 25,
  },
  image: {
    width: "100%",
    height: 400,
  },
  inputBar: {
    borderColor: "black",
    borderWidth: 2,
    borderStyle: "solid",
    padding: 8,
    fontSize: 22,
  },

  parent: {
    backgroundColor: "yellow",
    flex: 1,
  },
  one: {
    backgroundColor: "yellow",
    width: "100%",
    flex: 1,
  },
  two: {
    backgroundColor: "orange",
    width: "100%",
    flex: 2,
    borderTopLeftRadius : 50,
    borderTopRightRadius : 50,
  },
  three: {
    backgroundColor: "black",
    width: "100%",
    flex: 1,
  },
});

export default App;
