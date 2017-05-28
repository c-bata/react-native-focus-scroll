/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Dimensions,
    Text,
    View,
    Image,
} from 'react-native';

import { OnFocusScrollView } from 'react-native-onfocus-scroll';

class BeerComponent extends Component {
    render() {
        let focusText;
        let opacity;
        if (this.props.isFocused) {
            focusText = (<Text style={{color: "#ff0"}}>Focused!</Text>);
            opacity = {opacity: 1};

        } else {
            focusText = (<Text style={{color: "#fff"}}>Not Focused!</Text>);
            opacity = {opacity: 0.4};
        }

        return (
            <View style={[styles.square, styles.wrapper]} onLayout={this.props.onLayout}>
                <Image style={[styles.square, opacity, {position: "absolute"}]} source={{uri: this.props.imageUrl}} />
                <View style={styles.textWrapper}>
                    <Text style={styles.text}>{this.props.name}</Text>
                    {focusText}
                </View>
            </View>
        )
    }
}

export default class example extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const beers = [
            {name: "PAULANER", imageUrl: "https://github.com/c-bata/react-native-onfocus-scroll/blob/master/example/assets/paulaner.jpg?raw=true"},
            {name: "KILKENNY", imageUrl: "https://github.com/c-bata/react-native-onfocus-scroll/blob/master/example/assets/kilkenny.jpg?raw=true"},
            {name: "GUINESS", imageUrl: "https://github.com/c-bata/react-native-onfocus-scroll/blob/master/example/assets/guiness.jpg?raw=true"},
            {name: "YAMATANO-OROCHI", imageUrl: "https://github.com/c-bata/react-native-onfocus-scroll/blob/master/example/assets/rokko-yamatanoorochi-ipa.jpg?raw=true"},
        ];
        return (
            <View style={styles.container}>
                <OnFocusScrollView threshold={dim.width / 2}>
                    {beers.map((beer, index) => <BeerComponent key={index} name={beer.name} imageUrl={beer.imageUrl} />)}
                </OnFocusScrollView>
            </View>
        );
    }
}

const dim = Dimensions.get("screen");
const styles = StyleSheet.create({
    container: {
        top: 20,
    },
    square: {
        width: dim.width,
        height: dim.width,
    },
    wrapper: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
    },
    textWrapper: {
        position: "absolute",
        padding: 20,
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    text: {
        color: "#fff",
        fontSize: 32,
        fontWeight: "bold",
        alignContent: "center",
        alignSelf: "center",
    },
});

AppRegistry.registerComponent('example', () => example);
