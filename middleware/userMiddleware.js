const jwt = require('jsonwebtoken');
const JWTsecret = require('./JWTsecret');
const Users = require('../models/users/Users');



function auth(req,res,next){
    const authToken = req.headers['authorization'];

    if(authToken !== undefined){

        const token = authToken.split(' ')[1];
        jwt.verify(token,JWTsecret,(error,data)=>{
            if(error){
                res.json({error:'TOKEN INVALIDO'})
            } else{
                req.user = data
                console.log(data)
                next()
            }
        })

    } else{
        res.json({error:'SEM TOKEN'})
    }
}



module.exports = auth

