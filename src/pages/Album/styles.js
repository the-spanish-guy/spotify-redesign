import { StyleSheet } from "react-native";
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121315",
  },
  barActions: {
    marginTop: Constants.statusBarHeight + 40,
    paddingHorizontal: 28,
    flexDirection: "row",
    justifyContent: "space-between"
  }
})