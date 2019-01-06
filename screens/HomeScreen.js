import React from 'react';
import { View, Button, StyleSheet, AsyncStorage } from 'react-native';
import RandomQuote from '../RandomQuote.js';

export default class HomeScreen extends React.Component {
  
  static navigationOptions = {
    headerTitle: 'Home',
    headerStyle: {
      backgroundColor: '#455A64'
    }
  };

  constructor(props){
    super(props);
    this.state = {
      currentUser: null
    }
  }

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
            color='white'
            title="Add Task"
            onPress={() => this.props.navigation.navigate('AddTask', { currentUser: this.state.currentUser })}
            />
        </View>
        <View style={styles.urgentButton}>
          <Button
            color="white"
            title="Urgent Tasks"
            onPress={() => this.props.navigation.navigate('Urgent', { currentUser: this.state.currentUser })}
          />
        </View>
        <View style={styles.incompleteButton}>
          <Button
            color="white"
            title="Incomplete Tasks"
            onPress={() => this.props.navigation.navigate('Incomplete', { currentUser: this.state.currentUser })}
          />
        </View>
        <View style={styles.pendingButton}>
          <Button
            color="white"
            title="Pending Tasks"
            onPress={() => this.props.navigation.navigate('Pending', { currentUser: this.state.currentUser })}
          />
        </View>
        <View style={styles.completeButton}>
          <Button
            color="white"
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
    backgroundColor: '#263238',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  addTaskButton: {
    backgroundColor: '#37474F',
    height: 40,
    marginTop: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white'
  },
  urgentButton: {
    backgroundColor: '#37474F',
    height: 40,
    marginTop: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white'
  },
  incompleteButton: {
    backgroundColor: '#37474F',
    height: 40,
    marginTop: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white'
  },
  pendingButton: {
    backgroundColor: '#37474F',
    height: 40,
    marginTop: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white'
  },
  completeButton: {
    backgroundColor: '#37474F',
    height: 40,
    marginTop: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white'
  }
  
})
