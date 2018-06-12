import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Navigation } from 'react-native-navigation'

class FavoriteListItem extends Component {

  viewArticle = () => {
    this.props.navi.navigator.push({
      screen: 'NerdLive.WebScreen',
      passProps: {
        src: this.props.url,
      },
      title: 'Article Viewer',
    })
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <Text>Author: {this.props.author}</Text>
        <Text>{this.props.title}</Text>
        <TouchableOpacity onPress={() => this.viewArticle(this.props)}>
          <Image style={styles.imgStyle} source={{uri :this.props.imgUrl}}></Image>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
})

export default FavoriteListItem
