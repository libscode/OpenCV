import React, { Component } from 'react'
import { StatusBar, View, Text } from 'react-native'
import { Container } from 'native-base'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/SplashScreenStyle'
import { Colors } from '../Themes'

class SplashScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    setTimeout(() => {
      this.props.navigation.navigate('App')
    }, 1500)
  }

  render () {
    return (
      <Container style={{backgroundColor: Colors.primary}}>
        <StatusBar backgroundColor={Colors.primary} barStyle='dark-content' />

        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
          <Text style={styles.hello}>Haii...</Text>
          <Text style={styles.content}>Welcome to OpenCV</Text>
        </View>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)
