import React from 'react';
import { View, Button, StyleSheet, ScrollView } from 'react-native';
import AllToDoList from '../AllToDoList.js';
import Dimensions from 'Dimensions';

export default class PendingScreen extends React.Component {
  
  static navigationOptions = {
    headerTitle: 'Pending',
    headerStyle: {
      backgroundColor: '#455A64'
    }
  };

  render() {
    const currentUser = this.props.navigation.getParam('currentUser')
    return (
      <View style={styles.mainPage}>
        <ScrollView>
          <AllToDoList currentUser={currentUser} listType={"Pending"} />
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
    backgroundColor: '#e53935',
    height: height * 0.88,
    padding: '5%'
  }
})