const Sequelize = require('sequelize');
const connection = require('../../database//database');

const Email = connection.define('verificEmail',{
    token:{
        type:Sequelize.STRING,
        allowNull:false
    },
    userEmail:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

//Email.sync({force:true})

module.exports = Email;

