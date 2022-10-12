const express = require('express');
const router = express.Router();
const ToDoList = require('../../models/todolist/ToDoListSuggestion')
const jwt = require('jsonwebtoken');
const JWTsecret = require('../../middleware/JWTsecret')
const auth = require('../../middleware/userMiddleware')
const { Op } = require("sequelize");




router.post('/admin/todolistsuggestion/',auth,(req,res)=>{
    const {title,description,category,countryId} = req.body;
    const user = req.user
    console.log(user)
    if(user.category == 2){
        ToDoList.create({
            title:title,
            countryId:countryId,
            description:description,
            category:category,
            position:0
        }).then(()=>{res.status(200).json({sucess:'To do list Add'})}).catch((error)=>{res.status(400).json(error)})
    } else{
        res.status(300).json({error:'No Auth'})
    }

});


router.get('/todolistsuggestion/',(req,res)=>{
    const countryId = req.query['countryId'];
    ToDoList.findAll({where:{countryId:countryId}})
                .then((data)=>{res.json({data})}).catch((error)=>{res.status(400).json(error)})
});

router.patch('/admin/todolistsuggestion/',auth,(req,res)=>{

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


router.delete('/admin/todolistsuggestion/:id',auth,(req,res)=>{
    ToDoList.destroy({
        where:{[Op.and]: [{ id: req.params.id }, { userID: req.user.id }]}
    }).then(()=>{
        res.status(200).json({sucess:'Deleted'}) }).catch((error)=>{res.status(400).json(error)})
});



module.exports = router;