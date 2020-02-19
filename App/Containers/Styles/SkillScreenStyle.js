import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  rowJustify: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerWrapper: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 25
  },
  iconWrapper: {
    backgroundColor: Colors.snow,
    width: 85,
    height: 85,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleSectionWrapper: {
    paddingTop: 25,
    paddingBottom: 10,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: Colors.borderDark
  },
  titleSection: {
    fontFamily: Fonts.type.semi,
    fontSize: Fonts.size.regular,
    color: Colors.black
  },
  skillWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15
  },
  skillIconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  skillLabel: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.medium,
    color: Colors.black,
  },
  progressBar: {
    height: 8,
    borderRadius: 10
  },
})
