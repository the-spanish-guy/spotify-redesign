import React from 'react'
import { View, Text, SafeAreaView, FlatList, ScrollView, Group, Image } from 'react-native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import { useRoute, useNavigation } from '@react-navigation/native'

import { loadData } from '../../service/api'

export default function Home() {
  const navigation = useNavigation()
  const route = useRoute()
  const data = loadData()
  const { id, album } = route.params.albumData

  const getDataArtist = data.find(artistName => artistName.idArtistas === id ? artistName.nome_artista: '')
  const getDataAlbum = getDataArtist.albums.map(
    a => {
      if(a.nome_album !== album) return
      const show = {
        coverAlbum: a.cover_album,
        musics: a.musicas
      }
      return show
  })

  const dataToshow = {
    nome_artista: getDataArtist.nome_artista,
    album,
    cover_album: getDataAlbum[0].coverAlbum,
    musicas: getDataAlbum[0].musics
  }

  console.log('teste album: ', dataToshow)

  function navigteBack() {
    navigation.goBack()
  }

  return(
    <SafeAreaView style={styles.container}>
      <ScrollView
        scrollEnabled={true}
      >

        <View style={styles.coverAlbum} >

          <Image source={{uri: dataToshow.cover_album}}
            style={styles.imgTopBar}
          />
          <Text style={{color: "#FFFFFF", marginTop: 28, marginHorizontal: 20, fontWeight: "bold", fontSize: 20}}>{dataToshow.album}</Text>
          <Text style={{color: "#b0b0b1", marginHorizontal: 20, fontWeight: "bold"}}>{dataToshow.nome_artista}</Text>

        </View>
        <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
              alignSelf: "center",
              marginBottom: 70,
              paddingHorizontal: 20
            }}
          >
            <View style={{flexDirection: "row", width: 100, justifyContent: "space-between"}}>
              <Ionicons name="ios-heart-empty" color="#1db954" size={30} />
              <MaterialIcons name="devices" color="#b0b0b1" size={30} />
            </View>
            <Ionicons name="md-download" size={24} color="#1db954" />
          </View>

          {/* <View 
            style={{
              height: 80,
              flexDirection: "row",
              paddingHorizontal: 24,
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <View>
              <Text style={{color: "#FFFFFF",fontWeight: "bold", fontSize: 20}}>Si Veo a Tu Mamá</Text>
              <Text style={{color: "#b0b0b1", fontWeight: "bold"}}>Bad Bunny</Text>
            </View>
            
            <Ionicons name="ios-more" size={24} color="#FFFFFF" />
          </View> */}

          {
            dataToshow.musicas.map(
              ({ nome, feat, id }) =>
                  <View 
                    style={{
                      height: 80,
                      flexDirection: "row",
                      paddingHorizontal: 24,
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}
                    key={id}
                  >
                    <View>
                      <Text style={{color: "#FFFFFF",fontWeight: "bold", fontSize: 20}}>{nome}</Text>
                      <Text style={{color: "#b0b0b1", fontWeight: "bold"}}>{feat}</Text>
                    </View>
                   <Ionicons name="ios-more" size={24} color="#FFFFFF" />
                </View>
              )
            }
            

          {/* <View 
            style={{
              height: 80,
              flexDirection: "row",
              paddingHorizontal: 24,
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <View>
              <Text style={{color: "#FFFFFF",fontWeight: "bold", fontSize: 20}}>Pero Ya No</Text>
              <Text style={{color: "#b0b0b1", fontWeight: "bold"}}>Bad Bunny</Text>
            </View>
            
            <Ionicons name="ios-more" size={24} color="#FFFFFF" />
          </View>

          <View 
            style={{
              height: 80,
              flexDirection: "row",
              paddingHorizontal: 24,
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <View>
              <Text style={{color: "#FFFFFF",fontWeight: "bold", fontSize: 20}}>la Santa</Text>
              <Text style={{color: "#b0b0b1", fontWeight: "bold"}}>Bad Bunny</Text>
            </View>
            
            <Ionicons name="ios-more" size={24} color="#FFFFFF" />
          </View>

          <View 
            style={{
              height: 80,
              flexDirection: "row",
              paddingHorizontal: 24,
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <View>
              <Text style={{color: "#FFFFFF",fontWeight: "bold", fontSize: 20}}>Yo Perreo Sola</Text>
              <Text style={{color: "#b0b0b1", fontWeight: "bold"}}>Bad Bunny</Text>
            </View>
            
            <Ionicons name="ios-more" size={24} color="#FFFFFF" />
          </View> */}

      </ScrollView>
    </SafeAreaView>
  )
}