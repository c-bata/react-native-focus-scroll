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
} from 'react-native';

import { OnFocusScrollView } from 'react-native-onfocus-scroll';

class TestItemComponent extends Component {
    render() {
        let message = (<Text>Not Focused!!</Text>);
        let style = {};
        if (this.props.isFocused) {
            message = (<Text>Focused!!</Text>);
            style = {backgroundColor: "#bbb"}
        }
        return (
            <View style={[styles.itemComponent, style]} onLayout={this.props.onLayout}>
              <Text>Hello World.</Text>
              <Text>I am Masashi Shibata.</Text>
                {message}
            </View>
        )
    }
}

export default class example extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
              <OnFocusScrollView style={styles.scroll}>
                <TestItemComponent key={1} />
                <TestItemComponent key={2} />
                <TestItemComponent key={3} />
                <TestItemComponent key={4} />
                <TestItemComponent key={5} />
                <TestItemComponent key={6} />
                <TestItemComponent key={7} />
              </OnFocusScrollView>
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
        top: 21,
    },
    scroll: {
        width: "100%",
    },
    itemComponent: {
        borderWidth: 1,
        borderColor: "#333",
        height: 200,
        backgroundColor: "#ddd",
    }
});

AppRegistry.registerComponent('example', () => example);
