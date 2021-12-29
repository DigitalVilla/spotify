import * as React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'
import { AlbumType } from '../../types'

export type AlbumProps = {
  size?: number | string
  meta: AlbumType
  gap?: number
}

export default function Album(props: AlbumProps): JSX.Element {
  return (
    <View style={[styles.container, { margin: props.gap || 0 }]}>
      <Image
        style={[
          styles.image,
          {
            height: props.size || 150,
            width: props.size || 150,
          },
        ]}
        source={{ uri: props.meta.uri }}
      />
      <Text style={styles.text}>{props.meta.headline}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  text: {
    color: 'gray',
  },
  image: {
    marginBottom: 5,
    borderRadius: 4,
  },
})
