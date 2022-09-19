const Sequelize = require('sequelize');
const connection = require('../../database/database');
const Users = require('../users/Users')


const Finance = connection.define('finance',{
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    value:{
        type:Sequelize.INTEGER,
        allowNull:false
    }

});

Finance.belongsTo(Users)
//Finance.sync({force:true})

module.exports = Finance