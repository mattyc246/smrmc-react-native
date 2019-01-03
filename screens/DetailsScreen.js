import React from 'react';
import { View, Button, Text } from 'react-native';

export default class AddTaskScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Add Task',
    headerStyle: {
      backgroundColor: '#455A64'
    }
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Add Task Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}