import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import styles from'./styles'
import { LinearGradient } from 'expo-linear-gradient'

export default function Artist() {
  return(
    <ScrollView scrollEnabled={true} style={styles.container}>
      <View style={{
        width: "100%",
        height: 380,
        
      }}>
        <Image
          style={styles.imgCoverArtist}
          source={{
            uri: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F02%2Fbad-bunny-yhlqmdlg-album-announcement-spotify-gallery-5.jpg?quality=95&w=1170&cbr=1&q=90&fit=max'
          }}
        />
        <View style={styles.coverArtistsIcons}>
          <Ionicons name="ios-arrow-down" size={24} color="#FFFFFF"/>

          <View style={{flexDirection: "row",}}>
            <View style={{
              // badge
              width: 70,
              height: 28,
              backgroundColor: "rgba(255, 255, 255, .4)",
              // opacity: .2,
              borderRadius: 6,
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "flex-end",
              marginRight:10
            }}>
              <Text style={{color: "#FFFFFF", fontWeight: "bold"}}>Seguir +</Text>
            </View>
            <Ionicons name="md-more" size={24} color="#FFFFFF"/>
          </View>

        </View>
      </View>
      
      <View
      // scrollEnabled={true}
        style={{
           marginTop: -60,
            height: "100%",
            backgroundColor: "#121315",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40
       }}
      >
        <Text style={{color: "#FFFFFF", alignSelf: "center", fontSize: 24, fontWeight: "bold", marginTop: 10, marginBottom: 10}}>Bad Bunny</Text>
        <View>
          <Text style={{color: "#FFFFFF", fontWeight: "bold", fontSize: 20, marginHorizontal: 20, marginBottom: 20}}>Álbuns</Text>
          <View style={{
            flexDirection: "row",
            flexWrap: "wrap",
            // paddingHorizontal: 40
          }}>
            <View
              style={{
                width: 150,
                height: 160,
                // /backgroundColor: "#F00",
                // borderRadius: 10
                alignItems: "center",
                marginHorizontal: 20,
                marginBottom: 30
                
              }}
              >
              <Image
                source={{
                  uri: 'https://i.scdn.co/image/ab67616d0000b273548f7ec52da7313de0c5e4a0'
                }}
                style={{
                  width: "100%",
                  height: "90%",
                  borderRadius: 10
                }}
              />
              {/* aqui dentro irá ir uma Image, para mostrar os álbuns */}
              <Text style={{
                color: "#FFFFFF",
                fontWeight: "bold",
                marginTop: 2
              }}>YHLQMDLG</Text>
              
            </View>

            <View
              style={{
                width: 150,
                height: 160,
                // /backgroundColor: "#F00",
                // borderRadius: 10
                alignItems: "center",
                marginHorizontal: 20
                
              }}
              >
              <Image
                source={{
                  uri: 'https://i.scdn.co/image/ab67616d0000b273548f7ec52da7313de0c5e4a0'
                }}
                style={{
                  width: "100%",
                  height: "90%",
                  borderRadius: 10
                }}
              />
              {/* aqui dentro irá ir uma Image, para mostrar os álbuns */}
              <Text style={{
                color: "#FFFFFF",
                fontWeight: "bold",
                marginTop: 2
              }}>YHLQMDLG</Text>
              
            </View>

            <View
              style={{
                width: 150,
                height: 160,
                // /backgroundColor: "#F00",
                // borderRadius: 10
                alignItems: "center",
                marginHorizontal: 20
                
              }}
              >
              <Image
                source={{
                  uri: 'https://i.scdn.co/image/ab67616d0000b273548f7ec52da7313de0c5e4a0'
                }}
                style={{
                  width: "100%",
                  height: "90%",
                  borderRadius: 10
                }}
              />
              {/* aqui dentro irá ir uma Image, para mostrar os álbuns */}
              <Text style={{
                color: "#FFFFFF",
                fontWeight: "bold",
                marginTop: 2
              }}>YHLQMDLG</Text>
              
            </View>
          </View>

          <View>
            <Text
              style={{
                marginTop: 60,
                marginBottom: 20,
                fontWeight: "bold",
                color: "#FFFFFF",
                fontSize: 20,
                marginHorizontal: 20
              }}
            >Singles e EPs</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginHorizontal: 20,
                marginBottom: 32
              }}
            >
              <Image
                source={{
                  uri: 'https://i.scdn.co/image/ab67616d0000b273548f7ec52da7313de0c5e4a0'
                }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                }}
              />
                <View style={{left: -20}}>
                  <Text style={{color: "#FFFFFF",fontWeight: "bold", fontSize: 16}}>Si Veo a Tu Mamá</Text>
                  <Text style={{color: "#b0b0b1", fontWeight: "bold"}}>Bad Bunny</Text>
                </View>
                
                <Ionicons name="ios-heart-empty" size={30} color="#b0b0b1" />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginHorizontal: 20,
                marginBottom: 32
              }}
            >
              <Image
                source={{
                  uri: 'https://i.scdn.co/image/ab67616d0000b273548f7ec52da7313de0c5e4a0'
                }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                }}
              />
                <View style={{left: -20}}>
                  <Text style={{color: "#FFFFFF",fontWeight: "bold", fontSize: 16}}>Si Veo a Tu Mamá</Text>
                  <Text style={{color: "#b0b0b1", fontWeight: "bold"}}>Bad Bunny</Text>
                </View>
                
                <Ionicons name="ios-heart-empty" size={30} color="#b0b0b1" />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginHorizontal: 20,
                marginBottom: 32
              }}
            >
              <Image
                source={{
                  uri: 'https://i.scdn.co/image/ab67616d0000b273548f7ec52da7313de0c5e4a0'
                }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                }}
              />
                <View style={{left: -20}}>
                  <Text style={{color: "#FFFFFF",fontWeight: "bold", fontSize: 16}}>Si Veo a Tu Mamá</Text>
                  <Text style={{color: "#b0b0b1", fontWeight: "bold"}}>Bad Bunny</Text>
                </View>
                
                <Ionicons name="ios-heart-empty" size={30} color="#b0b0b1" />
            </View>

          </View>
        </View>
      </View>
    </ScrollView>
  )
}