import React from 'react';
import { View, Text, TextInput, Picker, DatePickerIOS, StyleSheet, TouchableOpacity } from 'react-native';
import OkIcon from './icons/iOSOkIcon.js';

export default class NewTask extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      taskTitle: null,
      taskDescription: null,
      taskStatus: null,
      taskCompletionDate: null,
      currentDate: new Date(),
      chooseDate: null,
      chooseStatus: null
    }
  }
  
  render(){

    let datePicker = this.state.chooseDate
      ? <View style={styles.pickerBox}>
        <DatePickerIOS textStyle={{ color: '#bdbdbd' }} onDateChange={(date) => this.setState({ taskCompletionDate: date, currentDate: date })} date={this.state.currentDate} mode="date" />
        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => this.setState({ chooseDate: null })}>
            <OkIcon />
        </TouchableOpacity>
        </View>
      : <TouchableOpacity style={styles.featureButton} onPress={() => this.setState({ chooseDate: true })}>
          <Text style={{ fontFamily: 'Raleway', fontSize: 20, color: '#1abc9c', textAlign: 'center'}}>Choose Date</Text>
        </TouchableOpacity>
    let statusPicker = this.state.chooseStatus
      ? <View style={styles.pickerBox}>
        <Picker itemStyle={{ color: 'black' }} onValueChange={(itemValue) => this.setState({ taskStatus: itemValue })} selectedValue={this.state.taskStatus} placeholder="Select status...">
            <Picker.Item label="Urgent!" value="URGENT!" />
            <Picker.Item label="Incomplete" value="Incomplete" />
            <Picker.Item label="Pending" value="Pending" />
            <Picker.Item label="Complete" value="Complete" />
          </Picker>
        <TouchableOpacity style={{ alignItems: 'center'}} onPress={() => this.setState({ chooseStatus: null })}>
          <OkIcon />
        </TouchableOpacity>
        </View>
      : <TouchableOpacity style={styles.featureButton} onPress={() => this.setState({ chooseStatus: true })}>
          <Text style={{ fontFamily: 'Raleway', fontSize: 20, color: '#1abc9c', textAlign: 'center'}}>Choose Status</Text>
        </TouchableOpacity>
  
    return (
    <View>
      <Text style={styles.headerText}>Add New Task</Text>
      <TextInput selectionColor={'#bdbdbd'} placeholderTextColor={'#bdbdbd'} style={styles.inputBox} onChangeText={(value) => this.setState({taskTitle: value})} placeholder='Enter a title'/>
      <TextInput selectionColor={'#bdbdbd'} placeholderTextColor={'#bdbdbd'} style={styles.inputBox} onChangeText={(value) => this.setState({taskDescription: value})} placeholder='Enter a description' />
      <Text style={styles.upperText}>Please choose a status...</Text>
      {statusPicker}
      <Text style={styles.bodyText}>Please choose a completion date...</Text>
      {datePicker}
      <TouchableOpacity style={styles.submitButton} onPress={() => this.props.handleFormSubmit(this.state.taskTitle, this.state.taskDescription, this.state.taskStatus, this.state.taskCompletionDate)}>
        <Text style={{ fontFamily: 'Raleway', fontSize: 20, color: '#27ae60', textAlign: 'center'}}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
  }

}

const styles = StyleSheet.create({
  taskBox: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#8E44AD',
    padding: '5%',
    borderRadius: 10,
  },
  headerText: {
    fontFamily: 'Raleway',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#bdbdbd',
    textAlign: 'center'
  },
  bodyText: {
    fontFamily: 'Raleway',
    fontSize: 15,
    color: '#bdbdbd',
    marginTop: 10,
    marginBottom: 10
  },
  upperText: {
    fontFamily: 'Raleway',
    fontSize: 15,
    color: '#bdbdbd',
    marginTop: 40
  },
  inputBox: {
    fontFamily: 'Raleway',
    borderColor: '#bdbdbd',
    borderBottomWidth: 1,
    height: 40,
    padding: 5,
    marginTop: 20
  },
  featureButton: {
    backgroundColor: '#32393d',
    height: 55,
    paddingTop: 15,
    marginTop: 10,
    borderRadius: 5
  },
  pickerBox: {
    backgroundColor: '#32393d',
    borderRadius: 15,
    padding: 3,
    marginTop: 10,
    borderRadius: 5
  },
  submitButton: {
    backgroundColor: '#32393d',
    height: 55,
    paddingTop: 15,
    marginTop: 20,
    borderRadius: 5
  }
})