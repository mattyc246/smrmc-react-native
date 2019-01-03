import React from 'react';
import { ScrollView, 
         StyleSheet,
         View,
         Button,
         SafeAreaView,
         KeyboardAvoidingView,
         AsyncStorage } from 'react-native';
import Dimensions from 'Dimensions';
import HomePage from './HomePage.js';
import LoginPage from './LoginPage.js';
import LoadingScreen from './LoadingScreen.js';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isLoading: false
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount(){
    setUser = async() => {
      try{
        const value = await AsyncStorage.getItem('token');
        if(value != null){
          this.setState({
            currentUser: value
          })
          setTimeout(() => {
            this.setState({
              isLoading: false
            })
          }, 2000)
        }
      } catch (error) {
        console.log(error)
      }
    }
    setUser() 
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
        try {
          const value = await AsyncStorage.getItem('token');
          if (value != null) {
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
        await AsyncStorage.removeItem('token');
        this.setState({
          currentUser: null,
        })
        setTimeout(() => {
          this.setState({
            isLoading: false
          })
        }, 2000);
      } catch (error) {
        console.log(error)
      }
    }
    clearStorage();
  }

  render() {
    let mainScreen = this.state.currentUser
      ? <View>
          <View style={styles.navigatorBox}>
            <HomePage />
            <View style={styles.logoutButton}>
              <Button onPress={() => this.handleLogout()} title="Logout" color="white" />
            </View>
          </View>
        </View>
      : <LoginPage handleLoginSubmit={this.handleLoginSubmit} />
    let loadingState = !this.state.isLoading
      ? mainScreen
      : <LoadingScreen />
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
        <KeyboardAvoidingView behavior="padding" enabled>
          <ScrollView bounces={false}>
            <View style={styles.container}>
              {loadingState}
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const {width, height} = Dimensions.get('window'); 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#263238',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '5%',
    paddingRight: '5%' , 
  },
  navigatorBox: {
    width: width,
    height: height * 0.97
  },
  logoutButton: {
    backgroundColor: '#C91F37',
    width: width,
    color: 'white'
  },
});
