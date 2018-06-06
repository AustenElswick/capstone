import React, { Component } from 'react'
import { View } from 'react-native'
import NewsList from '../components/newsList'
import Header from '../components/header'
import { Navigation } from 'react-native-navigation'

class ListScreen extends Component {

  constructor() {
    super()
    this.state = {
      articles: [],
      articleUrl: null
    }
    this.viewArticle = this.viewArticle.bind(this)
  }

  viewArticle(event) {
    console.log(event)
    this.props.navigator.push({
      screen: 'NerdLive.WebScreen'
    })
  }
  render() {
    return (
      <View>
        <Header />
        <NewsList />
      </View>
    )
  }
}

export default ListScreen
