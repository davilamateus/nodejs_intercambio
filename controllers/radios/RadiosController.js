const express = require('express');
const router = express.Router();
const RadioModel = require('./../../models/radio/RadioModels');
const auth = require('./../../middleware/userMiddleware');



router.post('/admin/radio/', auth, (req,res)=>{

    const {title, img, countryId,link}  = req.body;


    if(req.user.category == '2'){

        if(title !== undefined && img !== undefined && countryId !== undefined &link !== undefined){
        
                    RadioModel.create({
                        title:title,
                        img:img,
                        countryId:countryId,
                        link:link})
                            .then(()=>{res.status(200).json({success:'Radio Add'})})
                            .catch((error)=>{res.status(400).json(error)});

        } else{
            res.status(201).json({Error:'Fault Infors'});

        }

    } else{
        res.status(204).json({error:'No Auth'});
    }

});

router.get('/radios',(req,res)=>{
    const countryId = req.query['countryId'];

        RadioModel.findAll({where:{countryId:countryId}})
        .then((data)=>{res.status(200).json(data)})
        .catch((error)=>{res.status(400).json(error)});

});

router.patch('/admin/radio/', auth, (req,res)=>{

    const {title, img, countryId,link,id}  = req.body;


    if(req.user.category == '2'){

        if(title !== undefined && img !== undefined && countryId !== undefined &link !== undefined && id !== undefined){
        
                    RadioModel.update({
                        title:title,
                        img:img,
                        countryId:countryId,
                        link:link
                    },{where:{id:id}})
                            .then(()=>{res.status(200).json({success:'Radio Update'})})
                            .catch((error)=>{res.status(400).json(error)});

        } else{
            res.status(201).json({Error:'Fault Infors'});

        }

    } else{
        res.status(204).json({error:'No Auth'});
    }

});


router.delete('/admin/radio/', auth, (req,res)=>{

    const {id}  = req.body;


    if(req.user.category == '2'){

        if(id!== undefined){
        
                    RadioModel.destroy({where:{id:id}})
                    .then(()=>{res.status(200).json({success:'Radio Delete'})})
                    .catch((error)=>{res.status(400).json(error)});

        } else{
            res.status(201).json({Error:'Fault Infors'});

        }

    } else{
        res.status(204).json({error:'No Auth'});
    }

});

module.exports = router;