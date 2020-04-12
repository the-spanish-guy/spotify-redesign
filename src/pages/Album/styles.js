import { StyleSheet } from "react-native";
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121315",
  },
  returnIcon: {
    marginTop: Constants.statusBarHeight + 20,
    marginHorizontal: 20
  },
  coverAlbum: {
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