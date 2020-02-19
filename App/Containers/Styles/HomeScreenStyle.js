import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../Themes/'
import { ScaleWidth, ScaleHeight } from '../../Transforms/Scale'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  helloWrapper: {
    flex: 1,
    marginBottom: 15
  },
  hello1: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.title,
    color: Colors.black,
    marginBottom: 5,
    marginTop: 15
  },
  hello2: {
    fontFamily: Fonts.type.semi,
    fontSize: Fonts.size.h5,
    color: Colors.black
  },
  aboutWrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.primary,
    borderRadius: 10,
    padding: 15,
    paddingLeft: 25,
    paddingRight: 25,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  aboutLabel: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.input,
    color: Colors.snow,
    marginBottom: 15
  },
  btnAbout: {
    padding: 10,
    backgroundColor: Colors.secondary,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 30,
    alignSelf: 'flex-start'
  },
  btnAboutLabel: {
    fontFamily: Fonts.type.semi,
    fontSize: Fonts.size.small,
    color: Colors.snow
  },
  skillSectionTitle: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.title,
    color: Colors.black,
    marginBottom: 10,
  },
  skillTitle: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.medium,
    color: Colors.black,
    marginTop: 15
  },
  skillWrapper: {
    backgroundColor: Colors.muted,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: ScaleWidth(80),
    height: ScaleHeight(35),
    // marginRight: ScaleWidth(4),
    marginBottom: 15
  },
  creditWrapper: {
    width: '100%',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  creditLabel: {
    fontFamily: Fonts.type.semi,
    fontSize: Fonts.size.small,
    color: Colors.black
  }
})
