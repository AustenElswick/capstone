import React, { Component } from 'react'
import { Navigation } from 'react-native-navigation'
import Favorites from '../components/favorites'

class FavoritesScreen extends Component {
  state = {
    favorites: []
  }
  // constructor() {
  //   super()
  //   this.state = {
  //     favorites: []
  //   }
  // }

  componentDidMount() {
    this.addNewFavorite()
  }

  getFavorites() {
    const apiUrl = 'https://secure-fjord-83063.herokuapp.com/'
    fetch(apiUrl)
    .then(response => {
      return response.json()
    })
    .then(response => {
      this.setState({favorites: response.urls.reverse()})
    })
  }

  addNewFavorite = () => {
    const apiUrl = 'https://secure-fjord-83063.herokuapp.com/'
    fetch(apiUrl, {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify({
        url: this.props.url,
        title: this.props.title,
        author: this.props.author,
        imgUrl: this.props.imgUrl
      })
    }).then(response => response.json())
    .then(response => {
      console.log(response)
      this.setState({favorites: this.state.favorites})
      this.getFavorites()
    })
  }

  render() {
    return (
      <Favorites data={this.state.favorites} navi={this.props} />
    )
  }
}

export default FavoritesScreen
