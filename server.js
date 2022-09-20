const express = require('express');
const app = express();
const connection = require('./database/database');
const bodyPaser = require('body-parser');
const cors = require('cors')

const Users = require('./models/users/Users');
const ToDoList = require('./models/todolist/ToDoList');
const Financce = require('./models/finance/Finance');
const UserOptions = require('./models/users/UserOptions');
const VerificEmailModel = require('./models/users/VerificEmail')
const ForgetPasswordModels = require('./models/users/ForgetPassword')
const CategoryModel = require('./models/blog/CategoryModel');
const AdsModel = require('./models/ads/ads');
const Article = require('./models/blog/ArticleModel');
const Radio = require('./models/radio/RadioModels')
const StudyModel = require('./models/study/StudyModels')
const UsersController = require('./controllers/users/Users')
const UserOptionsController = require('./controllers/users/UserOptions')
const ToDoListController = require('./controllers/todolist/ToDoList')
const FinanceController = require('./controllers/finance/Finances')
const VerificEmailControoler = require('./controllers/users/VerificEmail')
const ForgetPasswordController  = require('./controllers/users/ForgetPassword')
const CategoryController = require('./controllers/blog/CategoryController');
const ArticleController = require('./controllers/blog/ArticleController');
const RadioController = require('./controllers/radios/RadiosController');
const AdsController = require('./controllers/ads/AdsController');
const StudyController = require('./controllers/study/StudyController');

app.use(cors())
app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({extended:false}))


connection
        .authenticate()
        .then(()=>{
            console.log('Database Connected')
        })
        .catch((error)=>{
            console.log(error)
        });



app.use('/', UsersController)
app.use('/', ToDoListController)
app.use('/', FinanceController)
app.use('/', UserOptionsController)
app.use('/', VerificEmailControoler)
app.use('/', ForgetPasswordController)
app.use('/', CategoryController)
app.use('/', ArticleController)
app.use('/', RadioController)
app.use('/', AdsController)
app.use('/', StudyController)








app.listen(3000,()=>{
    console.log('Server Running')
});