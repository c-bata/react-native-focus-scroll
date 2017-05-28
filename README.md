# react-native-focus-scroll

ScrollView and ListView to detect the children is focused.

![Example](https://github.com/c-bata/react-native-focus-scroll/raw/master/example/anim.gif)

## Installation

```console
$ npm i react-native-focus-scroll
```

## TODO

- [x] Add FocusScrollView
- [ ] Add FocusListView
- [ ] Support horizontal scroll
- [ ] Add an android sample

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

import { FocusScrollView } from 'react-native-focus-scroll';

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
            {name: "PAULANER", imageUrl: "https://github.com/c-bata/react-native-focus-scroll/blob/master/example/assets/paulaner.jpg?raw=true"},
            {name: "KILKENNY", imageUrl: "https://github.com/c-bata/react-native-focus-scroll/blob/master/example/assets/kilkenny.jpg?raw=true"},
            {name: "GUINESS", imageUrl: "https://github.com/c-bata/react-native-focus-scroll/blob/master/example/assets/guiness.jpg?raw=true"},
            {name: "YAMATANO-OROCHI", imageUrl: "https://github.com/c-bata/react-native-focus-scroll/blob/master/example/assets/rokko-yamatanoorochi-ipa.jpg?raw=true"},
        ];
        return (
            <View style={styles.container}>
                <FocusScrollView>
                    {beers.map((beer, index) => <BeerComponent key={index} name={beer.name} imageUrl={beer.imageUrl} />)}
                </FocusScrollView>
            </View>
        );
    }
}
```

## Properties

All props is propagate to `ScrollView` wrapped by `FocusScrollView` .


#### threshold

- type: `integer`
- required?: optional
- default: `100`

If the distance between the center of FocusScrollView and the center of each children exceed a threshold,
The item of FocusScrollView is focused.

#### whetherIsFocused

- type: `function(size, margin) bool {}`
- required?: optional

To replace the judge whether the child is focused.
The default function is below.

```jsx
whetherIsFocused(size, margin) {
    const distance = Math.abs((size.y + size.height / 2) - this.getCenterY());
    return distance < margin;
}
```


## LICENSE

[MIT License](https://github.com/c-bata/react-native-focus-scroll/raw/master/LICENSE)
