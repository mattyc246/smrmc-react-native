import React from 'react';
import { View, Button, StyleSheet, ScrollView } from 'react-native';
import AllToDoList from '../AllToDoList.js';
import Dimensions from 'Dimensions';
import IncompleteIcon from '../icons/iOSIncompleteIcon.js';

export default class IncompleteScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <IncompleteIcon />,
    headerStyle: {
      backgroundColor: '#464646'
    }
  };
  
  render() {
    const currentUser = this.props.navigation.getParam('currentUser')
    return (
      <View style={styles.mainPage}>
        <ScrollView>
          <AllToDoList currentUser={currentUser} listType={"Incomplete"} />
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.goBack()}
          />
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
  }
})