import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Platform,
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native'
import { connect } from 'react-redux'
import { Colors } from '../Themes'
import { IconArrowBack } from '../Themes/Svg'

// Styles
import styles from './Styles/ArrowBackStyle'

class ArrowBack extends Component {
  // Prop type warnings
  static propTypes = {
    onPress: PropTypes.func
  }

  constructor(props) {
    super(props)
  }

  render () {
    const { onPress } = this.props

    return (
      <Touchable
      background={Touchable.Ripple(Colors.darkGrey, true)}
      activeOpacity={0.9}
      style={{padding:5, marginRight:5, marginLeft:10}}
      onPress={onPress}>
        <IconArrowBack />
      </Touchable>
    )
  }
}

let TouchableComponent;

if (Platform.OS === 'android') {
  TouchableComponent = Platform.Version <= 20
    ? TouchableOpacity
    : TouchableNativeFeedback;
} else {
  TouchableComponent = TouchableOpacity;
}

if (TouchableComponent !== TouchableNativeFeedback) {
  TouchableComponent.SelectableBackground = () => ({});
  TouchableComponent.SelectableBackgroundBorderless = () => ({});
  TouchableComponent.Ripple = () => ({});
  TouchableComponent.canUseNativeForeground = () => false;
}

class Touchable extends React.Component {
  static SelectableBackground = TouchableComponent.SelectableBackground;
  static SelectableBackgroundBorderless = TouchableComponent.SelectableBackgroundBorderless;
  static Ripple = TouchableComponent.Ripple;
  static canUseNativeForeground = TouchableComponent.canUseNativeForeground;

  render() {
    let {
      children,
      style,
      foreground,
      background,
      useForeground,
      ...props
    } = this.props;

    // Even though it works for TouchableWithoutFeedback and
    // TouchableNativeFeedback with this component, we want
    // the API to be the same for all components so we require
    // exactly one direct child for every touchable type.

    if (TouchableComponent === TouchableNativeFeedback) {
      useForeground =
        foreground && TouchableNativeFeedback.canUseNativeForeground();

      if (foreground && background) {
        console.warn(
          'Specified foreground and background for Touchable, only one can be used at a time. Defaulted to foreground.'
        );
      }

      return (
        <TouchableComponent
          {...props}
          useForeground={useForeground}
          background={(useForeground && foreground) || background}>
          <View style={style}>
            {children}
          </View>
        </TouchableComponent>
      );
    } else if (TouchableComponent === TouchableWithoutFeedback) {
      return (
        <TouchableWithoutFeedback {...props}>
          <View style={style}>
            {children}
          </View>
        </TouchableWithoutFeedback>
      );
    } else {
      let TouchableFallback = this.props.fallback || TouchableComponent;
      return (
        <TouchableFallback {...props} style={style}>
          <View>
            {children}
          </View>
        </TouchableFallback>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ArrowBack)
