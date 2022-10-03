const Sequelize = require('sequelize');
const Api = require('../../database/database');


const Courses = Api.define('courses',{
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    language:{
        type:Sequelize.STRING,
        allowNull:false
    },
    img:{
        type:Sequelize.STRING,
        allowNull:false
    },
    level:{
        type:Sequelize.STRING,
        allowNull:false
    }
});


//Courses.sync({force:true});
module.exports = Courses;