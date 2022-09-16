const Sequelize = require('sequelize');
const Api = require('../../database/database');
const CategoryModel = require('./CategoryModel')


const Article = Api.define('article',{
    title:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    description:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    country:{
        type:Sequelize.STRING,
        allowNull:false
    },
    categoryId:{
        type:Sequelize.STRING,
        allowNull:false
    },
    img:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

Article.belongsTo(CategoryModel);

//Article.sync({force:true})

module.exports = Article;

