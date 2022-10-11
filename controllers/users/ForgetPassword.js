
const express = require('express');
const router = express.Router();
const Users = require('../../models/users/Users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const JWTsecret = require('../../middleware/JWTsecret');
const nodemailer = require("nodemailer"); // Require the Nodemailer package
const uuid = require('uuid');
const Forget = require('../../models/users/ForgetPassword')


router.post('/user/forget-password',(req,res)=>{
    const {password, token} = req.body;
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    Forget.findOne({where:{token:token}})
    .then((data)=>{
        if(data.status === false){
            Users.update({password:hash},{where:{id:data.userId}}).then((result)=>{
                Forget.update({status:true},{where:{id:data.id}}).then(()=>{
                    res.status(200).json({success:'Password Update'})
                });
            })
        } else{
            res.status(203).json({error:'Token Usado'});
        }
    });
    
 });


 router.post('/user/forget-password/add',(req,res)=>{
    const {email} = req.body

    Users.findOne({where:{email:email}}).then((data)=>{
        Forget.create({token:uuid.v4(), userId:data.id, status:false}).then((result)=>{
            res.json(result)
            const transporter = nodemailer.createTransport({
                host: "smtp.hostinger.com", 
                port: 465,
                auth: {
                  user: "new-password@mateusdavila.com", 
                  pass: "Goias123.", 
                },
              });
              let info =  transporter.sendMail({
                from: "new-password@mateusdavila.com",
                to: `${email}`, 
                subject: "YET Planejador - Verificação de Email!",
                text: "Here's a text version of the email.",
                html: `<p style="text-align: center;">Clique no link abaixo para validar os eu email:</p>
            
                <p style="text-align: center;">&nbsp;</p>
                
                <p style="text-align: center;">&nbsp;</p>
                
                <p style="text-align: center;"><a href="http://localhost:3001/forget-password/${result.token}">http://localhost:3001/confirm-email/${result.token}</a></p>
                
                <p style="text-align: center;">&nbsp;</p>
                `
                ,
              });
              console.log("Message sent: %s", info.messageId); 
              console.log("View email: %s", nodemailer.getTestMessageUrl(info)); 
              
        });
    });




    
 
    
 })

 module.exports = router;