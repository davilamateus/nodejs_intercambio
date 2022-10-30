const express = require('express');
const auth = require('../../middleware/userMiddleware');
const router = express.Router();
const ArticleModel = require('./../../models/blog/ArticleModel');
const CategoryModel = require('./../../models/blog/CategoryModel');
const Sequelize = require('sequelize')
const Op = Sequelize.Op;



router.get('/blog/article',(req,res)=>{
    const id = req.query['article'];

    ArticleModel.findOne({where:{id:id}, include:[{model:CategoryModel}]})
        .then((data)=>{res.status(200).json(data)})
        .catch((error)=>{res.status(400).json(error)})
})


router.get('/blog/articles', (req,res)=>{

    const category = req.query['category'];
    const country = req.query['country'];
    const page = req.query['page'];


    if(category != undefined && country != undefined ){
        ArticleModel.findAll({
            where:
            {[Op.and]: [{ categoryId:category}, { countryId: country }]}   , 
            include:[{model:CategoryModel}] , 
            limit : [((page-1)*7), 7],
        })
                .then((data)=>{res.status(200).json(data)})
                .catch((error)=>{res.status(400).json(error)});
    }   
    
    else if(category != undefined){
        ArticleModel.findAll({where:{categoryId:category},
            include:[{model:CategoryModel}],
            limit : [((page-1)*7), 7],
        })
                .then((data)=>{res.status(200).json(data)})
                .catch((error)=>{res.status(400).json(error)});
    }
    else if(country != undefined){
        console.log(country)
        ArticleModel.findAll({
            where:{countryId:country},
            include:[{model:CategoryModel}],
            order:[["createdAt","DESC"]],
            limit : [((page-1)*7), 7],
        })
                .then((data)=>{res.status(200).json(data)})
                .catch((error)=>{res.status(400).json(error)});
    }
    else{
        console.log('*************************')

       ArticleModel.findAll({
        include:[{model:CategoryModel}]
    })
                .then((data)=>{res.status(200).json(data)})
                .catch((error)=>{res.status(400).json(error)});
       
    }
});

router.post('/admin/blog/article', auth , (req,res)=>{
    const user = req.user;
    const {title, categoryId, description, country,img} = req.body;

    if(user.category != '1'){
        res.status(204).json({error:'No Auth'});
    } else{
        ArticleModel.create({
            categoryId:categoryId,
            description:description,
            countryId:country,
            title:title,
            img:img
        })
                .then(()=>{res.json({success:'Article Add'})})
                .catch((error)=>{res.status(400).json(error)});
    }

});

router.patch('/admin/blog/article', auth , (req,res)=>{
    const user = req.user;
    const {title, categoryId, description, country,img} = req.body;

    if(user.category != '2'){
        res.status(204).json({error:'No Auth'});
    } else{

        ArticleModel.update({
            categoryId:categoryId,
            description:description,
            countryId:country,
            title:title,
            img:img
            },{
            where:{id:id}})
                    .then(()=>{res.status(200).json({success:'Update'})})
                    .catch((error)=>{res.status(400).json(error)});
    }

});

router.delete('/admin/blog/article', auth , (req,res)=>{
    const user = req.user;
    const {id} = req.body;

    if(user.category != '2'){
        res.status(204).json({error:'No Auth'});
    } else{
        ArticleModel.destroy({
            where:{id:id}})
            .then(()=>{res.status(200).json({success:'Delete'})})
            .catch((error)=>{res.status(400).json(error)});
    }

});


router.get('/blog/search', (req,res)=>{
    const search = req.query['search'];
    const country = req.query['country'];


   ArticleModel.findAll({
    where: {
        [Op.or]: [
          {
            title: {
                [Op.like]: `%${search}%`
            },
          }, {
            description: {
                [Op.like]: `%${search}%`
            },
          },
        ],
        [Op.and]:[
            {
                countryId:country
            }
        ]
      } , include:[{model:CategoryModel}],
      order:[
    ],
    limit : [((1-1)*20), 20],
  })
            .then((data)=>{res.status(200).json(data)})
            .catch((error)=>{res.status(400).json(error)})
});




module.exports = router;