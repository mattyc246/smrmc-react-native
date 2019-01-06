import React from 'react';
import { View, Button, Text } from 'react-native';
import AllToDoList from '../AllToDoList.js';

export default class IncompleteScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Incomplete',
    headerStyle: {
      backgroundColor: '#455A64'
    }
  };
  
  render() {
    const currentUser = this.props.navigation.getParam('currentUser')
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e53935'
      }}>
        <Text>Incomplete Screen</Text>
        <AllToDoList currentUser={currentUser} listType={"Incomplete"} />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}