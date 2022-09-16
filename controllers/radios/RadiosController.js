const express = require('express');
const router = express.Router();
const RadioModel = require('./../../models/radio/RadioModels');
const auth = require('./../../middleware/userMiddleware')



router.post('/admin/radio/', auth, (req,res)=>{

    const {title, img, country,link}  = req.body;


    if(req.user.category == '2'){

        if(title !== undefined && img !== undefined && country !== undefined &link !== undefined){
        
                    RadioModel.create({
                        title:title,
                        img:img,
                        country:country,
                        link:link
                    })
                    res.status(200).json({success:'Radio Add'})

        } else{
            res.status(201).json({Error:'Fault Infors'})

        }

    } else{
        res.status(204).json({error:'No Auth'})
    }

});

router.get('/radios',(req,res)=>{
    const country = req.query['country'];

    RadioModel.findAll({where:{country:country}}).then((data)=>{
        res.status(200).json(data)
    })

});

router.patch('/admin/radio/', auth, (req,res)=>{

    const {title, img, country,link,id}  = req.body;


    if(req.user.category == '2'){

        if(title !== undefined && img !== undefined && country !== undefined &link !== undefined && id !== undefined){
        
                    RadioModel.update({
                        title:title,
                        img:img,
                        country:country,
                        link:link
                    },{where:{id:id}})
                    res.status(200).json({success:'Radio Update'})

        } else{
            res.status(201).json({Error:'Fault Infors'})

        }

    } else{
        res.status(204).json({error:'No Auth'})
    }

});


router.delete('/admin/radio/', auth, (req,res)=>{

    const {title, img, country,link,id}  = req.body;


    if(req.user.category == '2'){

        if(id!== undefined){
        
                    RadioModel.destroy({where:{id:id}})
                    res.status(200).json({success:'Radio Delete'})

        } else{
            res.status(201).json({Error:'Fault Infors'})

        }

    } else{
        res.status(204).json({error:'No Auth'})
    }

});

module.exports = router