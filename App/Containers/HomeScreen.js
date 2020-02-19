import React, { Component } from 'react'
import { StatusBar, View, Text, TouchableOpacity, Image } from 'react-native'
import { Container, Content } from 'native-base'
import IonIcons from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'

import {
  IconBrush,
  IconCode,
  IconUiUx,
  IconDB,
  IconPS,
  IconXD,
  IconAI,
  IconFigma,
  IconJava,
  IconXML,
  IconPrototype,
  IconVisual,
  IconAnimation,
  IconResearch,
  IconLayout,
  IconFirebase,
  IconMysql
} from '../Themes/Svg'

// Styles
import styles from './Styles/HomeScreenStyle'
import { Colors } from '../Themes'

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  })

  constructor (props) {
    super(props)

    this.state = {
      skills: [{
        icon: <IconBrush width={39} height={39} />,
        title: 'Design',
        skill: [{
          name: 'Adobe Photoshop',
          percent: 60,
          icon: <IconPS />
        }, {
          name: 'Adobe Illustrator',
          percent: 30,
          icon: <IconAI />
        }, {
          name: 'Figma',
          percent: 30,
          icon: <IconFigma />
        }, {
          name: 'Adobe Xd',
          percent: 30,
          icon: <IconXD />
        }]
      }, {
        icon: <IconCode width={39} height={39} />,
        title: 'Programming',
        skill: [{
          name: 'Java',
          percent: 60,
          icon: <IconJava />
        }, {
          name: 'XML',
          percent: 30,
          icon: <IconXML />
        }]
      }, {
        icon: <IconUiUx width={34} height={39} />,
        title: 'UI / UX',
        skill: [{
          name: 'UI Prototyping',
          percent: 60,
          icon: <IconPrototype />
        }, {
          name: 'Visual Design',
          percent: 30,
          icon: <IconVisual />
        }, {
          name: 'Interactivity & Animation',
          percent: 30,
          icon: <IconAnimation />
        }, {
          name: 'Design Research',
          percent: 30,
          icon: <IconResearch />
        }, {
          name: 'Color, Typography, and Layouts',
          percent: 50,
          icon: <IconLayout />
        }]
      }, {
        icon: <IconDB width={34} height={39} />,
        title: 'Database',
        skill: [{
          name: 'Firebase',
          percent: 80,
          icon: <IconFirebase />
        }, {
          name: 'MySQL',
          percent: 50,
          icon: <IconMysql />
        }]
      }],
    }
  }

  render () {
    const { skills } = this.state

    return (
      <Container>
        <StatusBar backgroundColor={Colors.snow} barStyle='dark-content' />

        <Content contentContainerStyle={{padding:15}}>
          <View style={styles.helloWrapper}>
            <Text style={styles.hello1}>Hi, It's me</Text>
            <Text style={styles.hello2}>Your Name</Text>
          </View>

          <View style={styles.aboutWrapper}>
            <View>
              <Text style={styles.aboutLabel}>Curious about me ?</Text>
              <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btnAbout}
              onPress={() => this.props.navigation.navigate('About')}>
                <Text style={styles.btnAboutLabel}>Find Out!</Text>
              </TouchableOpacity>
            </View>

            <Image source={{ uri: 'https://i.imgur.com/r4S8tpr.jpg' }} style={styles.avatar} />
          </View>

          <View style={{flex:1}}>
            <Text style={styles.skillSectionTitle}>My Skill</Text>

            <View style={{width:'100%', flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between'}}>
              {skills && skills.map((item, index) => (
                <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                style={[styles.skillWrapper, index % 2 !== 0 && {marginRight:0}]}
                onPress={() => this.props.navigation.navigate('Skill', {data:item})}>
                  {item.icon}
                  <Text style={styles.skillTitle}>{item.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </Content>

        <View style={styles.creditWrapper}>
          <Text style={styles.creditLabel}>Made with </Text>
          <IonIcons name='md-heart' size={15} color={Colors.ruby} />
          <Text style={styles.creditLabel}> in Indonesia</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
