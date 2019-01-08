import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import AddTask from '../NewTask.js';
import AddNoteIcon from '../icons/AddNoteIcon.js';

export default class AddTaskScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <AddNoteIcon/> ,
    headerStyle: {
      backgroundColor: '#464646'
    }
  };

  constructor(props){
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit(title, description, status, completionDate) {
    const currentUser = this.props.navigation.getParam('currentUser');
    let body = JSON.stringify({ todolist: { title: title, description: description, status: status, completion_date: completionDate } })
    fetch('https://smrmc.herokuapp.com/api/v1/todolist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${currentUser}`
      },
      body: body,
    }).then((response) => { return response.json() })
      .then((task) => { this.props.navigation.goBack() })
  }

  render() {
    return (
      <View style={styles.newTaskBox}>
        <View>
          <AddTask handleFormSubmit={this.handleFormSubmit}/>
        </View>
        <Button
          color='white'
          title="Go to Home"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  newTaskBox: {
    height: '100%',
    backgroundColor: '#2d2d2d',
    padding: '3%'
  }
})