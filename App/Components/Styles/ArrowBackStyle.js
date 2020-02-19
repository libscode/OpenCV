import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../Themes'
import { ScaleHeight, ScaleWidth } from '../../Transforms/Scale'

export default StyleSheet.create({
  badge: {
    position: 'absolute',
    zIndex: 9,
    top: 5,
    right: 0,
    width: 13,
    height: 13,
    backgroundColor: Colors.secondary,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center'
  },
  badgeLabel: {
    fontFamily: Fonts.type.regular,
    fontSize: 9,
    color: 'white',
    textAlign: 'center'
  }
})
