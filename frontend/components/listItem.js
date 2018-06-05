import React from 'react'
import { View, Text, Image } from 'react-native'

const ListItem = ({ author, title, imgUrl }) => {
  const { imgStyle, viewStyle } = styles
  return (
    <View style={viewStyle}>
      <Text>Author: {author}</Text>
      <Text>{title}</Text>
      <Image source={{uri: imgUrl}} alt='article image' style={imgStyle} />
    </View>
  )
}

const styles = {
  imgStyle: {
    width: 100,
    height: 100
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    borderWidth: 1,
    borderColor: '#434547'
  }
}

export default ListItem
