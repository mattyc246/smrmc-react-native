import React from 'react';
import NewTask from './NewTask.js';
import Task from './Task.js';
import { StyleSheet, Text, View } from 'react-native';

export default class AllToDoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todolist: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewTask = this.addNewTask.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.updateTask = this.updateTask.bind(this)

  }

  componentDidMount(){
    fetch('https://smrmc.herokuapp.com/api/v1/todolist.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.props.currentUser}`
      }
    })
    .then((response) => { if(response.statusText != 'No Content'){return response.json() }})
    .then((data) => {
      if(data){
        this.setState({ todolist: data })
      }
    })

  }

  handleUpdate(task){
    fetch(`https://smrmc.herokuapp.com/api/v1/todolist/${task.id}`, {
      method: 'PUT',
      body: JSON.stringify({todolist: task}),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.props.currentUser}`
      }
    })
    .then((response) => {this.updateTask(task)})
  }

  updateTask(task) {
    let newTasks = this.state.todolist.filter((t) => t.id !== task.id)
    newTasks.push(task)
    this.setState({todolist: newTasks})
  }

  handleDelete(id){
    fetch(`https://smrmc.herokuapp.com/api/v1/todolist/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.props.currentUser}`
      }
    })
    .then((response) => {this.deleteTask(id)})
  }

  deleteTask(id){
    newTasks = this.state.todolist.filter((t) => t.id !== id)
    this.setState({
      todolist: newTasks
    })
  }

  handleFormSubmit(title, description, status, completionDate) {
    let body = JSON.stringify({ todolist: { title: title, description: description, status: status, completion_date: completionDate } })
    fetch('https://smrmc.herokuapp.com/api/v1/todolist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.props.currentUser}`
      },
      body: body,
    }).then((response) => { return response.json() })
      .then((task) => { this.addNewTask(task) })
  }

  addNewTask(task) {
    this.setState({
      todolist: this.state.todolist.concat(task)
    })
  }

  render() {

    var urgentList = this.state.todolist.map((task, index) => {
      if(task.status == 'URGENT!'){
        return (
          <View key={index}>
            <View key={task.id}>
              <Task task={task} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} />
            </View>
          </View>
        )
      }
    })

    var incompleteList = this.state.todolist.map((task, index) => {
      if (task.status == 'Incomplete') {
        return (
          <View key={index}>
            <View key={task.id}>
              <Task task={task} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} />
            </View>
          </View>
        )
      }
    })

    var pendingList = this.state.todolist.map((task, index) => {
      if (task.status == 'Pending') {
        return (
          <View key={index}>
            <View key={task.id}>
              <Task task={task} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} />
            </View>
          </View>
        )
      }
    })

    var completeList = this.state.todolist.map((task, index) => {
      if (task.status == 'Complete') {
        return (
          <View key={index}>
            <View key={task.id}>
              <Task task={task} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} />
            </View>
          </View>
        )
      }
    })

    return (
      <View>
        <View style={styles.instructionBox}>
          <Text style={styles.headerText}>Getting Started:</Text>
          <Text></Text>
          <Text style={styles.secondText}>There are 4 categories of tasks available: Urgent, Incomplete, Complete and Pending.</Text>
          <Text style={styles.secondText}>Choose your category and they will be automatically sorted for you.</Text>
          <Text style={styles.secondText}>It's as simple as that.</Text>
          <Text></Text>
          <Text style={styles.secondText}>Click 'Submit' to add the new task.</Text>
        </View>
        <View>
          <NewTask handleFormSubmit={this.handleFormSubmit} />
        </View>
        <View>
          <View style={styles.urgentBox}>
            <Text style={styles.headerText}>Urgent Tasks:</Text>
            <Text></Text>
            <View>
              {urgentList}
            </View>
          </View>
        </View>
        <View>
          <View style={styles.incompleteBox}>
            <Text style={styles.headerText}>Incomplete Tasks:</Text>
            <Text></Text>
            <View>
              {incompleteList}
            </View>
          </View>
        </View>
        <View>
          <View style={styles.pendingBox}>
            <Text style={styles.headerText}>Pending Tasks:</Text>
            <Text></Text>
            <View>
              {pendingList}
            </View>
          </View>
        </View>
        <View>
          <View style={styles.completeBox}>
            <Text style={styles.headerText}>Complete Tasks:</Text>
            <Text></Text>
            <View>
              {completeList}
            </View>
          </View>
        </View>
      </View>
      
    );

  };

};

const styles = StyleSheet.create({
  instructionBox: {
    backgroundColor: '#FFA631',
    borderColor: 'black',
    borderRadius: 10,
    padding: '5%',
    marginTop: 20,
    marginBottom: 20
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black'
  },
  secondText: {
    fontSize: 20,
  },
  urgentBox: {
    backgroundColor: '#C91F37',
    borderColor: 'black',
    borderRadius: 10,
    padding: '5%',
    marginTop: 20
  },
  incompleteBox: {
    backgroundColor: '#19B5FE',
    borderColor: 'black',
    borderRadius: 10,
    padding: '5%',
    marginTop: 20
  }, 
  pendingBox: {
    backgroundColor: '#CA6924',
    borderColor: 'black',
    borderRadius: 10,
    padding: '5%',
    marginTop: 20
  }, 
  completeBox: {
    backgroundColor: '#4DAF7C',
    borderColor: 'black',
    borderRadius: 10,
    padding: '5%',
    marginTop: 20
  }
});