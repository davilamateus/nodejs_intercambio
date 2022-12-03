const Sequelize = require('sequelize');


const connection = new Sequelize('u225794026_plan','u225794026_plan','Goias123.',{
    host:'45.152.44.103',
    dialect:'mysql',
   
});


module.exports = connection;
