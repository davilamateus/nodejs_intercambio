const express = require('express');
const auth = require('../../middleware/userMiddleware');
const router = express.Router();
const CityModel = require('../../models/cities/CityModel')
const CountryModel = require('../../models/countries/CountryModel')
const { Op } = require("sequelize");





// Get infor About a city
router.get('/city', (req,res)=>{
    const title = req.query['city']
    CityModel.findAll(
        {where:{title:title},
        include:[{model:CountryModel}]})
                .then((data)=>{res.status(200).json(data)})
                .catch((error)=>{res.status(400).json(error)});
});

router.get('/cities', (req,res)=>{
    const countryId = req.query['countryId'];
        CityModel.findAll(        
            {where:{countryId:countryId}})
                .then((data)=>{res.status(200).json(data)})
                .catch((error)=>{res.status(400).json(error)});
    
});



router.post('/admin/cities', auth , (req,res)=>{
    const user = req.user;
    const {title, countryId, description,img} = req.body;

    if(user.category != '1'){
        res.status(204).json({error:'No Auth'});
    } else{
        CityModel.create({
            description:description,
            countryId:countryId,
            title:title,
            img:img})
                    .then(()=>{res.json({success:'City Add'})})
                    .catch((error)=>{res.status(400).json(error)});
    }

});

router.patch('/admin/cities', auth , (req,res)=>{
    const user = req.user;
    const {title, description, countryId,img, id} = req.body;

    if(user.category != '1'){
        res.status(204).json({error:'No Auth'});
    } else{

        CityModel.update({
            description:description,
            countryId:countryId,
            title:title,
            img:img
            },
            {where:{ id:id}})
                    .then(()=>{res.status(200).json({success:'Update'})})
                    .catch((error)=>{res.status(400).json(error)});
    }

});

router.delete('/admin/cities', auth , (req,res)=>{
    const user = req.user;
    const {id} = req.body;

    if(user.category != '1'){
        res.status(204).json({error:'No Auth'});
    } else{

        CityModel.destroy({
            where:{id:id}})
                    .then(()=>{res.status(200).json({success:'Delete'})})
                    .catch((error)=>{res.status(400).json(error)});
    }

});




module.exports = router;