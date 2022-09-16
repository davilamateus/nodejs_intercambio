const express = require('express');
const router = express.Router();
const Users = require('../../models/users/Users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const JWTsecret = require('../../middleware/JWTsecret');
const auth = require('../../middleware/userMiddleware')



// Login
router.post('/user/login',(req,res)=>{
   const {email,password} =  req.body;
   if(email !==null && password !== null){
      Users.findOne({where:{email:email}}).then((data)=>{
      if(data!==null){
         let correct = bcrypt.compareSync(password,data.password);
         if(correct){
               if(data.verified == true){
                  const token =  jwt.sign({name:data.name,id:data.id, category:data.category}, JWTsecret,{expiresIn:'1000h'});
                  res.status(200).json({message:'Password Correct', token:token});
             } else{res.status(203).json({error:'User not verified'});}
         } else{ res.status(202).json({message:'Password incorrect'});}
     } else{res.status(202).json({error:'User no fault'});}
     });
   }else{res.status(202).json({error:'Falt informations'});}
});

// get user
router.get('/user', auth, (req,res)=>{
   const user = req.user;
   Users.findOne({where:{id:user.id}}).then((data)=>{
      if(data!==null){
            res.status(200).json({name:data.name,id:data.id,email:data.email})
         console.log(data)
     } else{res.status(202).json({error:'User no fault'});}
     });
});

//Add User
router.post('/user/add',(req,res)=>{
   const {email,password,name} =  req.body;
      if(email!=='' && password!== '' && name!==''){
         Users.findOne({where:{email:email}}).then((user)=>{
            if(user !== null){
               res.status(202).json({message:'Email no already'});    
            } else{
               let salt = bcrypt.genSaltSync(10);
               let hash = bcrypt.hashSync(password, salt)
               Users.create({
                  email:email,
                  name:name,
                  verified:false,
                  password:hash,
                  category:2,
                  verified:false
                                 });
               res.status(200).json({message:'User add'})
               
            }
         });

      } else{res.status(300).json({error:'Falt informations'}
      )}
});


module.exports = router