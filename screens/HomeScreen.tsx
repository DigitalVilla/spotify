import * as React from 'react'
import { Dimensions, StyleSheet, ScrollView, View } from 'react-native'
import Album from '../components/Album/Album'
import { RootTabScreenProps } from '../types'

const albumMeta = [
  {
    uri: 'https://assets.digitalvilla.ca/pages/old-games.jpg',
    headline: 'First Album',
    id: '1232',
  },
  {
    uri: 'https://assets.digitalvilla.ca/pages/mac-rainbow.jpg',
    headline: 'First Album',
    id: '1231',
  },
  {
    uri: 'https://assets.digitalvilla.ca/pages/old-games.jpg',
    headline: 'First Album',
    id: '1233',
  },
  {
    uri: 'https://assets.digitalvilla.ca/pages/mac-rainbow.jpg',
    headline: 'First Album',
    id: '1235',
  },
  {
    uri: 'https://assets.digitalvilla.ca/pages/old-games.jpg',
    headline: 'First Album',
    id: '1236',
  },
  {
    uri: 'https://assets.digitalvilla.ca/pages/mac-rainbow.jpg',
    headline: 'First Album',
    id: '1234',
  },
  {
    uri: 'https://assets.digitalvilla.ca/pages/old-games.jpg',
    headline: 'First Album',
    id: '1237',
  },
  {
    uri: 'https://assets.digitalvilla.ca/pages/mac-rainbow.jpg',
    headline: 'First Album',
    id: '1238',
  },
]

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const gap = 10

  return (
    <ScrollView style={styles.container}>
      <Album
        meta={albumMeta[0]}
        size={Dimensions.get('window').width - gap * 2}
        gap={gap}
      />
      <AlbumGrid />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'red',
    padding: 12 / 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
})

const AlbumGrid = (): JSX.Element => {
  const [window, setWindow] = React.useState(Dimensions.get('window'))
  const gap = window.width < 768 ? 10 : 20
  const count = window.width < 768 ? 3 : 4
  const size = window.width / count - gap - (count + 1)

  return (
    <View style={albumStyles.container}>
      {albumMeta.map((m) => {
        return <Album key={m.id} meta={m} size={size} gap={gap / 2} />
      })}
    </View>
  )
}

const albumStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
  },
})
