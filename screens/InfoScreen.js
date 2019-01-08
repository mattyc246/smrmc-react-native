import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BackIcon from '../icons/iOSBackArrow.js';
import HomeIcon from '../icons/iOSHomeIcon.js';
import InfoIcon from '../icons/iOSInfoIcon.js';
import Dimensions from 'Dimensions';

export default class InfoScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <InfoIcon />,
      headerStyle: {
        backgroundColor: '#464646'
      },
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon />
        </TouchableOpacity>
      ),
      headerLeftContainerStyle: {
        paddingLeft: 15
      }
    }
  };

  render() {
    
    return (
      <View style={styles.mainPage}>
        <View style={styles.infoBox}>
          <Text style={styles.titleText}>Information</Text>
          <Text style={styles.subtitleText}>Usage Info</Text>
          <Text style={styles.bodyText}>
            There are a total of 4 categories of To Do Lists. Each category is automatically sorted when you add in the new task and give it a status. Within the lists the task that is due at the earliest date will be displayed at the top. If you decide to edit the task it will be moved the correct page and resorted as necessary based on the changes that have been made. Only PRE REGISTERED users will be able to gain access to their accounts. Feel privileged if you have made the cut.
          </Text>
          <Text style={styles.subtitleText}>Creator Info</Text>
          <Text style={styles.bodyText}>
            Lead Creator: Matthew Cross
          </Text>
          <Text style={styles.bodyText}>
            Thanks to:
          </Text>
          <Text style={styles.bodyText}>
            Anna Dayana (Graphics & UI Design)
          </Text>
          <Text style={styles.bodyText}>
            Nicholas Ong (Tech Support)
          </Text>
          <Text style={styles.bodyText}>
            Liren Yeo (Tech Support)
          </Text>
          <Text style={styles.bodyText}>
            Edwin Capel (Tech Support)
          </Text>
          <Text style={styles.subtitleText}>Contact Info</Text>
        </View>
        <TouchableOpacity style={styles.homeButton} onPress={() => this.props.navigation.goBack()}>
          <HomeIcon />
        </TouchableOpacity>
      </View>
    );
  }
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainPage:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2d2d2d',
  },
  infoBox: {
    height: 550,
    width: 380,
    marginTop: 10,
    padding: 10
  },
  homeButton: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20
  },
  titleText: {
    color: '#bdbdbd',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center'
  },
  subtitleText: {
    color: '#bdbdbd',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 20,
  },
  bodyText: {
    color: '#bdbdbd',
    fontSize: 15
  }
})
