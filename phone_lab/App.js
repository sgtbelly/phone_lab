import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import api from


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      permission: null,
    }
  }

  async componentDidMount() {
    await this.checkPremissionsAsync();
  }

  checkPremissionsAsync = async () => {
    const {status} = await Expo.Premissions.askAsync(Expo.Premissions.Contacts);
    console.log(status);
  }



  showJokes = () => {

  }

  <Botton
  onpress={onPressGetJoke}
  title="Get Joke"
  color="#841584"
  accessibilityLabel="Get a Joke"
  />



  render() {

    return (
      <View style={styles.container}>
        <Text>DAD JOKES</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  section: {
    margin
  }
  container: {
    flex: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',


  },
});
