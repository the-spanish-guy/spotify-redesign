import React from 'react'
import { View, Image, FlatList, Text } from 'react-native'

import { loadPlayslistsSugeridas } from '../../../service/api'
import styles from '../styles'

const playlist_sugeridas = loadPlayslistsSugeridas()
const PlaylistsMusics = () => {
  return (
    <>
      <Text style={{color: "#FFF", paddingBottom: 40, fontSize: 20, marginLeft: 20, marginTop: 40}}>Playlist para você</Text>
      <FlatList
        data={playlist_sugeridas}
        keyExtractor={(item) => item.id}
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

export default PlaylistsMusics