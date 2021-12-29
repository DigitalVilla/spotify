import * as React from 'react'
import { FlatList, Text, View } from 'react-native'
import { AlbumType } from '../../types'
import Album from '../Album/Album'
import styles from './CategoryStyles'

export type CategoryProps = {
  title: string
  albums: AlbumType[]
}

export default function Category(props: CategoryProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      <FlatList
        horizontal
        data={props.albums}
        keyExtractor={({ id }) => id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Album gap={5} meta={item} />}
      />
    </View>
  )
}
