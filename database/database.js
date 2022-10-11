const Sequelize = require('sequelize');


const connection = new Sequelize('heroku_39953716f3189f0','b084b76e446a38','510257ed',{
    host:'us-cdbr-east-06.cleardb.net',
    dialect:'mysql'
});


module.exports = connection;