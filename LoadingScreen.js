import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Dimensions from 'Dimensions';

const LoadingScreen = () => {

  return(
    <View>
      <View style={styles.container}>
        <Text style={styles.loadingText}>Be Right Back...</Text>
        <Image source={require('./assets/chicken.gif')} />
      </View>
    </View>
  )

}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  loadingText: {
    fontFamily: 'Arial',
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 25
  }
})

export default LoadingScreen;