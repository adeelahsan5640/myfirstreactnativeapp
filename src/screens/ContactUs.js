import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox'

const ContactUs = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [agree, setAgree] = useState(false)

  // console.log(username, password)

  const submitHandler = () => {
    if (username === 'Adeel' && password === '5640') {
      Alert.alert(`Thankyou ${username}`)
      navigation.navigate('Home', { myName: `${username}` })
    } else {
      Alert.alert('wrong username and password')
    }
  }
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Login form</Text>
      <Text style={styles.description}>
        You can reach us any time at adeelahsan5640@gmail.com
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your name</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize='none'
          autoCorrect={false}
          value={username}
          onChangeText={(data) => setUsername(data)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your password</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry={true}
          value={password}
          onChangeText={(data) => setPassword(data)}
        />
      </View>
      <View style={styles.wrapper}>
        <Checkbox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? '#4630EB' : undefined}
        />
        <Text style={styles.wrapperText}>
          I have read and agreed with the TC
        </Text>
      </View>

      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            backgroundColor: agree ? '#4630EB' : 'gray',
          },
        ]}
        disabled={!agree}
        onPress={submitHandler}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
            padding: 10,
          }}
        >
          LOGIN
        </Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  mainHeader: {
    fontSize: 30,
    color: '#344055',
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 10,
    textTransform: 'capitalize',
  },
  description: {
    fontSize: 20,
    color: '#7d7d7d',
    paddingBottom: 5,
    lineHeight: 25,
  },
  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontSize: 18,
    color: '#7d7d7d',
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    fontSize: 18,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
  },
  wrapperText: {
    color: '#7d7d7d',
    fontSize: 15,
    marginLeft: 10,
  },
  buttonStyle: {
    backgroundColor: 'grey',
    borderRadius: 50,
  },
})
export default ContactUs
