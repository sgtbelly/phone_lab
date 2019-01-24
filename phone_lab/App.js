import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import api from './utilities/api.js';



export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      joke: '',
    }
  }

  componentDidMount(){
    api.jokePics().then((res) => {
      this.setState({
        joke: res.joke,
      })
    })
        .catch((error) => {
          console.error(error)
        })
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style ={styles.text}>{this.state.joke}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontSize: 15,
    padding: 10
  }
});
