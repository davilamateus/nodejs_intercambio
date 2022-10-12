const express = require('express');
const router = express.Router();
const ToDoList = require('../../models/todolist/ToDoList')
const jwt = require('jsonwebtoken');
const JWTsecret = require('../../middleware/JWTsecret')
const auth = require('../../middleware/userMiddleware')
const { Op } = require("sequelize");




router.post('/user/todolist/',auth,(req,res)=>{
    const {title,description,category} = req.body;
    const user = req.user

    ToDoList.create({
        title:title,
        userId:req.user.id, 
        status:1,
        description:description,
        category:category,
        position:0
    }).then(()=>{res.status(200).json({sucess:'To do list Add'})}).catch((error)=>{res.status(400).json(error)})
});


router.get('/user/todolist/',auth,(req,res)=>{
    const id = req.user.id;

    ToDoList.findAll(
        {
            order: ['position'],
            where:{userId:id},})
                .then((data)=>{res.json({data})}).catch((error)=>{res.status(400).json(error)})
});

router.patch('/user/todolist/',auth,(req,res)=>{

    console.log(req.body.status)

    ToDoList.update({
        status:req.body.status,
        title:req.body.title,
        category:req.body.category,
        position:req.body.position,
        description:req.body.description

    },{
        where:{[Op.and]: [{ id: req.body.id }, { userID: req.user.id }], }
    }).then(()=>{res.status(200).json({sucess:'Update'})}).catch((error)=>{res.status(400).json(error)})
});


router.delete('/user/todolist/:id',auth,(req,res)=>{
    ToDoList.destroy({
        where:{[Op.and]: [{ id: req.params.id }, { userID: req.user.id }]}
    }).then(()=>{
        res.status(200).json({sucess:'Deleted'}) }).catch((error)=>{res.status(400).json(error)})
});



module.exports = router;