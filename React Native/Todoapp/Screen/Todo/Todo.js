import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import styles from "./TodoStyle";

export default function Todo() {
  const [todo, setTodo] = useState([10, 50, 1660, 100]);
  const [inputValue, setInputValue] = useState("");
  //add todo
  const addTodo = () => {
    console.log("add todo");
    // todo.push(inputValue);
    setTodo([...todo, inputValue]);
  };
  const renderItem = ({ index, item }) => {
    return (
      <View style={styles.todoItem}>
        <Text style={styles.todoItemText}>{item}</Text>
        <View style={styles.todoItemBtn}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}> EDIT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>DELETE</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingBox}>
        <Text style={styles.heading}>Todo APP</Text>
      </View>

      {/* ///INPUT BAR WRAPPER */}
      <View style={styles.inputBox}>
        <TextInput
          onChangeText={(e) => setInputValue(e)}
          style={styles.inputBar}
          placeholder="ENTER TODO"
        />

        <View style={styles.btnBox}>
          <TouchableOpacity style={styles.btn} onPress={addTodo}>
            <Text style={styles.btnText}> ADD TODO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>DELETE ALL</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.todoList}>
        {/* <ScrollView> */}
        {/* {todo.map((val, ind) => {
            return (
              <View key={ind} style={styles.todoItem}>
                <Text style={styles.todoItemText}>{val}</Text>
                <View style={styles.todoItemBtn}>
                  <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}> EDIT</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>DELETE</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })} */}
        <FlatList
          data={todo} ///collection
          renderItem={renderItem} //return component
          keyExtractor={(item) => item}
        />
        {/* </ScrollView> */}
      </View>
    </View>
  );
}
