const express = require('express');
const router = express.Router();
const auth = require('../../middleware/userMiddleware')
const { Op } = require("sequelize");
const CoursesModel = require('../../models/study/CoursesModels')





router.post('/admin/study/courses', auth, (req,res)=>{

    const {title, img, language,level}  = req.body;

    if(req.user.category == '2'){

        if(title !== undefined && img !== undefined && language !== undefined &level !== undefined){
        
            CoursesModel.create({
                        title:title,
                        img:img,
                        language:language,
                        level:level})
                            .then(()=>{res.status(200).json({success:'Course Add'})})
                            .catch((error)=>{res.status(400).json(error)})

        } else{
            res.status(201).json({Error:'Fault Infors'})

        }

    } else{
        res.status(204).json({error:'No Auth'})
    }

});

router.get('/courses', auth,(req,res)=>{

    const userId = req.user.id
    const page = req.query['page'];

    if(page != undefined){


    StudyModel.findAll({
    
         
        where:
        {userId:userId},
        order:[
            ["level","DESC"]
        ],
        limit : [((page-1)*20), 20],
    }).then((data)=>{res.status(200).json(data)}).catch((error)=>{res.status(400).json(error)})
}
});

router.patch('/study', auth, (req,res)=>{

    const {questionId,level}  = req.body


        if(questionId !== undefined ){
        
            StudyModel.update({
                        level:level,
                    },{
                        where:{[Op.and]: [{ id: questionId }, { userId: req.user.id }]}                    
                    
                    }).then(()=>{res.status(200).json({success:'study Update'})}).catch((error)=>{res.status(400).json(error)})

        } else{
            res.status(201).json({Error:'Fault Infors'})

        }

    } 

);


router.delete('/admin/study/', auth, (req,res)=>{

    const {title, img, country,link,id}  = req.body;


    if(req.user.category == '2'){

        if(id!== undefined){
        
            StudyModel.destroy({where:{id:id}}).then(()=>{res.status(200).json({success:'study Delete'})}).catch((error)=>{res.status(400).json(error)})

        } else{
            res.status(201).json({Error:'Fault Infors'})

        }

    } else{
        res.status(204).json({error:'No Auth'})
    }

});




module.exports = router;