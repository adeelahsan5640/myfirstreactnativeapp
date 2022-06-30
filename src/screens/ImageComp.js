import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const ImageComp = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>This is Image</Text>
      <Image
        style={styles.imageStyle}
        source={require('../../assets/pic1.jpg')}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  viewStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    margin: 30,
    fontSize: 30,
  },
  imageStyle: {
    width: 300,
    height: 300,
  },
})

export default ImageComp
