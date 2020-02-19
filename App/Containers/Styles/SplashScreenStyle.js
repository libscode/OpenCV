import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  hello: {
    fontFamily: Fonts.type.hello,
    fontSize: 64,
    color: Colors.black,
    textAlign: 'center',
    marginBottom: 5
  },
  content: {
    fontFamily: Fonts.type.regular,
    fontSize: 24,
    color: Colors.black,
    textAlign: 'center'
  }
})
