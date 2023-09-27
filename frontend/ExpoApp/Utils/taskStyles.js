import * as CONST from "../Utils/constants";
import { StatusBar } from "react-native";
import { StyleSheet } from "react-native";
export const taskstyles = StyleSheet.create({
    imageBackground: {
      flex: 1,
    },
    container: {
      flex: 1,
      marginVertical: "2%",
      marginTop: StatusBar.currentHeight || 0,
    },
    header: {
      flex: 0.075,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 14,
    },
    list: {
      flex: 1,
      // flexGrow: 1,
      // marginBottom: 10
    },
  });