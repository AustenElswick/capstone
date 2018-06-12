import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import FavoriteListItem from './favoriteListItem'

class Favorites extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={this.props.data}
          keyExtractor={(item, index) => `${index}`}
          renderItem={( favorite ) => {
           return (<FavoriteListItem
            title={favorite.item.title}
            author={favorite.item.author}
            imgUrl={favorite.item.imgUrl}
            url={favorite.item.url}
            navi={this.props.navi}
            favorites={this.props.data}
            />)}}
          />
      </View>
    )
  }
}

export default Favorites
