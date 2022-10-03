const express = require('express');
const router = express.Router();
const CommercialModel = require('../../models/users/CommercialUser')

const auth = require('../../middleware/userMiddleware')
const { Op } = require("sequelize");




router.post('/user/commercial/',auth,(req,res)=>{
    const {responser01,responser02,responser03,responser04,responser05,responser06,responser07} = req.body;
    const user = req.user;
    CommercialModel.create({
        responser01:responser01,
        responser02:responser02, 
        responser03:responser03,
        responser04:responser04,
        responser05:responser05,
        responser06:responser06,
        responser07:responser07,
        userId:user.id
    }).then(()=>{res.status(200).json({sucess:"User Commercial Add"})}).catch((error)=>{res.status(400).json(error)})
});


router.get('/user/commercial/',auth,(req,res)=>{
    const user = req.user;
    console.log(user)
    CommercialModel.findAll({where:{userId:user.id}}).then((data)=>{
        if(data){
            res.status(200).json(data)
        } else {
            res.status(404).json({error:'No Exist'})
        }
    })
});

router.patch('/user/commercial/',auth,(req,res)=>{
    const {responser01,responser02,responser03,responser04,responser05,responser06,responser07} = req.body;
        CommercialModel.update({
            responser01:responser01,
            responser02:responser02, 
            responser03:responser03,
            responser04:responser04,
            responser05:responser05,
            responser06:responser06,
            responser07:responser07,
    },{
        where:{[Op.and]: [{ id: req.body.id }, { userID: req.user.id }]}
    }).then(()=>{res.status(200).json({sucess:'Update'})}).catch((error)=>{res.status(400).json(error)})
});







module.exports = router;