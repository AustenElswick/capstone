import React, { Component } from 'react'
import { WebView } from 'react-native'

class ViewArticle extends Component {
  render() {
    return (
        <WebView source={{uri: this.props.url}}
           style={{marginTop: 20, height: 560, width: '100%'}}
           />
    )
  }
}


export default ViewArticle
