import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'

const ArticleListItem = ({ author, title, imgUrl, url }) => {
  const { imgStyle, viewStyle, textStyle } = styles
  return(
    <View style={viewStyle}>
      <Text>Author: {author}</Text>
      <Text>{title}</Text>
      <TouchableOpacity>
        <Image source={{uri: imgUrl}} alt='article image' style={imgStyle} />
        <Text style={textStyle}>{url}</Text>
      </TouchableOpacity>
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
  },
  textStyle:{
    display: 'none'
  }
}

export default ArticleListItem
