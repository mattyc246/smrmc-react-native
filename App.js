import React from 'react';
import { ScrollView, 
         StyleSheet,
         View,
         TouchableOpacity,
         Text,
         KeyboardAvoidingView,
         AsyncStorage } from 'react-native';
import Dimensions from 'Dimensions';
import HomePage from './HomePage.js';
import LoginPage from './LoginPage.js';
import LoadingScreen from './LoadingScreen.js';
import { Font } from 'expo';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isLoading: false,
      fontLoaded: false
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  async componentDidMount(){
    await Font.loadAsync({
      'Thasadith': require('./assets/fonts/Thasadith-Regular.ttf'),
      'Raleway': require('./assets/fonts/Raleway-Regular.ttf'),
      'Raleway-Bold': require('./assets/fonts/Raleway-Bold.ttf')
    });
    this.setState({
      fontLoaded: true
    })
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
            <HomePage currentUser={this.state.currentUser} />
            <TouchableOpacity onPress={() => this.handleLogout()}>
              <Text style={styles.logoutButton}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      : <LoginPage handleLoginSubmit={this.handleLoginSubmit} />
    let loadingState = !this.state.isLoading
      ? mainScreen
      : <LoadingScreen />
    return (
        <KeyboardAvoidingView behavior="padding" enabled>
          <ScrollView bounces={false}>
            <View style={styles.container}>
              {this.state.fontLoaded ? (loadingState) : null}
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
    );
  }
}

const {width, height} = Dimensions.get('window'); 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    backgroundColor: '#2d2d2d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigatorBox: {
    width: width,
    height: height
  },
  logoutButton: {
    backgroundColor: '#C91F37',
    width: width,
    color: '#bdbdbd',
    fontFamily: 'Raleway',
    textAlign: 'center',
    fontSize: 20,
    height: 40,
    padding: 7
  },
});
