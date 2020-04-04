import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  imgCoverArtist: {
    width: "100%",
    height: "100%",
    // marginTop: Constants.statusBarHeight -52,
    position: "absolute"
    // marginTop: 0
  },
  coverArtistsIcons: {
    zIndex: 99,
    marginTop: Constants.statusBarHeight + 20,
    marginHorizontal: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  }
})