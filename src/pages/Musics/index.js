import React from 'react'
import { View, Text, SafeAreaView, Image, ProgressBarAndroid } from 'react-native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'

export default function Musics() {
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.barActions}>
        <Ionicons name="ios-arrow-down" color="#FFF" size={20} />
        <Text style={{color:"#FFF", textAlign: "center"}}>Tocando do Álbum {"\n"}YHLQMDLG</Text>
        <Ionicons name="md-more" color="#FFF" size={20} />
      </View>

      <View
        style={{
          width: "80%",
          height: "37%",
          flexDirection: "column",
          alignSelf: "center",
          marginTop: 40
        }} >
        <Image source={{uri:'https://i.scdn.co/image/ab67616d0000b273548f7ec52da7313de0c5e4a0'}}
        style={{
          width: "100%",
          height: "100%"
        }}
        />
        <LinearGradient colors={['transparent', 'transparent', '#121315']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{width: "100%", height: "100%", marginTop: "-100%"}}
        ></LinearGradient>
        <Text style={{color: "#FFFFFF", marginTop: "-28%", marginHorizontal: 20, fontWeight: "bold", fontSize: 20}}>A Tu Merced</Text>
        <Text style={{color: "#b0b0b1", marginHorizontal: 20, fontWeight: "bold"}}>Bad Bunny</Text>
      </View>

      <View style={{
        width: "80%",
        marginTop: 40,
        alignSelf: "center"
      }}>
        <ProgressBarAndroid
          style={{justifyContent: "space-evenly", width: "100%"}}
          styleAttr="Horizontal" indeterminate={false} progress={0.8} color="#1db954" />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: 160,
              alignSelf: "center",
              marginTop: 80
            }}
          >
            <Ionicons name="ios-skip-backward" color="#FFF" size={30} />
            <Ionicons name="ios-pause" color="#FFF" size={30} />
            <Ionicons name="ios-skip-forward" color="#FFF" size={30} />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
              alignSelf: "center",
              marginTop: 60,
              marginBottom: 70
            }}
          >
            <MaterialIcons name="devices" color="#1db954" size={30} />
            <Ionicons name="ios-shuffle" color="#656566" size={30} />
            <Ionicons name="md-repeat" color="#656566" size={30} />
            <Ionicons name="ios-heart-empty" color="#1db954" size={30} />
          </View>
      </View>

      <View
       style={{
        backgroundColor: "#272727",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        height: 80,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      }}
      >
        <Ionicons name="ios-arrow-up" size={30} color="#FFFFFF" style={{marginTop: 8}}/>
      </View>
    </SafeAreaView>
  )
}