const Sequelize = require('sequelize');
const connection = require('../../database/database');
const Users = require('../users/Users')


const ToDoListSuggestion = connection.define('ToDoListSuggestion',{
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false
    },
    category:{
        type:Sequelize.STRING,
        allowNull:false
    },
    countryId:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    position:{
        type:Sequelize.INTEGER,
        allowNull:null
    }

});

//ToDoListSuggestion.sync({force:true});

module.exports = ToDoListSuggestion;