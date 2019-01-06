import React from 'react';
import { View, Button, Text } from 'react-native';
import AllToDoList from '../AllToDoList.js';

export default class CompleteScreen extends React.Component {

  
  static navigationOptions = {
    headerTitle: 'Complete',
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
        <Text>Complete Screen</Text>
        <AllToDoList currentUser={currentUser} listType={"Complete"} />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}