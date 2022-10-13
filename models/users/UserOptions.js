const Sequelize = require('sequelize');
const connection = require('../../database/database');
const Users = require('./Users');


const UserOptions = connection.define('userOptions',{
    countryId:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    cityId:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    goal:{
        type:Sequelize.INTEGER,
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
        type:Sequelize.INTEGER,
        allowNull:false
    }

});

UserOptions.belongsTo(Users);

//UserOptions.sync({force:true});

module.exports = UserOptions;