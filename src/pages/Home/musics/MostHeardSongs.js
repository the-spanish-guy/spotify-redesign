import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'

import styles from '../styles'

import { loadMusicasMaisOuvidas } from '../../../service/api'
import { useNavigation } from '@react-navigation/native'

const mais_ouvidas = loadMusicasMaisOuvidas()

import { loadData } from '../../../service/api'
const musics = loadData()

const MostHeardSongs = () => {
  const navigation = useNavigation()
  
  function navigateToMusic(idArtistas, nome_album, nome_musica) {
    
    const data = {
      idArtistas,
      nome_album,
      nome_musica
    }
    console.log('teste: ', data)
    
    navigation.navigate('Musics', { data })
  }

  return (
    <View style={styles.mostListenedToContainer}>
      <Text style={[styles.subTitleFocused, {marginLeft: 8}]}>Músicas mais escutadas</Text>

      {
        mais_ouvidas.map(
          ({ nome_musica, cover_album, nome_artista, idArtistas, nome_album }) =>
          <TouchableWithoutFeedback
            onPress={() => navigateToMusic(idArtistas, nome_album, nome_musica)}
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