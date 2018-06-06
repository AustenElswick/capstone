import React from 'react'
import { WebView } from 'react-native'

const ViewArticle = ({ url }) => {
  const { webViewStyle } = styles
  return (
    <WebView source={{uri: url}} style={webViewStyle} />
  )
}

styles = {
  webViewStyle: {
    height: 560,
    width: '100%'
  }
}

export default ViewArticle
