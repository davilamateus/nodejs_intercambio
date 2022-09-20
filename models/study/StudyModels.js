const Sequelize = require('sequelize');
const Api = require('../../database/database');


const Study = Api.define('english',{
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    english:{
        type:Sequelize.STRING,
        allowNull:false
    },
    portuguese:{
        type:Sequelize.STRING,
        allowNull:false
    },
    userId:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    level:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
});


//Study.sync({force:true});

module.exports = Study