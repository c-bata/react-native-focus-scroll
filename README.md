# react-native-focus-scroll

react-native-focus-scroll can detect which children are focused when scrolling.

![Example - vertical](https://github.com/c-bata/react-native-focus-scroll/raw/master/example/anim.gif)
![Example - horizontal](https://github.com/c-bata/react-native-focus-scroll/raw/master/example/anim-horizontal.gif)

## Installation

```console
$ npm i react-native-focus-scroll
```

## TODO

- [x] Add FocusScrollView
- [ ] Add FocusListView
- [x] Support horizontal scroll
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
        let style;
        if (this.props.isFocused) {
            style = {opacity: 1};
        } else {
            style = {opacity: 0.4};
        }

        return (
            <Image style={[style, {width: 200, height: 200, position: "absolute"}]} source={{uri: this.props.url}} />
        )
    }
}

export default class example extends Component {
    render() {
        const urls = [
            "https://github.com/c-bata/react-native-focus-scroll/blob/master/example/assets/paulaner.jpg?raw=true",
            "https://github.com/c-bata/react-native-focus-scroll/blob/master/example/assets/kilkenny.jpg?raw=true",
            "https://github.com/c-bata/react-native-focus-scroll/blob/master/example/assets/guiness.jpg?raw=true",
            "https://github.com/c-bata/react-native-focus-scroll/blob/master/example/assets/rokko-yamatanoorochi-ipa.jpg?raw=true",
        ];

        return (
            <View style={styles.container}>
                <FocusScrollView threshold={100}>
                    {urls.map((url, index) => <BeerComponent key={index} imageUrl={url} />)}
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
