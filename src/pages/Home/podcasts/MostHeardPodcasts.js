import React from 'react'
import { View, FlatList, ImageBackground, Text, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { loadPodcasts, loadPodcastsMaisOuvidas } from '../../../service/api'

import styles from '../styles'

const podcasts_mais_ouvidas = loadPodcastsMaisOuvidas()
const podcasts = loadPodcasts()

const MostHeardPodcasts = () => {
  return (
    <>
      <Text style={[styles.mpChild, styles.otherTitlesFocused]}>Podcasts mais escutados</Text>
      <FlatList
        data={podcasts_mais_ouvidas}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <ImageBackground
            source={{
              uri: item.cover_ep
            }}
            style={styles.releasesBackground}
            imageStyle={{
              borderRadius: 10,
            }}
          >
            <LinearGradient colors={['transparent', 'rgba(18, 19, 21, 0.2)', 'rgba(18, 19, 21, 0.7)', 'rgba(18, 19, 21, 1)']}
            style={styles.releasesBackgroundGradient}
            start={{ x: 1, y: 0 }}
            end={{ x: 1, y: 1 }}
            >
              <Text style={styles.releasesSubtitle}>{item.nome_podcast}</Text>
            </LinearGradient>
          </ImageBackground>
        )}
      />

      <Text style={
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
        data={podcasts}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View
            style={styles.podcastContainer}
            >
              <Image style={styles.podcastImage}
              source={{ uri: item.cover_podcast}}
            />

              
            {/* <View >
            </View> */}
            <Text style={styles.podcastName}>{item.nome_podcast}</Text>
          </View>
        )}
      />
    </>
  )
}
export default MostHeardPodcasts