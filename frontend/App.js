import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header.js'
import NewsList from './components/newsList.js'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header text={'Nerd Live'}/>
        <NewsList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
