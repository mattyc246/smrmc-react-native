import React from 'react';
import { View, Text, Button, TextInput, Picker, DatePickerIOS, StyleSheet } from 'react-native';

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
          <DatePickerIOS onDateChange={(date) => this.setState({ taskCompletionDate: date, currentDate: date })} date={this.state.currentDate} mode="date" />
          <Button onPress={() => this.setState({chooseDate: null})} color='black' title='Ok' />
        </View>
      : <View style={styles.featureButton}><Button color='white' onPress={() => this.setState({ chooseDate: true })} title="Choose Date" /></View>
    let statusPicker = this.state.chooseStatus
      ? <View style={styles.pickerBox}>
          <Picker onValueChange={(itemValue) => this.setState({ taskStatus: itemValue })} selectedValue={this.state.taskStatus} placeholder="Select status...">
            <Picker.Item label="Urgent!" value="URGENT!" />
            <Picker.Item label="Incomplete" value="Incomplete" />
            <Picker.Item label="Pending" value="Pending" />
            <Picker.Item label="Complete" value="Complete" />
          </Picker>
          <Button onPress={() => this.setState({ chooseStatus: null })} color='black' title='Ok'/>  
        </View>
      : <View style={styles.featureButton}><Button color='white' onPress={() => this.setState({ chooseStatus: true })} title="Choose Status" /></View>
  
    return (
    <View>
      <Text style={styles.headerText}>Add New Task:</Text>
      <TextInput style={styles.inputBox} onChangeText={(value) => this.setState({taskTitle: value})} placeholder='Enter a title'/>
      <TextInput style={styles.inputBox} onChangeText={(value) => this.setState({taskDescription: value})} placeholder='Enter a description' />
      {statusPicker}
      {datePicker}
      <View style={styles.submitButton}>
        <Button color='white' onPress={() => this.props.handleFormSubmit(this.state.taskTitle, this.state.taskDescription, this.state.taskStatus, this.state.taskCompletionDate)} title="Submit" />
      </View>
    </View>
  )
  }

}

const styles = StyleSheet.create({
  taskBox: {
    backgroundColor: '#8E44AD',
    padding: '5%',
    borderRadius: 10,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  inputBox: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    padding: 5,
    marginTop: 10
  },
  featureButton: {
    backgroundColor: '#4B77BE',
    height: 40,
    marginTop: 10,
    borderRadius: 5
  },
  pickerBox: {
    backgroundColor: 'white',
    padding: 3,
    marginTop: 10,
    borderRadius: 5
  },
  submitButton: {
    backgroundColor: '#006442',
    height: 40,
    marginTop: 10,
    borderRadius: 5
  }
})