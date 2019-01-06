import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import AddTask from '../NewTask.js';

export default class AddTaskScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Add Task',
    headerStyle: {
      backgroundColor: '#455A64'
    }
  };

  constructor(props){
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit(title, description, status, completionDate) {
    const currentUser = this.props.navigation.getParam('currentUser');
    console.log(currentUser)
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
    padding: '5%',
    height: '100%',
    backgroundColor: '#263238'
  }
})