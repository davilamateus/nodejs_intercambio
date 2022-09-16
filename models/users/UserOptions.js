const Sequelize = require('sequelize');
const connection = require('../../database/database');
const Users = require('./Users')


const UserOptions = connection.define('userOptions',{
    country:{
        type:Sequelize.STRING,
        allowNull:false
    },
    city:{
        type:Sequelize.STRING,
        allowNull:false
    },
    goal:{
        type:Sequelize.STRING,
        allowNull:false
    },
    photo:{
        type:Sequelize.STRING,
        allowNull:false
    },
    when:{
        type:Sequelize.STRING,
        allowNull:false
    },
    lang:{
        type:Sequelize.STRING,
        allowNull:false
    },
    userId:{
        type:Sequelize.STRING,
        allowNull:false
    }

});

UserOptions.belongsTo(Users)

//UserOptions.sync({force:true})

module.exports = UserOptions