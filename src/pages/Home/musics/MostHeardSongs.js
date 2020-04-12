import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'

import styles from '../styles'

import { loadMusicasMaisOuvidas } from '../../../service/api'
import { useNavigation } from '@react-navigation/native'

const mais_ouvidas = loadMusicasMaisOuvidas()


const MostHeardSongs = () => {
  const navigation = useNavigation()
  
  function navigateToMusic(nome_musica, cover_album, nome_artista, nome_album) {
    console.log('teste')
    const dataMusics ={
      nome_musica,
      cover_album,
      nome_artista,
      nome_album
    }
    navigation.navigate('Musics', { dataMusics })
  }

  return (
    <View style={styles.mostListenedToContainer}>
      <Text style={[styles.subTitleFocused, {marginLeft: 8}]}>Músicas mais escutadas</Text>

      {
        mais_ouvidas.map(
          ({ nome_musica, cover_album, nome_artista, nome_album }) =>
          <TouchableWithoutFeedback
            onPress={() => navigateToMusic(nome_musica, cover_album, nome_artista, nome_album)}
          >
            <View style={styles.mostListenedToContainerChild}>
              <Image source={{ uri: cover_album }} style={styles.mostListenedToImage}/>

              <View style={{marginLeft: 20}}>
                <Text style={styles.mostListenedToMusic}>{nome_musica}</Text>
                <Text style={{color:"#ccc", fontWeight: "bold"}}>{nome_artista}</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )
      }
    </View>
  )
}

export default MostHeardSongs