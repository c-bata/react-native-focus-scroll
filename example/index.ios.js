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
    ScrollView,
} from 'react-native';

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

class FocusedScrollView extends Component {
    constructor(props) {
        super(props);

        this.getScrollViewSize = this.getScrollViewSize.bind(this);
        this.getCenterY = this.getCenterY.bind(this);
        this.handleScroll = this.handleScroll.bind(this);

        this.state = {
            scrollViewX: 0,
            scrollViewY: 0,
            scrollViewHeight: 0,
            scrollViewWidth: 0,
            focusedItem: null,
        }
    }

    getCenterY() {
        return (this.state.offsetY - this.state.scrollViewY) + (this.state.scrollViewHeight / 2)
    }

    getScrollViewSize(event) {
        const {x, y, width, height} = event.nativeEvent.layout;
        this.setState({
            scrollViewX: x,
            scrollViewY: y,
            scrollViewWidth: width,
            scrollViewHeight: height,
        })
    }

    getDisplaySize(index) {
        return (event) => {
            const { x, y, width, height } = event.nativeEvent.layout;
            let payload = {}
            payload["item" + index] = {index, x, y, width, height};
            this.setState(payload);
            return index, x, y, width, height
        }
    }

    handleScroll(event) {
        this.setState({
            offsetY: event.nativeEvent.contentOffset.y,
            offsetX: event.nativeEvent.contentOffset.x,
        });
    }

    render() {
        console.log(this.getCenterY());
        const focusedKey = this.state.focusedItem
        const children = this.props.children.map((item, i) => {
            const size = this.state["item" + i]
            let isFocused;
            if (typeof size === "undefined") {
                isFocused = false
            } else {
                isFocused = Math.abs((size.y + size.height / 2) - this.getCenterY()) < 100;
            }
            return React.cloneElement(item, {
                onLayout: this.getDisplaySize(i),
                isFocused: isFocused,
            })
        });

        return (
            <ScrollView {...this.props} onScroll={this.handleScroll} scrollEventThrottle={100} onLayout={this.getScrollViewSize}>
                {children}
            </ScrollView>
        )
    }
}

export default class example extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const dim = Dimensions.get('screen');
        return (
            <View style={styles.container}>
              <FocusedScrollView style={styles.scroll}>
                <TestItemComponent key={1} />
                <TestItemComponent key={2} />
                <TestItemComponent key={3} />
                <TestItemComponent key={4} />
                <TestItemComponent key={5} />
                <TestItemComponent key={6} />
                <TestItemComponent key={7} />
              </FocusedScrollView>
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
