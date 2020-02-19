import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Animated, UIManager, LayoutAnimation, Platform, Easing } from 'react-native'
import styles from './Styles/CollapseStyle'

import {
  IconDropOpened,
  IconDropClosed
} from '../Themes/Svg'

export default class Collapse extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  constructor (props) {
    super(props)

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)
    }

    this.state = {
      height: 0,
      maxHeight: 0,
      spinValue: new Animated.Value(0)
    }
  }

  componentDidMount () {
    // this.contentHandle.getNode().measure((x, y, width, height) => {
    //   console.tron.log("@@@ TEST 123 @@@", height)
    // })
  }

  _onChildRender = (event) => {
    // const { height } = event.nativeEvent.layout
    // console.tron.log("@@@ LOG VIEW HEIGHT @@@", height)
    // this.setState({ maxHeight: height, height: new Animated.Value(0) })
  }

  _toggleCollapse = () => {
    const { height, spinValue } = this.state
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)

    height === 0 ? spinValue.setValue(0) : spinValue.setValue(1)

    Animated.timing(
      spinValue,
      {
        toValue: height === 0 ? 1 : 0,
        duration: 200,
        easing: Easing.linear
      }
    ).start()

    this.setState({ height: height === 0 ? null : 0 })
  }

  render () {
    const {
      leftIcon,
      title,
      children
    } = this.props
    const { height, spinValue } = this.state

    const rotation = spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '90deg']
    })

    // ref={(ref) => this.contentHandle = ref}
    // onLayout={(event) => this._onChildRender(event)}

    return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={1} style={styles.headerWrapper} onPress={() => this._toggleCollapse()}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            {leftIcon}

            <Text style={styles.headerTitle}>{title}</Text>
          </View>

          <Animated.View style={{transform: [{rotate: rotation}]}}>
            <IconDropClosed />
          </Animated.View>
        </TouchableOpacity>

        <View style={{overflow:'hidden', height, marginTop: height === 0 ? 0 : 15}}>
          {children}
        </View>
      </View>
    )
  }
}
