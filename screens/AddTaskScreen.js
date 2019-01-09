import React from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AddTask from '../NewTask.js';
import NewTaskIcon from '../icons/iOSNewTask.js';
import HomeIcon from '../icons/iOSHomeIcon.js';
import BackIcon from '../icons/iOSBackArrow.js';

export default class AddTaskScreen extends React.Component {
  constructor(props){
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <NewTaskIcon/> ,
      headerStyle: {
        backgroundColor: '#464646'
      },
      headerLeft: (
        <TouchableOpacity onPress={ () => navigation.goBack() }>
          <BackIcon />
        </TouchableOpacity>
      ),
      headerLeftContainerStyle: {
        paddingLeft: 15
      }
    }
  };


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
      .then((task) => Alert.alert(
        'Task Added to ' + task[0].status,
        'To be completed by: ' + task[0].completion_date,
        [
          { text: 'OK', onPress: () => this.props.navigation.goBack() },
        ],
        { cancelable: false }
      ))
  }

  render() {
    return (
      <View style={styles.newTaskBox}>
        <View>
          <AddTask handleFormSubmit={this.handleFormSubmit}/>
        </View>
        <TouchableOpacity style={styles.homeButton} onPress={() => this.props.navigation.goBack()}>
          <HomeIcon />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  newTaskBox: {
    height: '100%',
    backgroundColor: '#2d2d2d',
    padding: '3%'
  },
  homeButton: { 
    flex: 1, 
    alignItems: 'center',
    marginTop: 20
   }
})