const Sequelize = require('sequelize');
const Api = require('../../database/database');
const CountryModell = require('../countries/CountryModel');
const UserOptions = require('../users/UserOptions');


const City = Api.define('cities',{
    title:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    description:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    img:{
        type:Sequelize.STRING,
        allowNull:false
    },
    countryId:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
});

City.belongsTo(CountryModell);


//City.sync({force:true})

module.exports = City;

