import React from 'react';
import { View, Text, Button, TextInput, Picker, DatePickerIOS, StyleSheet } from 'react-native';

export default class Task extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit(){
    if(this.state.editable){
      let title = this.title.value
      let description = this.description.value
      let status = this.status.value
      let id = this.props.task.id
      let completionDate = this.completion_date.value
      let task = {id: id, title: title, description: description, status: status, completion_date: completionDate}
      this.props.handleUpdate(task)
    }
    this.setState({
      editable: !this.state.editable
    })
  };

  render(){
    let title = this.state.editable
      ? <View style={styles.inputField}>
          <TextInput ref={input => this.title = input} defaultValue={this.props.task.title} />
        </View>
      : <Text style={styles.titleText}>{this.props.task.title}</Text>
    let description = this.state.editable
      ? <View style={styles.inputField}>
          <TextInput ref={input => this.description = input} defaultValue={this.props.task.description} />
        </View>
      : <Text style={styles.descriptionText}>{this.props.task.description}</Text>
    let status = this.state.editable
      ? <View style={styles.pickerBox}>
          <Picker ref={input => this.status = input} selectedValue={this.props.task.status}>
            <Picker.Item label="Urgent!" value="URGENT!" />
            <Picker.Item label="Incomplete" value="Incomplete" />
            <Picker.Item label="Pending" value="Pending" />
            <Picker.Item label="Complete" value="Complete" />
          </Picker>
        </View>
      : <Text style={styles.statusText}>Task Status: {this.props.task.status}</Text>
    let date = this.state.editable
      ? <View style={styles.pickerBox}>
          <DatePickerIOS ref={input => this.completion_date = input} date={new Date()} mode="date" />
        </View>
      : <Text style={styles.dateText}>Complete By: {this.props.task.completion_date}</Text>
    return(
      <View style={styles.taskCard}>
        {title}
        {date}
        {status}
        {description}
        <View style={styles.editButton}>
          <Button color="white" onPress={() => this.handleEdit()} title={this.state.editable ? 'Submit' : 'Edit'} />
        </View>
        <View style={styles.removeButton}>
          <Button color="white" onPress={() => this.props.handleDelete(this.props.task.id)} title="Remove Task!"/>
        </View>
      </View>
    )

  }

}

const styles = StyleSheet.create({
  taskCard:{
    backgroundColor: 'black',
    borderRadius: 10,
    padding: '3%',
    marginBottom: 5
  },
  titleText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  },
  statusText: {
    color: 'white',
    fontSize: 20
  },
  dateText: {
    color: 'white',
    fontSize: 15
  },
  descriptionText: {
    color: 'white',
    fontSize: 20
  },
  editButton: {
    backgroundColor: '#FFA631',
    height: 40,
    marginTop: 5,
    borderRadius: 5
  },
  removeButton: {
    backgroundColor: '#C91F37',
    height: 40,
    marginTop: 5,
    borderRadius: 5
  },
  inputField: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    marginTop: 5,
    padding: 10
  },
  pickerBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: '5%',
    marginTop: 5
  }
})