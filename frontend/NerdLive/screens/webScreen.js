import React, { Component } from 'react'
import { View } from 'react-native'
import ViewArticle from '../components/viewArticle'
import Icon from 'react-native-vector-icons/Ionicons'
const iosStar = (<Icon name="ios-star" size={30} color="#900" />)

class WebScreen extends Component {

  static navigatorButtons = {
    rightButtons: [
      {
        title: 'Add to Favorites',
        id: 'add'
      }

    ]
  }

  constructor(props) {
    super(props);
    this.props.navigator.addOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'add') {
        this.props.navigator.push({
          screen: 'NerdLive.FavoritesScreen',
          title: 'Favorites',
          passProps: this.props.src
        })
      }
    }
  }
  render() {
    console.log(this.props)
    return (
        <ViewArticle url={this.props.src} />
    )
  }
}

export default WebScreen
