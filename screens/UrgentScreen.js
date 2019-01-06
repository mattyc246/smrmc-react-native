import React from 'react';
import { View, Button, Text, ScrollView, StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';
import AllToDoList from '../AllToDoList.js';

export default class UrgentScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Urgent',
    headerStyle: {
      backgroundColor: '#455A64'
    }
  };

  render() {
    const currentUser = this.props.navigation.getParam('currentUser')
    return (
      <View style={styles.mainPage}>
        <ScrollView>
          <AllToDoList currentUser={currentUser} listType={"URGENT!"}/>
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