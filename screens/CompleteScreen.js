import React from 'react';
import { View, Button, StyleSheet, ScrollView } from 'react-native';
import AllToDoList from '../AllToDoList.js';
import Dimensions from 'Dimensions';
import CompleteIcon from '../icons/iOSCompleteIcon.js';

export default class CompleteScreen extends React.Component {

  
  static navigationOptions = {
    headerTitle: <CompleteIcon />,
    headerStyle: {
      backgroundColor: '#464646'
    }
  };
  
  render() {
    const currentUser = this.props.navigation.getParam('currentUser')
    return (
      <View style={styles.mainPage}>
        <ScrollView>
          <AllToDoList currentUser={currentUser} listType={"Complete"} />
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