const Sequelize = require('sequelize');
const Api = require('../../database/database');
const CategoryModel = require('./CategoryModel');


const Article = Api.define('article',{
    title:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    description:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    countryId:{
        type:Sequelize.STRING,
        allowNull:false
    },
    categoryId:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    img:{
        type:Sequelize.STRING,
        allowNull:false
    }
});


//Article.sync({force:true})

module.exports = Article;

