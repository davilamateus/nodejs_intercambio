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




router.post('/user/useroptions/',auth,(req,res)=>{
    const {city,country,goal,lang,photo,when} = req.body;
    const user = req.user;
    res.json({user})
    UserOptions.create({
        city:city,
        userId:user.id, 
        country:country,
        goal:goal,
        lang:lang,
        photo:photo,
        when:when
    })
});


router.get('/user/useroptions/',auth,(req,res)=>{
    const user = req.user;
    console.log(user)
    UserOptions.findAll({where:{userId:user.id}}).then((data)=>{
        if(data){
            res.json(data)
        } else {
            res.json({error:'Não encontrado'})
        }
    })
});

router.patch('/user/useroptions/',auth,(req,res)=>{
    const {city,country,goal,lang,photo,when} = req.body
    UserOptions.update({
        city:city,
        country:country,
        goal:goal,
        lang:lang,
        photo:photo,
        when:when
    },{
        where:{[Op.and]: [{ id: req.body.id }, { userID: req.user.id }]}
    }).then(()=>{
        res.status(200).json({sucess:'Atualizado'})
    
    }).catch((error)=>{
        res.status(400).json({error:'Erro Interno'})

    })
});




var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname + './../../../front/public/img/user')      //you tell where to upload the files,
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
        console.log(file.originalname + ' is starting ...')
      },
  });
  
  router.post('/user/photo', upload.single('file'), function (req, res, next) {
    // req.file is the `avatar` file
    console.log(req.file);
    const result = req.file
    res.status(200).json(result.filename)
    return false;
  })


module.exports = router;