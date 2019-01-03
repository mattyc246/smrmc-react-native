import React from 'react';
import { View, Button, Text } from 'react-native';

export default class IncompleteScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Incomplete',
    headerStyle: {
      backgroundColor: '#455A64'
    }
  };
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Incomplete Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}