// import React from 'react';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import DetailsScreen from './screens/DetailsScreen.js';
import HomeScreen from './screens/HomeScreen.js';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
}, {
    initialRouteName: 'Home',
  });


export default createAppContainer(AppNavigator);