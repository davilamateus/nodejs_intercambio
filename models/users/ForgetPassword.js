const Sequelize = require('sequelize');
const Api = require('./../../database/database')

        const ForgetPassword = Api.define('forgetPassword',{
            token:{
                type:Sequelize.STRING,
                allowNull:false
            },
            userId:{
                type:Sequelize.STRING,
                allowNull:false
            },
            status:{
                type:Sequelize.BOOLEAN,
                allowNull:false
            }
        })

       // ForgetPassword.sync({force:true})

        module.exports = ForgetPassword