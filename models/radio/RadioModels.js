const Sequelize = require('sequelize');
const Api = require('../../database/database');


const RadioModel = Api.define('radios',{
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    link:{
        type:Sequelize.STRING,
        allowNull:false
    },
    img:{
        type:Sequelize.STRING,
        allowNull:false
    },
    countryId:{
        type:Sequelize.STRING,
        allowNull:false
    }
});


//RadioModel.sync({force:true});

module.exports = RadioModel;