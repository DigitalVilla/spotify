import * as React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Album from '../components/Album/Album'
import { RootTabScreenProps } from '../types'

const albumMeta = [
  {
    uri: 'https://assets.digitalvilla.ca/pages/mac-rainbow.jpg',
    headline: 'First Album',
    id: '1232',
  },
  {
    uri: 'https://assets.digitalvilla.ca/pages/mac-rainbow.jpg',
    headline: 'First Album',
    id: '1231',
  },
  {
    uri: 'https://assets.digitalvilla.ca/pages/mac-rainbow.jpg',
    headline: 'First Album',
    id: '1233',
  },
  {
    uri: 'https://assets.digitalvilla.ca/pages/mac-rainbow.jpg',
    headline: 'First Album',
    id: '1235',
  },
  {
    uri: 'https://assets.digitalvilla.ca/pages/mac-rainbow.jpg',
    headline: 'First Album',
    id: '1236',
  },
  {
    uri: 'https://assets.digitalvilla.ca/pages/mac-rainbow.jpg',
    headline: 'First Album',
    id: '1234',
  },
  {
    uri: 'https://assets.digitalvilla.ca/pages/mac-rainbow.jpg',
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
  return (
    <View style={styles.container}>
      <AlbumGrid />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'red',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})

const AlbumGrid = (): JSX.Element => {
  const [window, setWindow] = React.useState(Dimensions.get('window'))
  const gap = window.width < 768 ? 12 : 20
  const count = window.width < 768 ? 3 : 4
  const size = window.width / count - gap - (count + 1)

  return (
    <View style={[albumStyles.container, { padding: gap / 2 }]}>
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
  },
})
