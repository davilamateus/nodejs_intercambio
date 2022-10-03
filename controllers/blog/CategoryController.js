const express = require('express');
const auth = require('../../middleware/userMiddleware');
const router = express.Router();
const CategoryModel = require('./../../models/blog/CategoryModel');





router.get('/blog/categories', (req,res)=>{
    CategoryModel.findAll()
            .then((data)=>{res.status(200).json(data)})
            .catch((error)=>{res.status(400).json(error)});

});




router.post('/admin/blog/category', auth , (req,res)=>{
    const user = req.user;
    const title = req.body.title;

    if(user.category != '1'){
        res.status(204).json({error:'No Auth'});
    } else{
          CategoryModel.create({title:title})
                .then(()=>{res.json({success:'Category Add'})})
                .catch((error)=>{res.status(400).json(error)});
    }

});

router.patch('/admin/blog/category', auth , (req,res)=>{
    const user = req.user;
    const {title, id} = req.body;

    if(user.category != '1'){
        res.status(204).json({error:'No Auth'});
    } else{
        CategoryModel.update({title:title},{
            where:{id:id}})
                    .then(()=>{ res.status(200).json({success:'Update'})})
                    .catch((error)=>{res.status(400).json(error)});

    }

});

router.delete('/admin/blog/category', auth , (req,res)=>{
    const user = req.user;
    const {id} = req.body;

    if(user.category != '1'){
        res.status(204).json({error:'No Auth'});
    } else{

        CategoryModel.destroy({
            where:{id:id}})
                    .then(()=>{res.status(200).json({success:'Delete'})
                    .catch((error)=>{res.status(400).json(error)});
        });

    }

});




module.exports = router;