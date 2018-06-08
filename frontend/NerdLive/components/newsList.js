import React, { Component } from 'react'
import {View, FlatList, StyleSheet, List} from 'react-native'
import ArticleListItem from './articleListItem'

class NewsList extends Component {
  render() {
    return (
      <View>
          <FlatList
            data={this.props.data}
            keyExtractor={(item, index) => `${index}`}
            renderItem={( article ) => (
             <ArticleListItem
              title={article.item.title}
              author={article.item.author}
              imgUrl={article.item.urlToImage}
              url={article.item.url}
              navi={this.props.navi}
              />)}
            />
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
