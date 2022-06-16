import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    marginTop: 40,
    // backgroundColor: "red",
    flex: 1,
  },
  headingBox: {
    alignItems: "center",
    marginTop: 10,
  },
  heading: {
    fontSize: 28,
  },
  inputBox: {
    // backgroundColor: "yellow",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputBar: {
    borderWidth: 5,
    borderStyle: "solid",
    borderColor: "lightgrey",
    width: "95%",
    padding: 8,
    color: "black",
    borderRadius: 8,
  },
  btnBox: {
    flexDirection: "row",
    marginVertical: 10,
  },
  btn: {
    marginHorizontal: 10,
    backgroundColor: "royalblue",
    padding: 10,
    borderRadius: 10,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
  todoList: {
    // backgroundColor: "black",
    flex: 3,
    marginTop: 10,
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  todoItemText: {
    // color : "white",
    fontSize: 20,
    width: "50%",
    padding: 8,
  },
  todoItemBtn: {
    flexDirection: "row",
    width: "50%",
    padding: 8,
  },
});
