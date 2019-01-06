import React from 'react';
import { View, Button, Text, StyleSheet} from 'react-native';
import AllToDoList from '../AllToDoList.js';
import Dimensions from 'Dimensions';

export default class InfoScreen extends React.Component {

  static navigationOptions = {
    headerTitle: 'Information',
    headerStyle: {
      backgroundColor: '#455A64'
    }
  };

  render() {
    
    return (
      <View style={styles.mainPage}>
        <Text>Information!</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainPage:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
