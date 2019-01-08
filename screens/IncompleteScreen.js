import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AllToDoList from '../AllToDoList.js';
import Dimensions from 'Dimensions';
import IncompleteIcon from '../icons/iOSIncompleteIcon.js';
import BackIcon from '../icons/iOSBackArrow.js';
import HomeIcon from '../icons/iOSHomeIcon.js';

export default class IncompleteScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <IncompleteIcon />,
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
    const currentUser = this.props.navigation.getParam('currentUser')
    return (
      <View style={styles.mainPage}>
        <ScrollView>
          <AllToDoList currentUser={currentUser} listType={"Incomplete"} />
          <TouchableOpacity style={styles.homeButton} onPress={() => this.props.navigation.goBack()}>
            <HomeIcon />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  mainPage: {
    backgroundColor: '#2d2d2d',
    height: height * 0.88,
    padding: '3%'
  },
  homeButton: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20
  }
})