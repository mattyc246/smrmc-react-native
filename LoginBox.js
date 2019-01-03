import React from 'react';
import { StyleSheet ,View, Text, TextInput, Button } from 'react-native';

export default class NewSession extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      sessionUsername: null,
      sessionPassword: null
    }
  }

  render(){
    return (
      <View style={styles.loginForm}>
        <Text style={styles.loginTitle}>Please Log In</Text>
        <TextInput style={styles.inputField} onChangeText={(value) => {this.setState({sessionUsername: value})}} placeholder='Username / Email' />
        <TextInput style={styles.inputField} onChangeText={(value) => {this.setState({sessionPassword: value})}} secureTextEntry={true} placeholder="Password" />
        <View style={styles.loginButton} >
          <Button color="white" onPress={() => {this.props.handleLoginSubmit(this.state.sessionUsername, this.state.sessionPassword)}} title="Log In" />
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  loginForm: {
    backgroundColor: '#6C7A89',
    borderColor: 'black',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    height: 300,
    width: 370,
    padding: '5%',
  },
  loginTitle: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  inputField: {
    height: 40,
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: 3,
    marginTop: 15,
    backgroundColor: 'white'
  },
  loginButton: {
    backgroundColor: '#C91F37',
    borderColor: 'white',
    width: 333,
    marginTop: 20,
    borderRadius: 10,
    color: 'white'
  }
})

