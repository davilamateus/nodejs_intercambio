const Sequelize = require('sequelize');
const connection = require('../../database/database');


const Ads = connection.define('ads',{
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    country:{
        type:Sequelize.STRING,
        allowNull:false
    },
    img:{
        type:Sequelize.STRING,
        allowNull:false
    },
    link:{
        type:Sequelize.STRING,
        allowNull:false
    }

});

//Ads.sync({force:true})

module.exports = Ads