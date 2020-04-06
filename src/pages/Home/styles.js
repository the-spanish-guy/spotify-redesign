import { StyleSheet, Dimensions } from "react-native";
import Constants from 'expo-constants'

const { width } = Dimensions.get('screen')

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121315",
  },
  
  flatImageContainer: {
    flex: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  topBarImage: {
    width: width,
    height: 300,
  },
  topBar: {
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
    fontSize: 30,
    paddingBottom: 10
  },
  subTxt: {
    fontSize: 16,
    color: "#FFFFFF"
  },
  
  mpContainer: {
    marginTop: 35,
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
    // color: "#e3e3e3",
    marginHorizontal: 20,
  },
  mpChild: {
    marginLeft: 20,
    paddingBottom: 16,
  },

  releasesBackground:{
    width: 140,
    height: 170,
    marginLeft: 26,
    marginRight: 6,
    // marginHorizontal: 10,
  },
  releasesBackgroundGradient: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    paddingBottom: 10,
    paddingLeft: 10
  },
  releasesTitle:{
    color:"#FFF",
    fontWeight: "bold",
    fontSize: 18,
  },
  releasesSubtitle: {
    color:"#ccc", fontWeight: "bold"

  },

  podcastContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  podcastImage:{
    marginHorizontal: 10,
    width: 170,
    height: 170,
    borderRadius: 100,
    justifyContent: "flex-end",
    paddingLeft: 10,
  },
  podcastName: 
  {
    marginTop: 10,
    color:"#FFF",
    fontWeight: "bold",
    fontSize: 20,

  },
  mostListenedToContainer:{
    borderLeftWidth: 10,
    borderLeftColor: "#1db954",
    marginTop: 80
  },
  mostListenedToContainerChild:{
    padding: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  mostListenedToImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: "#FFF"
  },
  mostListenedToMusic: {
    color:"#FFF",
    fontWeight: "bold",
    fontSize: 20
  },

  titleFocused: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
  },
  subTitleFocused: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold"
  },
  titleDefocused: {
    color: "#ACACAD",
    fontWeight: "bold",
    fontSize: 30,
  },
  subTitleDefocused: {
    color: "#ACACAD",
    fontSize: 28,
    fontWeight: "bold"
  },
  otherTitlesFocused: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "bold"
  }
})