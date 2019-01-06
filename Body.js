import React from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import AllToDoList from './AllToDoList.js';
import { AsyncStorage } from 'react-native';


export default class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isLoading: false
    }
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

  render () {
    var bodyMain = this.state.currentUser
    ? <AllToDoList currentUser={this.state.currentUser} />
    : null
    var bodyItem = this.state.isLoading
      ? <Image source={require('./assets/chicken.gif')}/>
      : bodyMain
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