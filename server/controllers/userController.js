const {User} = require('../models')
const {encrypt, compare} = require('../helper/bcrypt')
const {generateToken, giveSecretKey} = require('../helper/jsonwebtoken')

class userController{
    static register(req, res){
        const dataX = {
            email: req.body.email,
            password:req.body.password
        }
        // console.log(dataX)
        User.create(dataX)
        .then(data =>{
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json({message: 'Username/Password isnt Complete'})
        })
    }

    static login(req, res){
        const dataX = {
            email: req.body.email,
            password: req.body.password
        }
        if(!dataX.email){
            res.status(404).json({message: 'Wrong Username/Password'})
        } else{
            User.findOne({where: {email: dataX.email}})
            .then(data => {
                console.log(data)
                if(!data.data){
                    res.status(404).json({message: 'Wrong Username/Password'})
                } else if(!compare(dataX.password, data.password)){
                    res.status(404).json({message: 'Wrong Username/Password'})
                } else {
                    const access_token = generateToken(data)
                    res.status(200).json({access_token: access_token})
                }
            })
            .catch(err => {
                res.status(400).json(err)
            })
        }
    }

    
}

module.exports = userController