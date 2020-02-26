import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  default: {
    borderBottomWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
    backgroundColor: Colors.primary,
  },
  title: {
    fontFamily: Fonts.type.medium,
    color: Colors.black,
    // textAlign: 'center',
    // alignItems: 'center',
    // alignContent: 'center',
    // justifyContent: 'center',
    // alignSelf: 'center',
    // flex: 1,
    // flexDirection: 'row',
    fontSize: 17,
  },
})
