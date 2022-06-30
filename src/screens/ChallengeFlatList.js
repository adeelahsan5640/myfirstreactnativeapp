import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ChallengeFlatList = () => {
  const netflixSeries = [
    {
      name: 'Archive 81',
      year: '2022',
      Creator: 'Rebacca',
      Genre: 'Horror,thriller',
    },
    {
      name: 'Cheer',
      year: '2021',
      Creator: 'Grey Whiteeley',
      Genre: 'Docuseries',
    },
    {
      name: 'Cobra Kai',
      year: '2020',
      Creator: 'Hayden Schlossberg',
      Genre: 'Drama',
    },
    {
      name: 'The Witcher',
      year: '2021-2022',
      Creator: 'Lauren Schmidt',
      Genre: 'Reality',
    },
    {
      name: 'Emily in Paris',
      year: '2020',
      Creator: 'Darren Star',
      Genre: 'Romance',
    },
  ]
  return (
    <View>
      <Text style={{ margin: 30, fontSize: 30 }}>Top Netflix Series</Text>
      <FlatList
        style={styles.listStyle}
        data={netflixSeries}
        keyExtractor={(key) => {
          return key.name
        }}
        horizontal
        //   inverted
        //   numColumns={2}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          console.log(item.name)
          return (
            <View style={styles.viewStyle}>
              <Text style={styles.textStyle}>{item.name}</Text>
              <Text style={styles.textStyle}>{item.year}</Text>
              <Text style={styles.textStyle}>{item.Creator}</Text>
              <Text style={styles.textStyle}>{item.Genre}</Text>
            </View>
          )
        }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  listStyle: {},
  textStyle: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    paddingLeft: 45,
    paddingRight: 45,
    backgroundColor: 'red',
  },
  viewStyle: { padding: 5, margin: 20 },
})

export default ChallengeFlatList
