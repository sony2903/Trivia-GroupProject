const axios = require('axios')

class movieController{
    static show (req,res) {
        const random = Math.floor(Math.random() * 1000) + 100; 
        axios.get(`https://api.themoviedb.org/3/movie/${random}`, {
            params: {
                api_key: '5182b94d862b722b16c7c4930eeb14a2',
                language: 'en-US'
            }
        })
        .then(data => {
            res.status(200).json(data.data)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }
}

module.exports = movieController