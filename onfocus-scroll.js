import React, { Component } from 'react';
import {
    ScrollView,
} from 'react-native';


export class OnFocusScrollView extends Component {
    constructor(props) {
        super(props);

        this.getScrollViewSize = this.getScrollViewSize.bind(this);
        this.getCenterY = this.getCenterY.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.whetherIsFocused = this.whetherIsFocused.bind(this);

        this.state = {
            scrollViewX: 0,
            scrollViewY: 0,
            scrollViewHeight: 0,
            scrollViewWidth: 0,
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
            let payload = {};
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

    whetherIsFocused(size, margin) {
        const distance = Math.abs((size.y + size.height / 2) - this.getCenterY());
        return distance < margin;
    }

    render() {
        const margin = this.props.margin ? this.props.margin : 100;
        const whetherIsFocused = this.props.whetherIsFocused ? this.props.whetherIsFocused : this.whetherIsFocused;

        const children = this.props.children.map((item, i) => {
            const size = this.state["item" + i];
            let isFocused = false;
            if (typeof size === "undefined") {
                // onLayout callback function is called when scrolling.
                // So the size of all props.children are initialized by undefined.
                // Now, first child is initialized by isFocused=true.
                if (i === 0) {
                    isFocused = true
                }
            } else {
                isFocused = whetherIsFocused(size, margin);
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
