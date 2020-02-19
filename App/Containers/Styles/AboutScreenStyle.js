import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 25
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 25
  },
  nameLabel: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.input,
    color: Colors.black,
    textAlign: 'center'
  },
  contentWrapper: {
    padding: 15,
    paddingBottom: 5,
    backgroundColor: Colors.muted
  },
  collapseListItem: {
    width: '100%',
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: Colors.border
  },
  collapseItemLabel: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.medium,
    color: Colors.black,
  },
  muted: {
    color: Colors.helper,
    fontSize: Fonts.size.small
  },
  semi: {
    fontFamily: Fonts.type.semi,
  },
  btnBlock: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 7,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginBottom: 10
  },
  bgFacebook: {
    backgroundColor: '#3182ce'
  },
  bgGithub: {
    backgroundColor: Colors.black
  },
  bgTwitter: {
    backgroundColor: '#63b3ed'
  },
  bgLinkedin: {
    backgroundColor: '#2b6cb0'
  },
  btnLightLabel: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.medium,
    color: Colors.snow,
    marginLeft: 7
  }
})
