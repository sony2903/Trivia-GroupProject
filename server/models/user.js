'use strict';
const {encrypt, compare} = require('../helper/bcrypt')

module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model
  class User extends Model {}

  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false},
    password: {
      type: DataTypes.STRING,
      allowNull: false},
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    sequelize,
    hooks: {
      beforeCreate: (user) => {
        user.password = encrypt(user.password)
      }
    }
  })
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};