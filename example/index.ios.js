/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';


export default class example extends Component {
  constructor(props) {
    super(props);
    this.displaySize = this.displaySize.bind(this);
  }
  
  displaySize(event) {
    var {x, y, width, height} = event.nativeEvent.layout;
    console.log("x: " + x + ", y: " + y);
    console.log("width: " + width + ", height: " + height);
  }

  render() {
    const dim = Dimensions.get('screen');
    console.log("windowWidth: " + dim.width + ", windowHeight: " + dim.height);
    return (
      <View style={styles.container} onLayout={this.displaySize}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions} onLayout={this.displaySize}>
          Press Cmd+R to reload,{'\n'}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('example', () => example);
