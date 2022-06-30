import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native'
import React from 'react'

const ButtonComp = () => {
  return (
    <View>
      <Text style={styles.textStyle}>ButtonComp</Text>
      <Button
        title='Join Now'
        onPress={() => {
          console.log('Hello World')
          Alert.alert('😂😂')
        }}
      />
      <TouchableOpacity
        onPress={() => {
          console.log('Hello World')
          Alert.alert('😂😂')
        }}
      >
        <Text style={{ margin: 30, fontSize: 30 }}>Click Me!</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 200,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
})

export default ButtonComp
