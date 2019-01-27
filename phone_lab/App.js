import React from 'react';
import { StyleSheet, Text, View, Animated, Button } from 'react-native';
import TheJoke from './Screens/jokes.js';
import getDadJoke from './utilities/api.js';
import Communications from 'react-native-communications';


class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),
  }

  componentDidMount() {
    Animated.timing(
        this.state.fadeAnim,
        {
          toValue: 1,
          duration: 10000,
        }
    ).start();
  }

  render() {
    let { fadeAnim } = this.state;

    return(
        <Animated.View
          style={{
          ...this.props.style,
          opacity: fadeAnim,
          }}
          >
          {this.props.children}
        </Animated.View>

    );
  }
}


class App extends React.Component {
    state = {
        joke:'',
        showJoke: false,
    };

  getJoke = () => {
    getDadJoke()
        .then(response =>
            this.setState({
              joke: response.data.joke,
                showJoke: true,
            })

        );
  };

  sendSMS = payload =>{
      console.log(payload);
      Communications.textWithoutEncoding('',payload)
  }


  render() {
      return (
          <View style={styles.container}>
              <FadeInView style={styles.fadeIn}/>
              <Text style={styles.text}>DAD JOKES</Text>
              {this.state.showJoke ? <TheJoke joke={this.state.joke} /> : null}
              <Button
                  title={`Get A Dad Joke`}
                  onPress={this.getJoke}
              />
              { this.state.showJoke === true ? <Button style={{width:'50%;', borderRadius: 4, padding: 24 }}
                  title={'TEXT JOKE'}
                  onPress={()=>{this.sendSMS(this.state.joke)}}
                  /> :null }

          </View>
      );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AFEEEE',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 0,
  },
  text: {
    color: '#DEB887',
    fontWeight: 'bold',
    fontSize: 70,
    textAlign: 'center',
    textAlignVertical: 'top',
    marginTop: 0,
  },
  fadeIn: {
    width: 200,
    height: 50,
    },
});

export default App;

