# react-native-onfocus-scroll

ScrollView and ListView to detect the children is focused.

![Example](https://github.com/c-bata/react-native-onfocus-scroll/raw/master/example/anim.gif)

## Usage

```jsx
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
        if (this.props.isFocused) {
            focusText = (<Text style={{color: "#ff0"}}>Focused!</Text>);
        } else {
            focusText = (<Text style={{color: "#fff"}}>Not Focused!</Text>);
        }

        return (
            <View style={[styles.square, styles.wrapper]} onLayout={this.props.onLayout}>
                <Image style={[styles.square, {position: "absolute"}]} source={{uri: this.props.imageUrl}} />
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
                <OnFocusScrollView>
                    {beers.map((beer, index) => <BeerComponent key={index} name={beer.name} imageUrl={beer.imageUrl} />)}
                </OnFocusScrollView>
            </View>
        );
    }
}
```

## LICENSE

[MIT License](https://github.com/c-bata/react-native-onfocus-scroll/raw/master/LICENSE)
