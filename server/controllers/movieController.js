const axios = require('axios')
require('dotenv').config()

class movieController{
    static show (req,res) {
        const randomFilm = Math.floor(Math.random() * 10) + 1; 
        const randomPage = Math.floor(Math.random() * 100) + 1;
        var film = {}
            axios.get(`https://api.themoviedb.org/3/discover/movie?`, {
                params: {
                    api_key: process.env.themoviedbAPIKey,
                    language: 'en-US',
                    sort_by: 'popularity.desc',
                    page: randomPage
                }
            })
            .then(data => {
                var title = data.data.results[randomFilm].title
                title = title.split(' ').join('+')
                console.log(title)
                axios.get(`http://www.omdbapi.com/?t=${title}&apikey=30edb524`)
                .then(resp => {
                    film = resp.data
                    res.status(200).json(film) 
                })
            })
            
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static review(req, res){
        console.log(req.params.title)
        axios.get('https://api.nytimes.com/svc/movies/v2/reviews/search.json?', {
            params: {
                "query": req.params.title,
                "api-key": process.env.NYTAPIKey
            }
        }).then(data => {
            res.status(200).json(data.data)
        }).catch(err => {
            res.status(500).json(err)
        })
    }
}

module.exports = movieController