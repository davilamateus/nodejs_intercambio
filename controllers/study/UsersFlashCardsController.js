const express = require('express');
const router = express.Router();
const FlashCardsModel = require('../../models/study/FlashCardsModels');
const UsersFlashCardsModel = require('../../models/study/UsersFlashCardsModels')
const auth = require('../../middleware/userMiddleware')
const { Op } = require("sequelize");


router.get('/study/user/flashcards', auth,(req,res)=>{
    const userId = req.user.id;

    UsersFlashCardsModel.findAll({
        where:
        {[Op.and]: [{ userId:userId}]}  
        ,include:[{model:FlashCardsModel}],
        order:[["when","ASC"]],
    }).then((data)=>{
        res.json(data)
    })
})
const levels = [
    (new Date().getTime() + 600000),//1 min
    (new Date().getTime() + 3600000),// 1 h
    ((new Date().getTime() + 3600000)*3),// 3 h
    (new Date().getTime() + 86400000),// 1 day
    ((new Date().getTime() + 86400000)*3),// 3 day
    (new Date().getTime() + 604800000),// 1 week
    ((new Date().getTime() + 604800000)*2), // 2 week
    (new Date().getTime() + 2629743000),// 1 month
    ((new Date().getTime() + 2629743000)*3),// 3 month
    (new Date().getTime() + 31556926000)// 1 year
]
router.patch('/study/user/flashcards', auth,(req,res)=>{
    const userId = req.user.id;
    const {id,level} = req.body;

    UsersFlashCardsModel.update({
        level:level,
        when:levels[level]
    },{
        where:{[Op.and]: [{ id: id }, { userID: req.user.id }]  }
    }).then((data)=>{
        res.json(data)
    })
})

router.post('/study/user/flashcards', auth,(req,res)=>{
    const userId = req.user.id;
    const {flashcardId, level} = req.body


    UsersFlashCardsModel.create({
        userId:userId,
        flashcardId:flashcardId,
        level:level,
        when:levels[level]
    }).then((data)=>{
        res.json(data)
    })
})


module.exports = router;