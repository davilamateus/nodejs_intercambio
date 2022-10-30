const Sequelize = require('sequelize');
const connection = require('../../database/database');


const Ads = connection.define('ads',{
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    countryId:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    link:{
        type:Sequelize.STRING,
        allowNull:false
    },
    commercial:{
        type:Sequelize.INTEGER,
        allowNull:null
    },
    imgWeb:{
        type:Sequelize.STRING,
        allowNull:false
    },
    imgMobile:{
        type:Sequelize.STRING,
        allowNull:false
    }

});



//Ads.sync({force:true});

module.exports = Ads;