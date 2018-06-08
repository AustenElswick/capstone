import React, { Component } from 'react'
import { View } from 'react-native'
import NewsList from '../components/newsList'
import { Navigation } from 'react-native-navigation'

class ListScreen extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      articleUrl: null

    }
  }

  componentDidMount() {
    this.fetchNewsArticles()
  }


  fetchNewsArticles() {
    const apiUrl = 'https://newsapi.org/v2/everything?sources=techcrunch&apiKey=a4afa1568c214408964517e6ab810a93'
     fetch(apiUrl)
    .then(response => {
      return response.json()
    })
    .then(response => {
      this.setState({articles: response.articles})
    })
  }
  render() {
    return (
      <View>
        {this.state.articles
          ? <NewsList navi={this.props} data={this.state.articles}  />
          : null}
      </View>
    )
  }
}

export default ListScreen
