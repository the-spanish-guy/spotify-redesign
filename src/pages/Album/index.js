import React from 'react'
import { View, Text, SafeAreaView, FlatList, ScrollView, Group, Image } from 'react-native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'

export default function Home() {
  return(
    <SafeAreaView style={styles.container}>
      <ScrollView
        scrollEnabled={true}
      >

        <View style={styles.coverAlbum} >

          <Image source={{uri:'https://i.scdn.co/image/ab67616d0000b273548f7ec52da7313de0c5e4a0'}}
            style={styles.imgTopBar}
          />
          <Text style={{color: "#FFFFFF", marginTop: 28, marginHorizontal: 20, fontWeight: "bold", fontSize: 20}}>A Tu Merced</Text>
          <Text style={{color: "#b0b0b1", marginHorizontal: 20, fontWeight: "bold"}}>Bad Bunny</Text>

        </View>
        <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
              alignSelf: "center",
              marginBottom: 70,
              paddingHorizontal: 20
            }}
          >
            <View style={{flexDirection: "row", width: 100, justifyContent: "space-between"}}>
              <Ionicons name="ios-heart-empty" color="#1db954" size={30} />
              <MaterialIcons name="devices" color="#b0b0b1" size={30} />
            </View>
            <Ionicons name="md-download" size={24} color="#1db954" />
          </View>

          <View 
            style={{
              height: 80,
              flexDirection: "row",
              paddingHorizontal: 24,
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <View>
              <Text style={{color: "#FFFFFF",fontWeight: "bold", fontSize: 20}}>Si Veo a Tu Mamá</Text>
              <Text style={{color: "#b0b0b1", fontWeight: "bold"}}>Bad Bunny</Text>
            </View>
            
            <Ionicons name="ios-more" size={24} color="#FFFFFF" />
          </View>

          <View 
            style={{
              height: 80,
              flexDirection: "row",
              paddingHorizontal: 24,
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <View>
              <Text style={{color: "#FFFFFF",fontWeight: "bold", fontSize: 20}}>La Dificil</Text>
              <Text style={{color: "#b0b0b1", fontWeight: "bold"}}>Bad Bunny</Text>
            </View>
            
            <Ionicons name="ios-more" size={24} color="#FFFFFF" />
          </View>

          <View 
            style={{
              height: 80,
              flexDirection: "row",
              paddingHorizontal: 24,
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <View>
              <Text style={{color: "#FFFFFF",fontWeight: "bold", fontSize: 20}}>Pero Ya No</Text>
              <Text style={{color: "#b0b0b1", fontWeight: "bold"}}>Bad Bunny</Text>
            </View>
            
            <Ionicons name="ios-more" size={24} color="#FFFFFF" />
          </View>

          <View 
            style={{
              height: 80,
              flexDirection: "row",
              paddingHorizontal: 24,
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <View>
              <Text style={{color: "#FFFFFF",fontWeight: "bold", fontSize: 20}}>la Santa</Text>
              <Text style={{color: "#b0b0b1", fontWeight: "bold"}}>Bad Bunny</Text>
            </View>
            
            <Ionicons name="ios-more" size={24} color="#FFFFFF" />
          </View>

          <View 
            style={{
              height: 80,
              flexDirection: "row",
              paddingHorizontal: 24,
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <View>
              <Text style={{color: "#FFFFFF",fontWeight: "bold", fontSize: 20}}>Yo Perreo Sola</Text>
              <Text style={{color: "#b0b0b1", fontWeight: "bold"}}>Bad Bunny</Text>
            </View>
            
            <Ionicons name="ios-more" size={24} color="#FFFFFF" />
          </View>

      </ScrollView>
    </SafeAreaView>
  )
}