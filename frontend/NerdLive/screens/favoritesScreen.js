import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Navigation } from 'react-native-navigation'
import Favorites from '../components/favorites'

class FavoritesScreen extends Component {

  constructor() {
    super()
    this.state = {
      favorites: []
    }
  }

  render() {
    return (
      <Favorites />
    )
  }
}

export default FavoritesScreen
