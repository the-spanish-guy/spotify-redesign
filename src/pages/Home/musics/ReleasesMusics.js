import React from 'react'
import { View, FlatList, ImageBackground, Text } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

import { loadData } from '../../../service/api'
import styles from '../styles'

const artistas = loadData()

const ReleasesMusics = () => {
  return (
    <>
      <Text style={[styles.mpChild, styles.otherTitlesFocused]}>Lançamentos</Text>
      <FlatList
        data={artistas}
        keyExtractor={({ id }) => id}
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
    </>
  )
}

export default ReleasesMusics