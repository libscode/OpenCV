import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  default: {
    borderBottomWidth: 0,
    elevation: 0,
    backgroundColor: Colors.primary
  },
  title: {
    fontFamily: Fonts.type.medium,
    color: Colors.black,
    textAlign: 'center',
    alignSelf: 'center',
    flex: 1,
    fontSize: 17,
  },
})
