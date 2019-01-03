import React from 'react';
import { View, Button, Text } from 'react-native';

export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Details',
    headerStyle: {
      backgroundColor: '#1F4788'
    }
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}