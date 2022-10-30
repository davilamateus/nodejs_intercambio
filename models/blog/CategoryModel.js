const Sequelize = require('sequelize');
const Api = require('../../database/database');
const ArticleModel = require('./ArticleModel')


const Category = Api.define('category',{
    title:{
        type:Sequelize.STRING,
        allowNull:false,
    }
});

Category.hasMany(ArticleModel)
ArticleModel.belongsTo(Category)

//Category.sync({force:true});

module.exports = Category;

