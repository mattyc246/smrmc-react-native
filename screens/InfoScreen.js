import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BackIcon from '../icons/iOSBackArrow.js';
import HomeIcon from '../icons/iOSHomeIcon.js';

export default class InfoScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Information',
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
        <Text>Information!</Text>
        <TouchableOpacity style={styles.homeButton} onPress={() => this.props.navigation.goBack()}>
          <HomeIcon />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainPage:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2d2d2d',
    padding: '3%'
  },
  homeButton: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20
  }
})
