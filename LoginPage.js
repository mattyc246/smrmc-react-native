import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Dimensions from 'Dimensions';

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
          <Text style={styles.secondText}>-------------------------------------</Text>
          <Text style={styles.secondText}>Manage your day to day tasks. Add, update and delete them as you require.</Text>
          <Text></Text>
          <Text style={styles.secondText}>Your personal task management in the cloud.</Text>
        </View>
        <View style={styles.loginForm}>
          <Text style={styles.loginTitle}>Sign In</Text>
          <TextInput style={styles.inputField} selectionColor={'#bdbdbd'} placeholderTextColor={'#bdbdbd'} onChangeText={(value) => { this.setState({ sessionUsername: value }) }} placeholder='Username / Email' />
          <TextInput style={styles.inputField} selectionColor={'#bdbdbd'} placeholderTextColor={'#bdbdbd'} onChangeText={(value) => { this.setState({ sessionPassword: value }) }} secureTextEntry={true} placeholder="Password" />
          <View style={styles.loginButton} >
            <Button color="white" onPress={() => { this.props.handleLoginSubmit(this.state.sessionUsername, this.state.sessionPassword) }} title="Log In" textStyle={{ fontFamily: 'Futura', fontWeight: '400' }}/>
          </View>
        </View>
      </View>
    )
  }
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainBox: {
    padding: '5%',
    height: height * 0.40,
  },
  headerText: {
    fontFamily: 'Arial',
    fontSize: 50,
    fontWeight: 'bold',
    color: '#bdbdbd'
  },
  secondText: {
    fontFamily: 'Arial',
    fontSize: 20,
    color: '#bdbdbd'
  },
  loginForm: {
    height: height * 0.56,
    padding: '5%',
  },
  loginTitle: {
    fontFamily: 'Arial',
    marginTop: 40,
    fontSize: 25,
    color: '#bdbdbd',
    fontWeight: '800',
  },
  inputField: {
    fontFamily: 'Arial',
    height: 40,
    borderColor: '#bdbdbd',
    borderBottomWidth: 1.5,
    paddingLeft: 3,
    marginTop: 20
  },
  loginButton: {
    backgroundColor: '#C91F37',
    width: width * 0.95,
    height: 60,
    padding: '3%',
    marginTop: 90,
    borderRadius: 10,
    color: '#bdbdbd'
  }
})