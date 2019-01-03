import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import Body from './Body.js';
import RandomQuote from './RandomQuote.js';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView bounces={false}>
        <View style={styles.container}>
          <View>
            <View style={styles.mainBox}>
                <Text style={styles.headerText}>Self Management App</Text>
                <Text>---------------------------------------------------</Text>
                <Text style={styles.secondText}>Manage your day to day tasks. Add, update and delete them as you require.</Text>
                <Text></Text>
                <Text style={styles.secondText}>Your personal task management in the cloud.</Text>
            </View>
            <View>
              <RandomQuote />
            </View>
          </View>
          <Body />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5D8CAE',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '5%',
    paddingRight: '5%' , 
  },
  mainBox: {
    backgroundColor: '#FFA631',
    padding: '5%',
    borderColor: 'black',
    borderRadius: 10,
    marginTop: 30,
    height: 350,
  },
  headerText: {
    fontSize: 42,
    fontWeight: 'bold',
  },
  secondText: {
    fontSize: 20,
  }
});
