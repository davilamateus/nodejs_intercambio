const Sequelize = require('sequelize');
const connection = require('../../database/database');


const Commerical = connection.define('commercial',{
    userId:{
        type:Sequelize.STRING,
        allowNull:false
    },
    responser01:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    responser02:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    responser03:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    responser04:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    responser05:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    responser06:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    responser07:{
        type:Sequelize.INTEGER,
        allowNull:false
    },

});

//Commerical.sync({force:false})

module.exports = Commerical