const { User } = require('../models');
const { encrypt, compare } = require('../helper/bcrypt');
const { generateToken, giveSecretKey } = require('../helper/jsonwebtoken');

class userController {
  static register(req, res) {
    const dataX = {
      email: req.body.email,
      password: req.body.password,
    };
    // console.log(dataX)
    User.create(dataX)
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json({ message: 'Username/Password isnt Complete' });
      });
  }

  static login(req, res) {
    const dataX = {
      email: req.body.email,
      password: req.body.password,
    };
    if (dataX.email == undefined || dataX.password == undefined) {
      res.status(404).json({ message: 'Wrong Username/Password' });
    } else {
      User.findOne({ where: { email: dataX.email } })
        .then((data) => {
          console.log(data);
          if (!data) {
            res.status(404).json({ message: 'Wrong Username/Password' });
          } else if (!compare(dataX.password, data.password)) {
            res.status(404).json({ message: 'Wrong Username/Password' });
          } else {
            const access_token = generateToken(data);
            res.status(200).json({ access_token: access_token });
          }
        })
        .catch((err) => {
          res.status(400).json(err);
        });
    }
  }

  static googleSign(req, res, next) {
    console.log('google sign in server');
    let { id_token } = req.body;
    let email = null;
    console.log(id_token + 'ID TOKENN SERVER');
    const client = new OAuth2Client('664905079173-e2t6e2tf0op8ci03rs5pnb2a6h5aeqvl.apps.googleusercontent.com');
    client
      .verifyIdToken({
        idToken: id_token,
        audience: '664905079173-e2t6e2tf0op8ci03rs5pnb2a6h5aeqvl.apps.googleusercontent.com',
      })
      .then((ticket) => {
        const payload = ticket.getPayload();
        console.log(payload);
        email = ticket.getPayload().email;
        return User.findOne({
          where: {
            email: email,
          },
        });
      })
      .then((data) => {
        if (data) {
          return {
            id: data.id,
            email: data.email,
          };
        } else {
          return User.create({
            email: email,
            password: 'admin',
            username: email,
          });
        }
      })
      .then((data) => {
        let payload = {
          id: data.id,
          email: data.email,
        };
        return res.status(200).json({
          data: {
            email: data.email,
            id: data.id,
            access_token: jwt.sign(payload, 'admin'),
          },
        });
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = userController;
