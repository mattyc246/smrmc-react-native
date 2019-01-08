import React from 'react';
import { View, Button, StyleSheet, AsyncStorage, TouchableOpacity } from 'react-native';
import HomeIcon from '../icons/iOSHomeIcon.js';
import RandomQuote from '../RandomQuote.js';
import InfoIcon from '../icons/iOSInfoIcon.js';

export default class HomeScreen extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      currentUser: null
    }
  }
  

  static navigationOptions = ({navigation}) => {
    return{

      headerTitle: <HomeIcon />,
      headerStyle: {
        backgroundColor: '#464646',
      },
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Info')} >
          <InfoIcon />
        </TouchableOpacity>
      ),
      headerRightContainerStyle: {
        paddingRight: 15
      }
    }
  };


  componentDidMount(){
    setUser = async () => {
      try {
        const value = await AsyncStorage.getItem('token');
        if (value != null) {
          this.setState({
            currentUser: value
          })
        }
      } catch (error) {
        console.log(error)
      }
    }
    setUser()
  }

  render() {
    return (
      <View style={styles.container}>
        <RandomQuote />
        <View style={styles.addTaskButton}>
          <Button
            color="#16a085"
            title="Add Task"
            onPress={() => this.props.navigation.navigate('AddTask', { currentUser: this.state.currentUser })}
            />
        </View>
        <View style={styles.urgentButton}>
          <Button
            color="#c0392b"
            title="Urgent Tasks"
            onPress={() => this.props.navigation.navigate('Urgent', { currentUser: this.state.currentUser })}
          />
        </View>
        <View style={styles.incompleteButton}>
          <Button
            color="#2980b9"
            title="Incomplete Tasks"
            onPress={() => this.props.navigation.navigate('Incomplete', { currentUser: this.state.currentUser })}
          />
        </View>
        <View style={styles.pendingButton}>
          <Button
            color="#f1c40f"
            title="Pending Tasks"
            onPress={() => this.props.navigation.navigate('Pending', { currentUser: this.state.currentUser })}
          />
        </View>
        <View style={styles.completeButton}>
          <Button
            color="#27ae60"
            title="Complete Tasks"
            onPress={() => this.props.navigation.navigate('Complete', { currentUser: this.state.currentUser })}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d2d2d',
    padding: '3%'
  },
  addTaskButton: {
    backgroundColor: '#32393d',
    height: 55,
    margin: 5,
    borderRadius: 5,
    borderColor: 'black',
    paddingTop: 10
  },
  urgentButton: {
    backgroundColor: '#32393d',
    height: 55,
    margin: 5,
    borderRadius: 5,
    borderColor: 'black',
    paddingTop: 10
  },
  incompleteButton: {
    backgroundColor: '#32393d',
    height: 55,
    margin: 5,
    borderRadius: 5,
    borderColor: 'black',
    paddingTop: 10
  },
  pendingButton: {
    backgroundColor: '#32393d',
    height: 55,
    margin: 5,
    borderRadius: 5,
    borderColor: 'black',
    paddingTop: 10
  },
  completeButton: {
    backgroundColor: '#32393d',
    height: 55,
    margin: 5,
    borderRadius: 5,
    borderColor: 'black',
    paddingTop: 10
  }
  
})
