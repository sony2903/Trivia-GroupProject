const axios = require('axios')

class questionController{
    static show(req, res){
        axios.get('https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=boolean')
        .then(data => {
            res.status(200).json(data.data)
        })
        .catch(err => {
            // console.log(err)
            res.status(500).json(err)
        })
    }
}

module.exports = questionController