const express = require('express');
const auth = require('../../middleware/userMiddleware');
const router = express.Router();
const ArticleModel = require('./../../models/blog/ArticleModel')
const { Op } = require("sequelize");




router.get('/blog/articles', (req,res)=>{

    const category = req.query['category'];
    const country = req.query['country'];
    console.log(`*************${category}`)
    console.log(`*************${country}`)


    if(category != undefined && country != undefined ){
        ArticleModel.findAll({
            where:{[Op.and]: [{ categoryId:category}, { country: country }]}        
        }).then((data)=>{
            res.status(200).json(data)
        })
    }

   else if(category != undefined){
        ArticleModel.findAll({where:{categoryId:category}}).then((data)=>{
            res.status(200).json(data)
        })
    }
   else if(country != undefined){
        ArticleModel.findAll({where:{country:country}}).then((data)=>{
            res.status(200).json(data)
        })
    }
   else{
       ArticleModel.findAll().then((data)=>{
           res.status(200).json(data)
       })
       
}
})

router.post('/admin/blog/article', auth , (req,res)=>{
    const user = req.user;
    const {title, categoryId, description, country,img} = req.body;

    if(user.category != '1'){
        res.status(204).json({error:'Não Autorizado'})
    } else{

        ArticleModel.create({
            categoryId:categoryId,
            description:description,
            country:country,
            title:title,
            img:img
        }).then(()=>{
            res.json({success:'Article Add'})
        })

    }

});

router.patch('/admin/blog/article', auth , (req,res)=>{
    const user = req.user;
    const {title, categoryId, description, country,img} = req.body;

    if(user.category != '1'){
        res.status(204).json({error:'Não Autorizado'})
    } else{

        ArticleModel.update({
            categoryId:categoryId,
            description:description,
            country:country,
            title:title,
            img:img
            },{
            where:{
                id:id
            }
        }).then(()=>{
            res.status(200).json({success:'Update'})
        })

    }

});

router.delete('/admin/blog/article', auth , (req,res)=>{
    const user = req.user;
    const {id} = req.body;

    if(user.category != '1'){
        res.status(204).json({error:'Não Autorizado'})
    } else{

        ArticleModel.destroy({
            where:{
                id:id
            }
        }).then(()=>{
            res.status(200).json({success:'Delete'})
        })

    }

});




module.exports = router;