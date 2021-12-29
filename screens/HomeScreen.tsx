import * as React from 'react'
import { FlatList, StyleSheet, View, Image } from 'react-native'
import Category from '../components/Category/Category'
import { homeData, CategoryType } from '../data/data'
import { AlbumType, RootTabScreenProps } from '../types'

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFillObject}>
        <Image
          source={{ uri: 'https://assets.digitalvilla.ca/pages/old-games.jpg' }}
          style={[StyleSheet.absoluteFillObject, styles.imageBG]}
          blurRadius={20}
        />
      </View>
      <FlatList
        data={homeData}
        keyExtractor={({ id }) => id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Category title={item.category} albums={item.albums} />
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'red',
    padding: 12 / 2,
  },
  imageBG: {
    opacity: 0.3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
})
