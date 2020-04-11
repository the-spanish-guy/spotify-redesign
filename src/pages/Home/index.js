import React, { useState } from 'react'
import { View, Text, SafeAreaView, FlatList, ScrollView, Group, Image, ImageBackground, TouchableWithoutFeedback } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import { loadData, loadMusicasMaisOuvidas, loadPlayslistsSugeridas, loadPlayslistsSeguidas, loadPodcastsMaisOuvidas, loadPodcasts } from '../../service/api'

import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'

import MostHeardSongs from './musics/MostHeardSongs'
import ReleasesMusics from './musics/ReleasesMusics'
import PlaylistsMusics from './musics/PlaylistsMusics'

import MostHeardPodcasts from './podcasts/MostHeardPodcasts'
import NewsPodcasts from './podcasts/NewsPodcasts'
import DownloadedPodcasts from './podcasts/DownloadedPodcasts'

const artistas = loadData()
const mais_ouvidas = loadMusicasMaisOuvidas()
const playlist_sugeridas = loadPlayslistsSugeridas()
const playlist_seguidas = loadPlayslistsSeguidas()
const podcasts_mais_ouvidas = loadPodcastsMaisOuvidas()
const podcasts = loadPodcasts()

export default function Home() {

  const navigation = useNavigation()
  
  const [viewPodcast ,setViewPodcast] = useState(false)

  function viewMusicaOrPodcasts() {
    if(viewPodcast) {
      return (
        <>
          <ReleasesMusics />
          <MostHeardSongs />
          <PlaylistsMusics />
        </>
      )
    }

    return (
      <>
        <MostHeardPodcasts />
        <NewsPodcasts />
        <DownloadedPodcasts />
      </>
    )
  }

  return(
    <SafeAreaView style={styles.container}>
      <ScrollView
        scrollEnabled={true}
      >
        <FlatList
          style={styles.flatImageContainer}
          data={playlist_seguidas}
          keyExtractor={(item, index) => 'key' + index }
          horizontal
          scrollEnabled={true}
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <ImageBackground
              source={{ uri: item.cover_playlist }}
              style={styles.topBarImage}
              imageStyle={{
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20
              }}
            >
                <LinearGradient colors={['rgba(18, 19, 21, 0.2)', 'rgba(18, 19, 21, 0.4)', 'rgba(18, 19, 21, 0.8)']}
                  style={styles.topBar}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                >
                  <View style={styles.txtContainer}>
                    <Text style={[styles.subTitleFocused, styles.txt]}>Suas playlist</Text>
                    <Text style={styles.subTxt}>{item.nome_playlist}</Text>
                  </View>
                  <View style={styles.txtContainer}>
                    <Ionicons name="ios-settings" size={28} color="#FFFFFF" />
                  </View>
                </LinearGradient>
              </ImageBackground>
          )}
        />

        <View style={styles.mpContainer}>
          <View style={styles.mpTitle}>
            <Text style={ viewPodcast ? styles.subTitleFocused : styles.subTitleDefocused} onPress={() => setViewPodcast(true)}>Músicas</Text>
            <Text style={[ viewPodcast ? styles.subTitleDefocused : styles.subTitleFocused, styles.podcasts]} onPress={() => setViewPodcast(false)}>Podcasts</Text>
          </View>
          
          {
            viewMusicaOrPodcasts()
          }
          
            
          
          
        
          

          {/* Ativar quando tiver podcasts */}
          
        
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}