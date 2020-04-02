import React from 'react'
import { View, Text, SafeAreaView, FlatList, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'

export default function Home() {
  return(
    <SafeAreaView style={styles.container}>
    <ScrollView
      scrollEnabled={true}
    >
      <LinearGradient colors={['#D1379C', '#9B358B', '#71337E']}
        style={styles.topBar}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.txtContainer}>
          <Text style={[styles.txt, { fontSize: 30, paddingBottom: 10 }]}>Suas playlist</Text>
          <Text style={[styles.txt, { fontSize: 16 }]}>Baila Reggaeton</Text>
        </View>
        <View style={styles.txtContainer}>
          <Ionicons name="ios-settings" size={28} color="#FFFFFF" />
        </View>
      </LinearGradient>

      <View style={styles.mpContainer}>
        <View style={styles.mpTitle}>
          <Text style={styles.musicas}>Músicas</Text>
          <Text style={styles.podcasts}>Podcasts</Text>
        </View>
        
        <Text style={{color:"#FFFFFF", paddingBottom: 12, fontSize: 20, marginLeft: 20}}>Lançamentos</Text>
        <FlatList
          data={[1, 2, 3, 4, 5, 6]}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={() => (
            <View style={
              {
                width: 140,
                height: 170,
                borderRadius: 10,
                marginHorizontal: 10,
                backgroundColor: "#15a3bf",
                justifyContent: "flex-end",
                paddingBottom: 10,
                paddingLeft: 10
              }
            }>
              <Text style={{color:"#FFF", fontWeight: "bold", fontSize: 20}}>After hours</Text>
              <Text style={{color:"#ccc", fontWeight: "bold"}}>The Weekend</Text>
            </View>
          )}
        />
        
          <View style={{borderLeftWidth: 10, borderLeftColor: "#00b545", width: "100%", height: 200, marginTop: 80}}>
          <Text style={{fontWeight: "bold", color:"#FFFFFF", fontSize:26, marginLeft: 8}}>Músicas mais escutadas</Text>
          <View style={{padding: 20, flexDirection: "row", alignItems: "center"}}>
            <View style={{width: 80, height: 80, borderRadius: 8, backgroundColor: "#FFF"}}>
            </View>
            <View style={{marginLeft: 60}}>
              <Text style={{color:"#FFF", fontWeight: "bold", fontSize: 20}}>After hours</Text>
              <Text style={{color:"#ccc", fontWeight: "bold"}}>The Weekend</Text>
            </View>
          </View>

          <View style={{padding: 20, flexDirection: "row", alignItems: "center"}}>
            <View style={{width: 80, height: 80, borderRadius: 8, backgroundColor: "#FFF"}}>
            </View>
            <View style={{marginLeft: 60}}>
              <Text style={{color:"#FFF", fontWeight: "bold", fontSize: 20}}>After hours</Text>
              <Text style={{color:"#ccc", fontWeight: "bold"}}>The Weekend</Text>
            </View>
          </View>

          <View style={{padding: 20, flexDirection: "row", alignItems: "center"}}>
            <View style={{width: 80, height: 80, borderRadius: 8, backgroundColor: "#FFF"}}>
            </View>
            <View style={{marginLeft: 60}}>
              <Text style={{color:"#FFF", fontWeight: "bold", fontSize: 20}}>After hours</Text>
              <Text style={{color:"#ccc", fontWeight: "bold"}}>The Weekend</Text>
            </View>
          </View>

          <View style={{padding: 20, flexDirection: "row", alignItems: "center"}}>
            <View style={{width: 80, height: 80, borderRadius: 8, backgroundColor: "#FFF"}}>
            </View>
            <View style={{marginLeft: 60}}>
              <Text style={{color:"#FFF", fontWeight: "bold", fontSize: 20}}>After hours</Text>
              <Text style={{color:"#ccc", fontWeight: "bold"}}>The Weekend</Text>
            </View>
          </View>

          <View style={{padding: 20, flexDirection: "row", alignItems: "center"}}>
            <View style={{width: 80, height: 80, borderRadius: 8, backgroundColor: "#FFF"}}>
            </View>
            <View style={{marginLeft: 60}}>
              <Text style={{color:"#FFF", fontWeight: "bold", fontSize: 20}}>After hours</Text>
              <Text style={{color:"#ccc", fontWeight: "bold"}}>The Weekend</Text>
            </View>
          </View>
        </View>
      </View>

    </ScrollView>
    </SafeAreaView>
  )
}