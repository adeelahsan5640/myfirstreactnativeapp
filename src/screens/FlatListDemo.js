import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const FlatListDemo = () => {
  const names = [
    {
      key: '1',
      name: 'Adeel',
    },
    {
      key: '2',
      name: 'Talha',
    },
    {
      key: '3',
      name: 'Rehman',
    },
    {
      key: '4',
      name: 'Noman',
    },
    {
      key: '5',
      name: 'Emran',
    },
  ]
  return (
    <FlatList
      style={styles.listStyle}
      data={names}
      horizontal
      //   inverted
      //   numColumns={2}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        console.log(item.name)
        return <Text style={styles.textStyle}>{item.name}</Text>
      }}
    />
  )
}
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
    padding: 100,
    backgroundColor: 'red',
    margin: 20,
    color: 'white',
  },
  listStyle: {
    textAlign: 'center',
    marginTop: 20,
    padding: 10,
  },
})

export default FlatListDemo
