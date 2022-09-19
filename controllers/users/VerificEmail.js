const nodemailer = require("nodemailer"); // Require the Nodemailer package
const express = require('express');
const router = express();
const uuid = require('uuid');
const token = uuid.v4();
const Email = require('../../models/users/VerificEmail')
const User = require('../../models/users/Users')



// Confirm Email
router.get('/email/email-confirm/:token',(req,res)=>{
    const tokenConfirm = req.params.token;
        Email.findOne({where:{
            token:tokenConfirm
          }})
           .then((data)=>{
                if(data ){
                  User.update(
                    {verified:true},
                    {where:{email:data.userEmail}})
                    .then(()=>{
                      res.status(200).json({sucess:'Email Confirmed'})   
                    });
                } else{res.status(300).json({error:'Token Invalide'})}

    }); 
});



// Confirm Generetor
  router.post('/email/confirm-email/', async (req,res)=> {
    Email.create({userEmail:req.body.email, token:token})
  
  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com", 
    port: 465,
    auth: {
      user: "new-user@mateusdavila.com", 
      pass: "Goias123.", 
    },
  }); 
  let info = await transporter.sendMail({
    from: "new-user@mateusdavila.com",
    to: `${req.body.email}`, 
    subject: "YET Planejador - Verificação de Email!",
    text: "Here's a text version of the email.",
    html: `<p style="text-align: center;">Clique no link abaixo para validar os eu email:</p>

    <p style="text-align: center;">&nbsp;</p>
    
    <p style="text-align: center;">&nbsp;</p>
    
    <p style="text-align: center;"> <h1>Email mudado</h1><a href="http://localhost:3001/confirm-email/${token}">http://localhost:3001/confirm-email/${token}</a></p>
    
    <p style="text-align: center;">&nbsp;</p>
    `
  });
  console.log("Message sent: %s", info.messageId); 
  console.log("View email: %s", nodemailer.getTestMessageUrl(info)); 
  });
  


module.exports = router