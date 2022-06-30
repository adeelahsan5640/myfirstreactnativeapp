import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const FirstChallenge = () => {
  const myName = 'Adeel Ahsan'

  return (
    <View>
      <Text style={styles.textStyle1}>Welcome to Thapa Technical Channel</Text>
      <Text style={styles.textStyle2}>
        We love react native and I am a subscriber of Thapa Technical channel
      </Text>
      <Text style={styles.textStyle3}>Hii, My name is {myName}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  textStyle1: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: 30,
    marginLeft: 20,
  },
  textStyle2: {
    fontSize: 30,
    marginTop: 10,
    marginLeft: 20,
  },
  textStyle3: {
    marginTop: 10,

    marginLeft: 20,
  },
})

export default FirstChallenge
