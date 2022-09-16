const Sequelize = require('sequelize');


const connection = new Sequelize('intercambio','root','Goias123.',{
    host:'localhost',
    dialect:'mysql'
});


module.exports = connection;