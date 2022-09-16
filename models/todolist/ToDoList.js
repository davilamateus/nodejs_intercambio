const Sequelize = require('sequelize');
const connection = require('../../database/database');
const Users = require('../users/Users')


const toDoList = connection.define('toDoList',{
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false
    },
    status:{
        type:Sequelize.BOOLEAN,
        allowNull:false
    },
    userId:{
        type:Sequelize.STRING,
        allowNull:false
    }

});

//toDoList.belongsTo(Users)
//toDoList.sync({force:true})

module.exports = toDoList