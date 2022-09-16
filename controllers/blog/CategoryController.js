const express = require('express');
const auth = require('../../middleware/userMiddleware');
const router = express.Router();
const CategoryModel = require('./../../models/blog/CategoryModel')





router.get('/blog/categories', auth, (req,res)=>{
    CategoryModel.findAll().then((data)=>{
        res.status(200).json(data)
    });
});




router.post('/admin/blog/category', auth , (req,res)=>{
    const user = req.user;
    const title = req.body.title;

    if(user.category != '1'){
        res.status(204).json({error:'Não Autorizado'})
    } else{

        CategoryModel.create({
            title:title
        }).then(()=>{
            res.json({success:'Category Add'})
        })

    }

});

router.patch('/admin/blog/category', auth , (req,res)=>{
    const user = req.user;
    const {title, id} = req.body;

    if(user.category != '1'){
        res.status(204).json({error:'Não Autorizado'})
    } else{

        CategoryModel.update({title:title},{
            where:{
                id:id
            }
        }).then(()=>{
            res.status(200).json({success:'Update'})
        })

    }

});

router.delete('/admin/blog/category', auth , (req,res)=>{
    const user = req.user;
    const {id} = req.body;

    if(user.category != '1'){
        res.status(204).json({error:'Não Autorizado'})
    } else{

        CategoryModel.destroy({
            where:{
                id:id
            }
        }).then(()=>{
            res.status(200).json({success:'Delete'})
        })

    }

});




module.exports = router;