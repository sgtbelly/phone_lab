import axios from 'axios'

function getDadJoke() {
    const request = {

        method: 'get',
        url: 'https://icanhazdadjoke.com/',
        headers: {
            'User-Agent': 'Dad Jokes Project, https://github.com/sgtbelly/phone_lab',
            Accept: 'application/json'
        },
    };

    return axios(request);
};

export default getDadJoke;

