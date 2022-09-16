const express = require('express');
const router = express.Router();
const ToDoList = require('../../models/todolist/ToDoList')
const jwt = require('jsonwebtoken');
const JWTsecret = require('../../middleware/JWTsecret')
const auth = require('../../middleware/userMiddleware')
const { Op } = require("sequelize");




router.post('/user/todolist/',auth,(req,res)=>{
    const {title,description} = req.body;
    const user = req.user
    res.json({user})

    ToDoList.create({
        title:title,
        userId:req.user.id, 
        status:false,
        description:description
    })
});


router.get('/user/todolist/',auth,(req,res)=>{
    const id = req.user.id;

    ToDoList.findAll({where:{userId:id}}).then((data)=>{
        res.json({data})
    })
});

router.patch('/user/todolist/',auth,(req,res)=>{
    ToDoList.update({
        status:req.body.status,
        title:req.body.title
    },{
        where:{[Op.and]: [{ id: req.body.id }, { userID: req.user.id }]}
    }).then(()=>{
        res.status(200).json({sucess:'Atualizado'})
    
    }).catch((error)=>{
        res.status(400).json({error:'Erro Interno'})

    })
});


router.delete('/user/todolist/',auth,(req,res)=>{
    ToDoList.destroy({
        where:{[Op.and]: [{ id: req.body.id }, { userID: req.user.id }]}
    }).then(()=>{
        res.status(200).json({sucess:'Deletado'})
    
    }).catch((error)=>{
        res.status(400).json({error:'Erro Interno'})

    })
});



module.exports = router;