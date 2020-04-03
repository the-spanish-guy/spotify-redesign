import React from 'react'
import { View, Text, SafeAreaView, FlatList, ScrollView, Group } from 'react-native'
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
          
          <Text style={
            {
              color:"#FFFFFF",
              paddingBottom: 12,
              fontSize: 20,
              marginLeft: 20
            }
          }>Lançamentos</Text>
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

          {/* Ativar quando tiver podcasts */}
          {/* <Text style={
            {
              color: "#FFF",
              fontWeight: "bold",
              fontSize: 28,
              marginHorizontal: 20,
              marginTop: 40,
              marginBottom: 40,
            }
          }>Programas</Text>
          <FlatList
            data={[1, 2, 3, 4, 5, 6]}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={() => (
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                >
                <View style={
                  {
                    marginHorizontal: 10,
                    width: 170,
                    height: 170,
                    borderRadius: 100,
                    backgroundColor: "#15a3bf",
                    justifyContent: "flex-end",
                    paddingLeft: 10,
                  }
                }>
                </View>
                <Text style={
                  {
                    marginTop: 10,
                    color:"#FFF",
                    fontWeight: "bold",
                    fontSize: 20,

                  }
                }>After hours</Text>
              </View>
            )}
          /> */}
          
          <View style={{borderLeftWidth: 10, borderLeftColor: "#1db954", width: "100%", marginTop: 80}}>
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
        
        <Text style={{color: "#FFF", paddingBottom: 40, fontSize: 20, marginLeft: 20, marginTop: 40}}>Playlist para você</Text>
        <FlatList
            data={[1, 2, 3, 4, 5, 6]}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={() => (
              <View>
                <View style={
                  {
                    width: 160,
                    height: 170,
                    borderRadius: 10,
                    marginHorizontal: 20,
                    backgroundColor: "#15a3bf",
                    paddingLeft: 10,
                  }
                }>
                </View>
                <Text style={{color:"#FFF", fontWeight: "bold", fontSize: 20, marginHorizontal: 20, marginTop: 10 , marginBottom: 30}}>After hours</Text>
              </View>
            )}
          />

          {/* Ativar quando tiver podcasts */}
          {/* <Text style={{
            color: "#FFF",
            paddingBottom: 40,
            fontSize: 20,
            marginLeft: 20,
            marginTop: 40
            }}>Downloads</Text>
          <FlatList
              data={[1, 2, 3, 4, 5, 6]}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={() => (
                <View
                  style={{
                    width: 240,
                    height: 120,
                    backgroundColor: "#272727",
                    marginHorizontal: 20,
                    borderRadius: 16,
                    padding: 12,
                    marginBottom: 20
                  }}
                >
                  <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    height: 64,
                  }}
                  >
                    <View style={
                      {
                        width: 60,
                        height: 60,
                        borderRadius: 10,
                        backgroundColor: "#15a3bf",
                      }
                    }>
                    </View>
                    <View
                    style={{
                      flexDirection: "column"
                    }}
                    >
                      <Text style={{
                        color:"#FFF",
                        fontWeight: "bold",
                        fontSize: 16,
                        marginHorizontal: 20,
                        marginTop: 10,
                      }}>Desenhar para desestresar</Text>
                      <Text style={{
                        color:"#858585",
                        fontSize: 12,
                        marginHorizontal: 20,
                        }}>Yellow Cast</Text>
                      </View>
                  </View>
                  <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 4,
                    // icones
                  }}>
                    <Ionicons name="ios-play-circle" size={24} color="#FFF" />
                    <Ionicons name="md-download" size={24} color="#1db954" />
                  </View>

                </View>
              )}
            /> */}
        
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}