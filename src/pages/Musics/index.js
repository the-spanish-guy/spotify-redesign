import React from 'react'
import { View, Text, SafeAreaView, Image, ProgressBarAndroid, TouchableWithoutFeedback } from 'react-native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import { useRoute, useNavigation } from '@react-navigation/native'

import { loadData } from '../../service/api'

export default function Musics() {
  const route = useRoute()

  const data = loadData()
  const { idArtistas, nome_album, nome_musica } = route.params.data
  const  artistData = data.find(e => e.idArtistas === idArtistas)
  const albumData = artistData.albums.find(a => a.nome_album === nome_album)
  const singleData = artistData.single.find(a => a.nome_single === nome_musica)
  console.log('TESTTSTETS: ',singleData)
  const dataToShow = {
    nome_musica,
    cover_album: albumData ? albumData.cover_album : singleData.cover_single,
    nome_album,
    nome_artista: artistData.nome_artista
  }
    
  const navigation = useNavigation()

  function navigateBack() {
    navigation.goBack()
  }

  function navigateToAlbum(id, album, musica) {
    console.log('teste2')
    const albumData = {
      id,
      album: album ? album : musica
    }
    navigation.navigate('Album', { albumData })
  }

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.barActions}>
        <Ionicons onPress={navigateBack} name="ios-arrow-down" color="#FFF" size={20} />
          <TouchableWithoutFeedback onPress={() => navigateToAlbum( idArtistas, dataToShow.nome_album, dataToShow.nome_musica )}>
            <Text style={{color:"#FFF", textAlign: "center"}}>
              Tocando do Álbum {"\n"}
                {dataToShow.nome_album ? dataToShow.nome_album : dataToShow.nome_musica}
            </Text>
          </TouchableWithoutFeedback>
        <Ionicons name="md-more" color="#FFF" size={20} />
      </View>

      <View
        style={{
          width: "80%",
          height: "37%",
          flexDirection: "column",
          alignSelf: "center",
          marginTop: 40
        }} >
        <Image source={{uri: dataToShow.cover_album}}
        style={{
          width: "100%",
          height: "100%"
        }}
        />
        <LinearGradient colors={['transparent', 'transparent', '#121315']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{width: "100%", height: "100%", marginTop: "-100%"}}
        ></LinearGradient>
        <Text style={{color: "#FFFFFF", marginTop: "-28%", marginHorizontal: 20, fontWeight: "bold", fontSize: 20}}>{dataToShow.nome_musica}</Text>
        <Text style={{color: "#b0b0b1", marginHorizontal: 20, fontWeight: "bold"}}>{dataToShow.nome_artista}</Text>
      </View>

      <View style={{
        width: "80%",
        marginTop: 40,
        alignSelf: "center"
      }}>
        <ProgressBarAndroid
          style={{justifyContent: "space-evenly", width: "100%"}}
          styleAttr="Horizontal" indeterminate={false} progress={0.8} color="#1db954" />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: 160,
              alignSelf: "center",
              marginTop: 80
            }}
          >
            <Ionicons name="ios-skip-backward" color="#FFF" size={30} />
            <Ionicons name="ios-pause" color="#FFF" size={30} />
            <Ionicons name="ios-skip-forward" color="#FFF" size={30} />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
              alignSelf: "center",
              marginTop: 60,
              marginBottom: 70
            }}
          >
            <MaterialIcons name="devices" color="#1db954" size={30} />
            <Ionicons name="ios-shuffle" color="#656566" size={30} />
            <Ionicons name="md-repeat" color="#656566" size={30} />
            <Ionicons name="ios-heart-empty" color="#1db954" size={30} />
          </View>
      </View>

      <View
       style={{
        backgroundColor: "#272727",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        height: 80,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      }}
      >
        <Ionicons name="ios-arrow-up" size={30} color="#FFFFFF" style={{marginTop: 8}}/>
      </View>
    </SafeAreaView>
  )
}