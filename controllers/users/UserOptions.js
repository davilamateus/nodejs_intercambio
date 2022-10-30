const express = require('express');
const router = express.Router();
const UserOptions = require('../../models/users/UserOptions')
const jwt = require('jsonwebtoken');
const JWTsecret = require('../../middleware/JWTsecret')
const auth = require('../../middleware/userMiddleware')
const { Op } = require("sequelize");
const multer = require('multer')
const uuid = require('uuid')
const path = require('path')
const User = require('./../../models/users/Users')
const cityModel = require('./../../models/cities/CityModel')




router.post('/user/useroptions/',auth,(req,res)=>{
    const {cityId,countryId,goal,lang,photo,when,phone} = req.body;
    const user = req.user;
    UserOptions.create({
        cityId:cityId,
        userId:user.id, 
        countryId:countryId,
        goal:goal,
        lang:lang,
        photo:photo,
        when:when,
        phone:phone,
    }).then(()=>{res.status(200).json({sucess:"User Options Add"})}).catch((error)=>{res.status(400).json(error)})
});


router.get('/user/useroptions/',auth,(req,res)=>{
    const user = req.user;
    UserOptions.findOne({where:{userId:user.id},
        include:[
            {model:User }
            
        ]
        
    })
        .then((data)=>{
        if(data){
            console.log('asdassdasdasdasdasdasdasd')
            res.status(200).json(data)
        } else {
            res.status(201).json({error:'No Exist'})
        }
    })
});

router.patch('/user/useroptions/',auth,(req,res)=>{
    const {cityId,countryId,goal,lang,photo,when,phone} = req.body
    UserOptions.update({
        cityId:cityId,
        countryId:countryId,
        goal:goal,
        lang:lang,
        photo:photo,
        when:when,        
        phone:phone,

    },{
        where:{[Op.and]: [{ id: req.body.id }, { userID: req.user.id }]}
    }).then(()=>{res.status(200).json({sucess:'Update'})}).catch((error)=>{res.status(400).json(error)})
});




var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname + './../../../front/public/img/user')      
    },
    filename: function (req, file, cb) {
        const namePhoto = uuid.v4() + Date.now() + '.png'
      cb(null, namePhoto)
    }
  })
  
  var upload = multer({storage: storage,
    fileFilter: function (req, file, callback) {
        var ext = path.extname(file.originalname);
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return callback(new Error('Only images are allowed'))
        }
        callback(null, true)
    },
      onFileUploadStart: function (file) {
      },
  });
  
  router.post('/user/photo', upload.single('file'), function (req, res, next) {
    const result = req.file
    res.status(200).json(result.filename)
    return false;
  })


module.exports = router;