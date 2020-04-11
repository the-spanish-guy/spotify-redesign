import React from 'react'
import { View, Image, Text, FlatList } from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import styles from '../styles'

import { loadPodcasts } from '../../../service/api'

const podcasts = loadPodcasts()

const DownloadedPodcasts = () => {
  return (
    <>
    <Text style={{
            color: "#FFF",
            paddingBottom: 40,
            fontSize: 20,
            marginLeft: 20,
            marginTop: 40
            }}>Downloads</Text>
          <FlatList
              data={podcasts}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
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
                    <Image
                      style={
                        {
                          width: 60,
                          height: 60,
                          borderRadius: 10,
                          backgroundColor: "#15a3bf",
                        }}
                        source={{
                          uri: item.cover_podcast
                        }}
                    />
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
                      }}>Desenhar para deses...</Text>
                      <Text style={{
                        color:"#858585",
                        fontSize: 12,
                        marginHorizontal: 20,
                        }}>{item.nome_podcast}</Text>
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
            />
    </>
  )
}

export default DownloadedPodcasts