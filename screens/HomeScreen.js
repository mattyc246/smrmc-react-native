import React from 'react';
import { View, StyleSheet, AsyncStorage, TouchableOpacity, Text } from 'react-native';
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
        <TouchableOpacity 
          style={styles.addTaskButton} 
          onPress={() => this.props.navigation.navigate('AddTask', { currentUser: this.state.currentUser })}
          >
          <Text style={{ fontFamily: 'Raleway', color: '#16a085', fontSize: 20, textAlign: 'center' }}>Add New Task</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.urgentButton}
          onPress={() => this.props.navigation.navigate('Urgent', { currentUser: this.state.currentUser })}
          >
          <Text style={{ fontFamily: 'Raleway', color: '#c0392b', fontSize: 20, textAlign: 'center'}}>Urgent Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.incompleteButton}
          onPress={() => this.props.navigation.navigate('Incomplete', { currentUser: this.state.currentUser })}
          >
          <Text style={{ fontFamily: 'Raleway', color: '#2980b9', fontSize: 20, textAlign: 'center' }}>Incomplete Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.pendingButton}
          onPress={() => this.props.navigation.navigate('Pending', { currentUser: this.state.currentUser })}
          >
          <Text style={{ fontFamily: 'Raleway', color: '#f1c40f', fontSize: 20, textAlign: 'center' }}>Pending Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.completeButton}
          onPress={() => this.props.navigation.navigate('Complete', { currentUser: this.state.currentUser })}
          >
          <Text style={{ fontFamily: 'Raleway', color: '#27ae60', fontSize: 20, textAlign: 'center' }}>Complete Tasks</Text>
        </TouchableOpacity>
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
    paddingTop: 15
  },
  urgentButton: {
    backgroundColor: '#32393d',
    height: 55,
    margin: 5,
    borderRadius: 5,
    borderColor: 'black',
    paddingTop: 15
  },
  incompleteButton: {
    backgroundColor: '#32393d',
    height: 55,
    margin: 5,
    borderRadius: 5,
    borderColor: 'black',
    paddingTop: 15
  },
  pendingButton: {
    backgroundColor: '#32393d',
    height: 55,
    margin: 5,
    borderRadius: 5,
    borderColor: 'black',
    paddingTop: 15
  },
  completeButton: {
    backgroundColor: '#32393d',
    height: 55,
    margin: 5,
    borderRadius: 5,
    borderColor: 'black',
    paddingTop: 15
  }
  
})
