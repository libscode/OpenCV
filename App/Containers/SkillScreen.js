import React, { Component } from 'react'
import { StatusBar, View, Text } from 'react-native'
import { Container, Content } from 'native-base'
import { connect } from 'react-redux'
import * as Progress from 'react-native-progress'

// Styles
import headerStyles from '../Navigation/Styles/NavigationStyles'
import styles from './Styles/SkillScreenStyle'
import { Colors } from '../Themes'

// Component
import ArrowBack from '../Components/ArrowBack'

class SkillScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state

    return {
      headerStyle: headerStyles.default,
      headerTitleStyle: headerStyles.title,
      headerTitle: "",
      headerLeft: () => <ArrowBack onPress={() => navigation.goBack() } />,
    }
  }

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const data = this.props.navigation.getParam('data', null)

    return (
      <Container>
        <StatusBar backgroundColor={Colors.primary} barStyle='dark-content' />

        <Content>
          <View style={styles.headerWrapper}>
            <View style={styles.iconWrapper}>
              {data && data.icon}
            </View>
          </View>

          <View style={{padding:15}}>
            <View style={styles.titleSectionWrapper}>
              <Text style={styles.titleSection}>{data && data.title}</Text>
            </View>

            {data && data.skill.map((item, index) => (
              <View style={styles.skillWrapper} key={index}>
                <View style={styles.skillIconWrapper}>
                  {item.icon}
                </View>

                <View style={{flex:1}}>
                  <Text style={[styles.skillLabel, {marginBottom:10}]}>{item.name}</Text>
                  <View style={styles.rowJustify}>
                    <View style={{flex:0.9}}>
                      <Progress.Bar
                        progress={item.percent / 100}
                        width={null}
                        color={Colors.primary}
                        unfilledColor={Colors.unfinishProgress}
                        borderRadius={10}
                        borderWidth={0}
                        height={8}
                        useNativeDriver={true}
                        animated={false}
                      />
                    </View>

                    <Text style={[styles.skillLabel, {textAlign:'right'}]}>{item.percent}%</Text>
                  </View>
                </View>
              </View>
            ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(SkillScreen)
