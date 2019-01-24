const jokeApi ={
    dadJokes(){
        const url = 'https://icanhazdadjoke.com/j/R7UfaahVfFd.png'
        return fetch(url).then((res) => res.json())
    }
}
module.exports = jokeApi