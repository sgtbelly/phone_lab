import React from 'react';
import { StyleSheet, Text, View, Animated,} from 'react-native';

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

    function TheJoke(props) {
        return (
            <View style={styles.container}>
                <FadeInView style={styles.fadeIn}/>
                <Text style={styles.joke}>{props.joke}</Text>
            </View>
        )

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#DEB887',
        fontWeight: 'bold',
        fontSize: 70,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginTop: 0,
    },
    joke: {
        margin: 24,
        marginTop: 0,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
    fadeIn: {
        width: 200,
        height: 50,
    },
});

export default TheJoke;