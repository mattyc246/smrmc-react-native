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
            <Text style={styles.authorText}>Author: {quote.author}</Text>
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
    backgroundColor: '#1abc9c',
    borderRadius: 5,
    padding: '5%',
    height: 287,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5
  },
  headerText: {
    fontFamily: 'Raleway',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black'
  },
  secondText: {
    fontFamily: 'Raleway',
    fontSize: 20,
    color: 'black'
  },
  authorText: {
    fontFamily: 'Raleway',
    color: 'black'
  },
  emptySpace: {
    height: 130,
  }
})