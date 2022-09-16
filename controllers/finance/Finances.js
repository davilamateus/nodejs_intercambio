const express = require('express');
const router = express.Router();
const Finance = require('../../models/finance/Finance')
const jwt = require('jsonwebtoken');
const JWTsecret = require('../../middleware/JWTsecret')
const auth = require('../../middleware/userMiddleware')
const { Op } = require("sequelize");




router.post('/user/finance/',auth,(req,res)=>{
    const {title,value} = req.body;
    const user = req.user
    res.json({user})

    Finance.create({
        title:title,
        value:value,
        userId:req.user.id, 
    })
});


router.get('/user/finance/',auth,(req,res)=>{
    const userId = req.user.id;

    Finance.findAll({where:{userId:userId}}).then((data)=>{
        res.json({data})
    })
});

router.patch('/user/finance/',auth,(req,res)=>{
    Finance.update({
        value:req.body.value,
        title:req.body.title
    },{
        where:{[Op.and]: [{ id: req.body.id }, { userID: req.user.id }]}
    }).then(()=>{
        res.status(200).json({sucess:'Atualizado'})
    
    }).catch((error)=>{
        res.status(400).json({error:'Erro Interno'})

    })
});


router.delete('/user/finance/',auth,(req,res)=>{
    Finance.destroy({
        where:{[Op.and]: [{ id: req.body.id }, { userID: req.user.id }]}
    }).then(()=>{
        res.status(200).json({sucess:'Deletado'})
    
    }).catch((error)=>{
        res.status(400).json({error:'Erro Interno'})

    })
});



module.exports = router;