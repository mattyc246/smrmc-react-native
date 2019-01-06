import React from 'react';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import AddTaskScreen from './screens/AddTaskScreen.js';
import HomeScreen from './screens/HomeScreen.js';
import UrgentScreen from './screens/UrgentScreen.js';
import IncompleteScreen from './screens/IncompleteScreen.js';
import PendingScreen from './screens/PendingScreen.js';
import CompleteScreen from './screens/CompleteScreen.js';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  AddTask: {
    screen: AddTaskScreen,
  },
  Urgent: {
    screen: UrgentScreen,
  },
  Incomplete: {
    screen: IncompleteScreen,
  },
  Pending: {
    screen: PendingScreen,
  },
  Complete: {
    screen: CompleteScreen,
  }

}, {
    initialRouteName: 'Home',
  });


export default createAppContainer(AppNavigator);