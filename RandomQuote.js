import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class RandomQuote extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      quoteOfTheDay: []
    }
  }

  componentDidMount() {
    fetch('https://quotes.rest/qod.json', {
      method: 'GET'
    })
    .then((response) => {return response.json()})
    .then((data) => {
      this.setState({quoteOfTheDay: data.contents.quotes})
    })
  }

  render() {
    var quoteOfToday = this.state.quoteOfTheDay.map((quote,index) => {
      return (
        <View key={index} style={styles.quoteBox}>
          <Image source={{ uri: `${quote.background}` }} />
          <View>
            <Text style={styles.headerText}>{quote.title}</Text>
            <Text></Text>
            <Text></Text>
            <Text style={styles.secondText}>{quote.quote}</Text>
            <Text></Text>
            <Text>Author: {quote.author}</Text>
          </View>
        </View>
      )
    })
    return(
      <View>{quoteOfToday}</View>
    );
  }
}

const styles = StyleSheet.create({
  quoteBox: {
    backgroundColor: '#2ABB9B',
    padding: '5%',
    borderColor: 'black',
    borderRadius: 10,
    marginTop: 20,
    height: 300,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  secondText: {
    fontSize: 20,
  },
  emptySpace: {
    height: 130,
  }
})