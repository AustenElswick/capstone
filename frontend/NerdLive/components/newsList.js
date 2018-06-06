import React, {Component} from 'react'
import {View, FlatList, StyleSheet, List} from 'react-native'
import ArticleListItem from './articleListItem'

class NewsList extends Component {

  constructor() {
    super()
    this.state = {
      articles: [],
      imagePressed: false
    }
    this.switchPressedStateAndCallRedirect = this.switchPressedStateAndCallRedirect.bind(this)
  }

  componentWillMount() {
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

  switchPressedStateAndCallRedirect() {
    const isPressed = this.state.imagePressed
    this.setState({imagePressed: !isPressed})
  }

  redirect() {

  }

  render() {
    return (
      <View>
        {this.state.articles
          ? <FlatList
            data={this.state.articles}
            keyExtractor={(item, index) => `${index}`}
            renderItem={( article ) => (
             <ArticleListItem
              title={article.item.title}
              author={article.item.author}
              imgUrl={article.item.urlToImage}
              url={article.item.url}
              />)}
            />
          : null }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listStyle: {
    flex: 1,
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff'
  }
})

export default NewsList
