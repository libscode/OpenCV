import { createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import SplashScreen from '../Containers/SplashScreen'
import HomeScreen from '../Containers/HomeScreen'
import AboutScreen from '../Containers/AboutScreen'
import SkillScreen from '../Containers/SkillScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const AppStack = createStackNavigator({
  Home: { screen: HomeScreen },
  About: { screen: AboutScreen },
  Skill: { screen: SkillScreen }
}, {
  // Default config for all screens
  // headerMode: 'none',
  initialRouteName: 'Home',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createSwitchNavigator({
  SplashScreen,
  App: AppStack
}, {
  initialRouteName: 'SplashScreen'
})
