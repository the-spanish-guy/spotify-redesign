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
  const getDataAlbum = getDataArtist.albums.find(a => a.nome_album === album)
  const getDataSingle = getDataArtist.single.find(s => s.nome_single === album)

  console.log('teste album: ', getDataAlbum)
  const dataToShow = {
    nome_artista: getDataArtist.nome_artista,
    album,
    cover_album: getDataAlbum ? getDataAlbum.cover_album: getDataSingle.cover_single,
    musicas: getDataAlbum ? getDataAlbum.musicas : getDataSingle.nome_single
  }
console.log('tupo: ', typeof dataToShow.musicas)

  function navigateBack() {
    console.log('asadsdgsdtf')
    navigation.goBack()
  }

  function renderAlbum() {
    if(Array.isArray(dataToShow.musicas)) {
      return (
        dataToShow.musicas.map(
          (item) =>
              <View 
                style={{
                  height: 80,
                  flexDirection: "row",
                  paddingHorizontal: 24,
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
                key={item.id}
              >
                <View>
                  <Text style={{color: "#FFFFFF",fontWeight: "bold", fontSize: 20}}>{item.nome}</Text>
                  <Text style={{color: "#b0b0b1", fontWeight: "bold"}}>{item.feat}</Text>
                </View>
              <Ionicons name="ios-more" size={24} color="#FFFFFF" />
            </View>
          )
      )
    }

    return (
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
            <Text style={{color: "#FFFFFF",fontWeight: "bold", fontSize: 20}}>{dataToShow.musicas}</Text>
            <Text style={{color: "#b0b0b1", fontWeight: "bold"}}>{dataToShow.nome_artista}</Text>
          </View>
        <Ionicons name="ios-more" size={24} color="#FFFFFF" />
      </View>
    )
  }

  return(
    <SafeAreaView style={styles.container}>
      <ScrollView
        scrollEnabled={true}
      >

        <Ionicons style={styles.returnIcon} onPress={navigateBack} name="ios-arrow-down" size={24} color="#FFFFFF" />

        <View style={styles.coverAlbum} >

          <Image source={{uri: dataToShow.cover_album}}
            style={styles.imgTopBar}
          />
          <Text style={{color: "#FFFFFF", marginTop: 28, marginHorizontal: 20, fontWeight: "bold", fontSize: 20}}>{dataToShow.album}</Text>
          <Text style={{color: "#b0b0b1", marginHorizontal: 20, fontWeight: "bold"}}>{dataToShow.nome_artista}</Text>

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
            renderAlbum()
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