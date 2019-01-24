const api = {
    jokePics(){
        const url = 'https://icanhazdadjoke.com/';
        return fetch(url).then((res) => res.json())
    }
}
module.exports = api;