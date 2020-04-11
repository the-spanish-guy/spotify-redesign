import React from 'react'
import { View, Image, Text } from 'react-native'

import styles from '../styles'

import { loadPodcasts } from '../../../service/api'

const podcasts = loadPodcasts()

const NewsPodcasts = () => {
  return (
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
  )
}

export default NewsPodcasts