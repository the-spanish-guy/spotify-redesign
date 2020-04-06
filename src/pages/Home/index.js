import React, { useState } from 'react'
import { View, Text, SafeAreaView, FlatList, ScrollView, Group, Image, ImageBackground } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { loadData, loadMusicasMaisOuvidas, loadPlayslistsSugeridas, loadPlayslistsSeguidas, loadPodcastsMaisOuvidas, loadPodcasts } from '../../service/api'

import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import Animated from 'react-native-reanimated'

const artistas = loadData()
const mais_ouvidas = loadMusicasMaisOuvidas()
const playlist_sugeridas = loadPlayslistsSugeridas()
const playlist_seguidas = loadPlayslistsSeguidas()
const podcasts_mais_ouvidas = loadPodcastsMaisOuvidas()
const podcasts = loadPodcasts()

export default function Home() {

  const [viewPodcast ,setViewPodcast] = useState(false)

  function viewMusicaOrPodcasts() {
    if(viewPodcast) {
      return (
        <>
          <Text style={[styles.mpChild, styles.otherTitlesFocused]}>Lançamentos</Text>
          <FlatList
            data={artistas}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <ImageBackground
                source={{
                  uri: item.ultimos_lancamentos.album.cover_album
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
                  <Text style={styles.releasesTitle}>
                    {
                      item.ultimos_lancamentos.album.nome_album
                    }
                  </Text>
                  <Text style={styles.releasesSubtitle}>{item.nome_artista}</Text>
                </LinearGradient>
              </ImageBackground>
            )}
          />

          <View style={styles.mostListenedToContainer}>
            <Text style={[styles.subTitleFocused, {marginLeft: 8}]}>Músicas mais escutadas</Text>

            {
              mais_ouvidas.map(
                ({ nome_musica, cover_album, nome_artista }) => 
                  <View style={styles.mostListenedToContainerChild}>
                    <Image source={{ uri: cover_album }} style={styles.mostListenedToImage}/>

                    <View style={{marginLeft: 20}}>
                      <Text style={styles.mostListenedToMusic}>{nome_musica}</Text>
                      <Text style={{color:"#ccc", fontWeight: "bold"}}>{nome_artista}</Text>
                    </View>
                  </View>
              )
            }
          </View>

          <Text style={{color: "#FFF", paddingBottom: 40, fontSize: 20, marginLeft: 20, marginTop: 40}}>Playlist para você</Text>
          <FlatList
              data={playlist_sugeridas}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <View>
                  <Image style={
                    {
                      width: 160,
                      height: 170,
                      borderRadius: 10,
                      marginHorizontal: 20,
                      backgroundColor: "#15a3bf",
                      paddingLeft: 10,
                    }
                  }
                  source={{ uri: item.cover_playlist }}
                  />
                  <Text style={{color:"#FFF", fontWeight: "bold", fontSize: 20, marginHorizontal: 20, marginTop: 10 , marginBottom: 30}}>
                    {item.nome_playlist}
                  </Text>
                </View>
              )}
            />
        </>
      )
    }

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

        <View style={styles.mostListenedToContainer}>
          <Text style={[styles.subTitleFocused, {marginLeft: 8}]}>Novos episódios de podcasts</Text>

          {
            podcasts.map(
              ({ nome_podcast, ultimo_lancamento }) => 
                <View style={styles.mostListenedToContainerChild}>
                  <Image source={{ uri: ultimo_lancamento.cover_ep }} style={styles.mostListenedToImage}/>

                  <View style={{marginLeft: 20}}>
                    <Text style={styles.mostListenedToMusic}>{ultimo_lancamento.nome_ep}</Text>
                    <Text style={{color:"#ccc", fontWeight: "bold"}}>{nome_podcast}</Text>
                  </View>
                </View>
            )
          }
        </View>

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