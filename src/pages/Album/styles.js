import { StyleSheet } from "react-native";
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121315",
  },
  coverAlbum: {
    marginTop: Constants.statusBarHeight + 20,
    width: "100%",
    height: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  imgTopBar: {
    width: "60%",
    height:"60%"
  }
})