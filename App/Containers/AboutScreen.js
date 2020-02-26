import React, { Component } from 'react'
import { StatusBar, View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import { Container, Content } from 'native-base'
import IonIcons from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'

import {
  IconContact,
  IconEducation,
  IconExperience,
  IconPortofolio,
  IconSocmed
} from '../Themes/Svg'

// Styles
import headerStyles from '../Navigation/Styles/NavigationStyles'
import styles from './Styles/AboutScreenStyle'
import { Colors } from '../Themes'

// Component
import ArrowBack from '../Components/ArrowBack'
import Collapse from '../Components/Collapse'

class AboutScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state

    return {
      headerStyle: headerStyles.default,
      headerTitleStyle: headerStyles.title,
      headerTitle: "About Me",
      headerTitleAlign: "center",
      headerLeft: () => <ArrowBack onPress={() => navigation.goBack() } />,
    }
  }

  constructor (props) {
    super(props)

    this.state = {
      experience: [{
        company: 'LibsCode',
        role: 'Frontend Engineer',
        year: 'Sep 2015 - Present'
      }, {
        company: 'Vore Corporation',
        role: 'CEO & Founder',
        year: 'Dec 2014 - Present'
      }, {
        company: 'Virtualspirit',
        role: 'Mobile Engineer',
        year: 'Mar 2019 - Feb 2020'
      }, {
        company: 'Jepture',
        role: 'Senior Mobile Engineer',
        year: 'Aug 2019 - Jan 2020'
      }, {
        company: 'Volantech',
        role: 'Senior Mobile Engineer',
        year: 'Apr 2019 - Aug 2019'
      }, {
        company: 'PT. Digital Niaga Solusindo',
        role: 'Senior Mobile Engineer',
        year: 'Nov 2018 - Apr 2019'
      }],
      portofolio: [{
        project: 'Plot Mobile',
        desc: 'A property mobile app',
        year: 'Aug 2019 - Feb 2020'
      }, {
        project: 'Jepture Mobile App',
        desc: 'A local wisdom for brighter future',
        year: 'Aug 2019 - Jan 2020'
      }, {
        project: 'RescueMe',
        desc: 'https://play.google.com/store/apps/details?id=com.rescueme',
        year: 'Apr 2019 - May 2019'
      }, {
        project: 'iSafe BIB',
        desc: 'https://play.google.com/store/apps/details?id=com.bib.isafe',
        year: 'Apr 2019 - Aug 2019'
      }, {
        project: 'Sun Education',
        desc: 'https://play.google.com/store/apps/details?id=com.sunedu.app',
        year: 'Nov 2018 - Apr 2019'
      }],
      socmed: [{
        name: 'Facebook',
        leftIcon: <IonIcons name='logo-facebook' size={20} color={Colors.snow} />,
        link: 'https://facebook.com/'
      }, {
        name: 'Twitter',
        leftIcon: <IonIcons name='logo-twitter' size={20} color={Colors.snow} />,
        link: 'https://twitter.com/'
      }, {
        name: 'Linkedin',
        leftIcon: <IonIcons name='logo-linkedin' size={20} color={Colors.snow} />,
        link: 'https://linkedin.com/'
      }, {
        name: 'GitHub',
        leftIcon: <IonIcons name='logo-github' size={20} color={Colors.snow} />,
        link: 'https://github.com/'
      }]
    }
  }

  _btnStyle = (name) => {
    switch(name) {
      case "Facebook":
        return styles.bgFacebook

      case "Linkedin":
        return styles.bgLinkedin

      case "Twitter":
        return styles.bgTwitter

      case "GitHub":
        return styles.bgGithub

      default:
        break;
    }
  }

  _renderSocmed = () => {
    const { socmed } = this.state

    return (
      <Collapse leftIcon={<IconSocmed />} title='Social Media'>
        {socmed && socmed.map((item, index) => (
          <TouchableOpacity
          key={index}
          activeOpacity={0.8}
          style={[
            styles.btnBlock,
            this._btnStyle(item.name),
            index === socmed.length - 1 && {marginBottom:0}
          ]}
          onPress={() => Linking.openURL(item.link)}>
            {item.leftIcon}
            <Text style={styles.btnLightLabel}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </Collapse>
    )
  }

  _renderPortofolio = () => {
    const { portofolio } = this.state

    return (
      <Collapse leftIcon={<IconPortofolio />} title='Portofolio'>
        {portofolio && portofolio.map((item, index) => (
          <View style={styles.collapseListItem} key={index}>
            <Text style={[styles.collapseItemLabel, styles.semi]}>{item.project}</Text>
            <Text style={styles.collapseItemLabel}>{item.desc}</Text>
            <Text style={[styles.collapseItemLabel, styles.muted]}>{item.year}</Text>
          </View>
        ))}
      </Collapse>
    )
  }

  _renderExperience = () => {
    const { experience } = this.state

    return (
      <Collapse leftIcon={<IconExperience />} title='Experience'>
        {experience && experience.map((item, index) => (
          <View style={styles.collapseListItem} key={index}>
            <Text style={[styles.collapseItemLabel, styles.semi]}>{item.company}</Text>
            <Text style={styles.collapseItemLabel}>{item.role}</Text>
            <Text style={[styles.collapseItemLabel, styles.muted]}>{item.year}</Text>
          </View>
        ))}
      </Collapse>
    )
  }

  _renderEducation = () => {
    return (
      <Collapse leftIcon={<IconEducation />} title='Education'>
        <View style={styles.collapseListItem}>
          <Text style={[styles.collapseItemLabel, styles.semi]}>Your School</Text>
          <Text style={styles.collapseItemLabel}>Student, IPA</Text>
          <Text style={[styles.collapseItemLabel, styles.muted]}>2015 - 2018</Text>
        </View>
      </Collapse>
    )
  }

  _renderContact = () => {
    return (
      <Collapse leftIcon={<IconContact/>} title='About'>
        <View style={styles.collapseListItem}>
          <Text style={[styles.collapseItemLabel, styles.semi]}>Birth</Text>
          <Text style={styles.collapseItemLabel}>Place, 15 Month 1995</Text>
        </View>

        <View style={styles.collapseListItem}>
          <Text style={[styles.collapseItemLabel, styles.semi]}>Email</Text>
          <Text style={styles.collapseItemLabel}>your@email.com</Text>
        </View>

        <View style={styles.collapseListItem}>
          <Text style={[styles.collapseItemLabel, styles.semi]}>Phone</Text>
          <Text style={styles.collapseItemLabel}>08123 456 789</Text>
        </View>

        <View style={styles.collapseListItem}>
          <Text style={[styles.collapseItemLabel, styles.semi]}>Location</Text>
          <Text style={styles.collapseItemLabel}>City, State, Country</Text>
        </View>
      </Collapse>
    )
  }

  render () {
    return (
      <Container>
        <StatusBar backgroundColor={Colors.primary} barStyle='dark-content' />

        <Content style={{backgroundColor:Colors.muted}}>
          <View style={styles.headerWrapper}>
            <Image source={{ uri: 'https://api.adorable.io/avatars/250/OpenCV.png' }} style={styles.avatar} />
            <Text style={styles.nameLabel}>Your Name</Text>
          </View>

          <View style={styles.contentWrapper}>
            {this._renderContact()}

            {this._renderEducation()}

            {this._renderExperience()}

            {this._renderPortofolio()}

            {this._renderSocmed()}
          </View>
        </Content>
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutScreen)
