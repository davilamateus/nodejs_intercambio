const express = require('express');
const auth = require('../../middleware/userMiddleware');
const router = express.Router();
const CountryModel = require('../../models/countries/CountryModel')





router.get('/country', auth, (req,res)=>{
    CountryModel.findAll()
            .then((data)=>{res.status(200).json(data)})
            .catch((error)=>{res.status(400).json(error)});
});




router.post('/admin/country', auth , (req,res)=>{
    const user = req.user;
    const {title,slug,flag} = req.body;

    if(user.category != '1'){
        res.status(204).json({error:'No Auth'})
    } else{
        CountryModel.create({
            title:title,
            slug:slug,
            flag:flag})
                    .then(()=>{res.json({success:'Category Add'})})
                    .catch((error)=>{res.status(400).json(error)})
    }

});

router.patch('/admin/country', auth , (req,res)=>{
    const user = req.user;
    const {title,slug,flag,id} = req.body;

    if(user.category != '1'){
        res.status(204).json({error:'No Auth'});
    } else{

        CountryModel.update({
            title:title,
            slug:slug,
            flag:flag
        },{
            where:{
                id:id
            }})
                    .then(()=>{ res.status(200).json({success:'Update'})})
                    .catch((error)=>{res.status(400).json(error)})

    }

});

router.delete('/admin/country', auth , (req,res)=>{
    const user = req.user;
    const {id} = req.body;

    if(user.category != '1'){
        res.status(204).json({error:'No Auth'})
    } else{

        CountryModel.destroy({
            where:{
                id:id
            }})
                    .then(()=>{res.status(200).json({success:'Delete'})
                    .catch((error)=>{res.status(400).json(error)})});

    }

});




module.exports = router;