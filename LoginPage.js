import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sessionUsername: null,
      sessionPassword: null
    }
  };

  render(){
    return(
      <View>
        <View style={styles.mainBox}>
          <Text style={styles.headerText}>Self Management App</Text>
          <Text>---------------------------------------------------</Text>
          <Text style={styles.secondText}>Manage your day to day tasks. Add, update and delete them as you require.</Text>
          <Text></Text>
          <Text style={styles.secondText}>Your personal task management in the cloud.</Text>
        </View>
        <View style={styles.loginForm}>
          <Text style={styles.loginTitle}>Please Log In</Text>
          <TextInput style={styles.inputField} onChangeText={(value) => { this.setState({ sessionUsername: value }) }} placeholder='Username / Email' />
          <TextInput style={styles.inputField} onChangeText={(value) => { this.setState({ sessionPassword: value }) }} secureTextEntry={true} placeholder="Password" />
          <View style={styles.loginButton} >
            <Button color="white" onPress={() => { this.props.handleLoginSubmit(this.state.sessionUsername, this.state.sessionPassword) }} title="Log In" />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainBox: {
    backgroundColor: '#212121',
    padding: '5%',
    borderColor: 'white',
    borderWidth: 0.5,
    borderRadius: 10,
    marginTop: 30,
    height: 350,
  },
  headerText: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'white'
  },
  secondText: {
    fontSize: 20,
    color: 'white'
  },
  loginForm: {
    backgroundColor: '#F5F5F5',
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    height: 290,
    width: 370,
    padding: '5%',
  },
  loginTitle: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  inputField: {
    height: 40,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: 3,
    marginTop: 15,
    backgroundColor: '#BDBDBD'
  },
  loginButton: {
    backgroundColor: '#C91F37',
    borderColor: 'white',
    width: 333,
    height: 60,
    padding: '3%',
    marginTop: 30,
    borderRadius: 10,
    color: 'white'
  }
})