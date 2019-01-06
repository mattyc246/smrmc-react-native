import React from 'react';
import Task from './Task.js';
import { StyleSheet, Text, View } from 'react-native';

export default class AllToDoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todolist: []
    };
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
      console.log(data)
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

  render() {

    let taskList = this.state.todolist.map((task, index) => {
      if(task.status == this.props.listType){
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
        <View>
          {taskList}
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