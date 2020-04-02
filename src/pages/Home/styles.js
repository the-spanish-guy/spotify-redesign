import { StyleSheet } from "react-native";
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121315",
  },
  topBar: {
    width: '100%',
    height: 300,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  txtContainer: {
    marginTop: Constants.statusBarHeight + 40,
    paddingHorizontal: 20
  },
  txt: {
    fontWeight: "bold",
    color: "#FFFFFF"
  },
  mpContainer: {
    marginTop: 20,
  },
  mpTitle: {
    flexDirection: "row",
    alignContent: "flex-start",
    paddingHorizontal: 20,
    marginBottom: 40
  },
  musicas: {
    color: "#FFFFFF",
    fontSize: 18
  },
  podcasts: {
    color: "#e3e3e3",
    marginHorizontal: 20,
    fontSize: 18
  }
})