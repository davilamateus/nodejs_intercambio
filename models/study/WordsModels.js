const Sequelize = require('sequelize');
const Api = require('../../database/database');


const Words = Api.define('words',{
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    original:{
        type:Sequelize.STRING,
        allowNull:false
    },
    portuguese:{
        type:Sequelize.STRING,
        allowNull:false
    },
    courseId:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    level:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
});


//Words.sync({force:true});
module.exports = Words;