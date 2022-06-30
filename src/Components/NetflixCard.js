import { View, Text, Image, StyleSheet, Button, Linking } from 'react-native'
import React from 'react'
import {
  JosefinSans_100Thin,
  JosefinSans_200ExtraLight,
  JosefinSans_300Light,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  JosefinSans_700Bold,
  JosefinSans_100Thin_Italic,
  JosefinSans_200ExtraLight_Italic,
  JosefinSans_300Light_Italic,
  JosefinSans_400Regular_Italic,
  JosefinSans_500Medium_Italic,
  JosefinSans_600SemiBold_Italic,
  JosefinSans_700Bold_Italic,
} from '@expo-google-fonts/josefin-sans'
import { useFonts } from '@expo-google-fonts/josefin-sans'
import AppLoading from 'expo-app-loading'

const NetflixCard = () => {
  let [fontsLoad] = useFonts({
    JosefinSans_100Thin,
    JosefinSans_200ExtraLight,
    JosefinSans_300Light,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
    JosefinSans_100Thin_Italic,
    JosefinSans_200ExtraLight_Italic,
    JosefinSans_300Light_Italic,
    JosefinSans_400Regular_Italic,
    JosefinSans_500Medium_Italic,
    JosefinSans_600SemiBold_Italic,
    JosefinSans_700Bold_Italic,
  })
  if (!fontsLoad) {
    return <AppLoading />
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Netflix Card</Text>
      <View style={styles.box}>
        <Image
          style={styles.imgStyle}
          source={{
            uri: 'https://superstarsbio.com/wp-content/uploads/2021/03/Najwa-Nimri-poster-203x300.jpg.webp',
          }}
        />
        <View>
          <Text style={styles.card_heading}>Money Heist</Text>
          <Text style={styles.card_info}>
            Money Heist 2017 | 18+ | 5 Seasons | TV Thrillers Eight thieves take
            hostages and lock themselves in the Royal Mint of Spain as a
            criminal mastermind manipulates the police to carry out his plan.
          </Text>
        </View>
        <Button
          color='red'
          title='Watch Now'
          onPress={() =>
            Linking.openURL('https://www.netflix.com/pk/title/80192098')
          }
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    textTransform: 'uppercase',
    color: 'red',
    fontSize: 25,
    marginBottom: 20,
    fontFamily: 'JosefinSans_700Bold',
    letterSpacing: 4,
  },
  imgStyle: {
    height: undefined,
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,
  },
  box: {
    backgroundColor: 'white',
    width: 250,
    borderWidth: 3,
    borderRadius: 10,
    alignItems: 'center',
    padding: 5,
  },
  card_heading: {
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'JosefinSans_700Bold',
  },
  card_info: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10,
    fontFamily: 'JosefinSans_400Regular',
  },
})
export default NetflixCard
