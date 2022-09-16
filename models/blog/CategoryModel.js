const Sequelize = require('sequelize');
const Api = require('../../database/database');


const Category = Api.define('category',{
    title:{
        type:Sequelize.STRING,
        allowNull:false,
    }
});

//Category.sync({force:true})

module.exports = Category;

