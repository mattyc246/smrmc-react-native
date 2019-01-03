import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import RandomQuote from '../RandomQuote.js';

export default class HomeScreen extends React.Component {
  
  static navigationOptions = {
    headerTitle: 'Home',
    headerStyle: {
      backgroundColor: '#1F4788'
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <RandomQuote />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5D8CAE',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
})
