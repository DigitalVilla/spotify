import * as React from 'react'
import { Dimensions, StyleSheet, Image, Text, View } from 'react-native'

export type AlbumProps = {
  meta: {
    id: string
    uri: string
    headline: string
  }
  size?: number | string
  gap?: number
}

export default function Album(props: AlbumProps): JSX.Element {
  return (
    <View style={[styles.container, { margin: props.gap || 2 }]}>
      <Image
        style={[
          styles.image,
          {
            height: props.size || 100,
            width: props.size || 100,
          },
        ]}
        source={{ uri: props.meta.uri }}
      />
      <Text style={styles.text}>{props.meta.headline}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'gray',
  },
  image: {
    marginBottom: 5,
    borderRadius: 4,
  },
})
