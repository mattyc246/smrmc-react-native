import React from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import AllToDoList from './AllToDoList.js';
import LoginBox from './LoginBox.js';
import { AsyncStorage } from 'react-native';


export default class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isLoading: false
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  };

  componentDidMount(){
    (async() => {
      try{
        const value = await AsyncStorage.getItem('token');
        if (value != null){
          this.setState({
            currentUser: value,
            isLoading: false
          })
        }
      } catch (error) {
        console.log(error)
      }
    })()
  }

  handleLoginSubmit(username, password) {
    this.setState({
      isLoading: true
    })
    let body = JSON.stringify({ user: { username: username, password: password } })
    fetch('https://smrmc.herokuapp.com/api/v1/session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => { return response.json() })
      .then((data) => {
        storeData = async (data) => {
          try {
            await AsyncStorage.setItem('token', data.token);
          } catch (error) {
            console.log(error)
          }
        }
        storeData(data)
        retrieveData = async () => {
          try{
            const value = await AsyncStorage.getItem('token');
            if (value != null){
              setTimeout(() => {
                this.setState({
                  currentUser: value,
                  isLoading: false
                })
              }, 2000);
            } 
          } catch (error) {
            alert('Error! Please try again!')
          }
        }
        retrieveData()
      })
  }

  handleLogout() {
    this.setState({
      isLoading: true
    })
    clearStorage = async () => {
      try {
        AsyncStorage.removeItem('token');
        setTimeout(() => {
          this.setState({
            currentUser: null,
            isLoading: false 
          })
        }, 2000);
      } catch (error) {
        console.log(error)
      }
    }
    clearStorage();
  }

  render () {
    var bodyMain = this.state.currentUser
    ? <AllToDoList currentUser={this.state.currentUser} />
    : <LoginBox handleLoginSubmit={this.handleLoginSubmit} />
    var bodyItem = this.state.isLoading
      ? <Image source={require('./assets/chicken.gif')}/>
      : bodyMain
    var logOut = this.state.currentUser
      ? <View style={styles.logoutButton}><Button onPress={this.handleLogout} title="Logout" color="white" /></View>
      : null
    return(
      <View>
        {bodyItem}
        {logOut}
      </View>
    )
  };
};

const styles = StyleSheet.create({
  logoutButton: {
    backgroundColor: '#C91F37',
    borderColor: 'white',
    width: 380,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 10,
    color: 'white'
  }
})