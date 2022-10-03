const Sequelize = require('sequelize');
const Api = require('../../database/database');


const Country = Api.define('country',{
    title:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    slug:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    flag:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

//Country.sync({force:true})

module.exports = Country;

