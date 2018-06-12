import React, { Component } from 'react'
import { View } from 'react-native'
import ViewArticle from '../components/viewArticle'

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
          passProps: {
            url: this.props.src,
            author: this.props.author,
            title: this.props.title,
            imgUrl: this.props.imgUrl
          }
        })
      }
    }
  }

  render() {
    return (
        <ViewArticle url={this.props.src} />
    )
  }
}

export default WebScreen
