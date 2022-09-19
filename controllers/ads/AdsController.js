const express = require('express');
const router = express.Router();
const AdsModel = require('./../../models/ads/ads');
const auth = require('./../../middleware/userMiddleware')



router.post('/admin/ads/', auth, (req,res)=>{

    const {title, img, country,link}  = req.body;


    if(req.user.category == '2'){

        if(title !== undefined && img !== undefined && country !== undefined &link !== undefined){
        
            AdsModel.create({
                        title:title,
                        img:img,
                        country:country,
                        link:link
                    })
                    res.status(200).json({success:'Ads Add'})

        } else{
            res.status(201).json({Error:'Fault Infors'})

        }

    } else{
        res.status(204).json({error:'No Auth'})
    }

});

router.get('/ads',(req,res)=>{
    const country = req.query['country'];

    AdsModel.findAll({where:{country:country}}).then((data)=>{
        res.status(200).json(data)
    })

});

router.patch('/admin/ads/', auth, (req,res)=>{

    const {title, img, country,link,id}  = req.body;


    if(req.user.category == '2'){

        if(title !== undefined && img !== undefined && country !== undefined &link !== undefined && id !== undefined){
        
            AdsModel.update({
                        title:title,
                        img:img,
                        country:country,
                        link:link
                    },{where:{id:id}})
                    res.status(200).json({success:'Ads Update'})

        } else{
            res.status(201).json({Error:'Fault Infors'})

        }

    } else{
        res.status(204).json({error:'No Auth'})
    }

});


router.delete('/admin/ads/', auth, (req,res)=>{

    const {title, img, country,link,id}  = req.body;


    if(req.user.category == '2'){

        if(id!== undefined){
        
            AdsModel.destroy({where:{id:id}})
                    res.status(200).json({success:'Ads Delete'})

        } else{
            res.status(201).json({Error:'Fault Infors'})

        }

    } else{
        res.status(204).json({error:'No Auth'})
    }

});

module.exports = router