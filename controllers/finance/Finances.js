const express = require('express');
const router = express.Router();
const Finance = require('../../models/finance/FinanceModel')
const jwt = require('jsonwebtoken');
const JWTsecret = require('../../middleware/JWTsecret')
const auth = require('../../middleware/userMiddleware')
const { Op } = require("sequelize");




router.post('/user/finance/',auth,(req,res)=>{
    const {title,value,category} = req.body;
    Finance.create({
        title:title,
        value:value,
        category:category,
        userId:req.user.id,})
            .then(()=>{res.status(200).json({success:'Finance Add'})})
            .catch((error)=>{res.status(400).json(error)})
});










router.get('/user/finance/',auth,(req,res)=>{

    Finance.findAll({where:{userId:req.user.id}})
            .then((data)=>{res.json(data)})
            .catch((error)=>{res.status(400).json(error)})
});














router.patch('/user/finance/',auth,(req,res)=>{
    const {value, title, id, category} = res.body
    Finance.update({
        value:value,
        title:title,
        category:category
    },{
        where:{[Op.and]: [{ id: id }, { userID: req.user.id }]}})
                .then(()=>{res.status(200).json({sucess:'Update'})
                .catch((error)=>{res.status(400).json(error)})
    
    })
});


router.delete('/user/finance/',auth,(req,res)=>{
    Finance.destroy({
        where:{[Op.and]: [{ id: req.body.id }, { userID: req.user.id }]}})
                .then(()=>{ res.status(200).json({sucess:'Deletado'})
                .catch((error)=>{res.status(400).json(error)}) 
    })
});



module.exports = router;