import React from 'react';
import { View, Text, Button, TextInput, Picker, DatePickerIOS, StyleSheet, TouchableOpacity } from 'react-native';
import OkIcon from './icons/iOSOkIcon.js';

export default class Task extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      editDate: false,
      editStatus: false,
      currentDate: new Date(this.props.task.completion_date),
      currentStatus: this.props.task.status,
      currentTitle: this.props.task.title,
      currentDescription: this.props.task.description
    }
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit(){
    if(this.state.editable){
      let title = this.state.currentTitle
      let description = this.state.currentDescription
      let status = this.state.currentStatus
      let id = this.props.task.id
      let completionDate = this.state.currentDate
      let task = {id: id, title: title, description: description, status: status, completion_date: completionDate}
      this.props.handleUpdate(task)
    }
    this.setState({
      editable: !this.state.editable
    })
  };

  render(){
    let chooseDate = !this.state.editDate
      ? <View style={styles.editButton}>
          <Button color='#f39c12' onPress={() => this.setState({ editDate: true })} title="Edit Completion Date" />
        </View>
      : <View style={styles.pickerBox}>
          <DatePickerIOS onDateChange={(date) => this.setState({ currentDate: date })} ref={input => this.completion_date = input} date={this.state.currentDate} mode="date" />
          <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => this.setState({ editDate: false })}>
            <OkIcon />
          </TouchableOpacity>
        </View>
    let chooseStatus = !this.state.editStatus
      ? <View style={styles.editButton}>
          <Button color='#f39c12' onPress={() => this.setState({ editStatus: true })} title="Edit Status" />
        </View>
      : <View style={styles.pickerBox}>
          <Picker onValueChange={(itemValue) => this.setState({ currentStatus: itemValue })} ref={input => this.status = input} selectedValue={this.state.currentStatus}>
            <Picker.Item label="Urgent!" value="URGENT!" />
            <Picker.Item label="Incomplete" value="Incomplete" />
            <Picker.Item label="Pending" value="Pending" />
            <Picker.Item label="Complete" value="Complete" />
          </Picker>
          <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => this.setState({ editStatus: false })}>
            <OkIcon />
          </TouchableOpacity>
        </View>
    let title = this.state.editable
      ? <View style={styles.inputField}>
          <TextInput onChangeText={(text) => this.setState({ currentTitle: text })} ref={input => this.title = input} defaultValue={this.props.task.title} />
        </View>
      : <Text style={styles.titleText}>{this.props.task.title}</Text>
    let description = this.state.editable
      ? <View style={styles.inputField}>
        <TextInput onChangeText={(text) => this.setState({ currentDescription: text })} ref={input => this.description = input} defaultValue={this.props.task.description} />
        </View>
      : <View>
          <Text style={styles.descriptionText}>Task Description:</Text><Text style={styles.descriptionText}>{this.props.task.description}</Text>
        </View>
    let status = this.state.editable
      ? chooseStatus
      : <Text style={styles.statusText}>Task Status: {this.props.task.status}</Text>
    let date = this.state.editable
      ? chooseDate
      : <Text style={styles.dateText}>Complete By: {this.props.task.completion_date}</Text>
    return(
      <View style={styles.taskCard}>
        {title}
        {date}
        {status}
        {description}
        <View style={styles.editButton}>
          <Button color="#f39c12" onPress={() => this.handleEdit()} title={this.state.editable ? 'Submit' : 'Edit'} />
        </View>
        <View style={styles.removeButton}>
          <Button color="#c0392b" onPress={() => this.props.handleDelete(this.props.task.id)} title="Remove Task"/>
        </View>
      </View>
    )

  }

}

const styles = StyleSheet.create({
  taskCard:{
    backgroundColor: '#464646',
    borderRadius: 10,
    padding: '3%',
    marginBottom: 5
  },
  titleText: {
    color: '#bdbdbd',
    fontSize: 25,
    fontWeight: 'bold'
  },
  statusText: {
    color: '#bdbdbd',
    fontSize: 20
  },
  dateText: {
    color: '#bdbdbd',
    fontSize: 15
  },
  descriptionText: {
    color: '#bdbdbd',
    fontSize: 20
  },
  editButton: {
    backgroundColor: '#32393d',
    height: 55,
    marginTop: 15,
    borderRadius: 5,
    paddingTop: 10
  },
  removeButton: {
    backgroundColor: '#32393d',
    height: 55,
    marginTop: 15,
    borderRadius: 5,
    paddingTop: 10
  },
  inputField: {
    borderColor: '#bdbdbd',
    borderBottomWidth: 1,
    height: 40,
    marginTop: 5,
    padding: 10
  },
  pickerBox: {
    backgroundColor: '#464646',
    borderRadius: 10,
    padding: '5%',
    marginTop: 5
  }
})