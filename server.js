const express = require('express');
const app = express();
const connection = require('./database/database');
const bodyPaser = require('body-parser');
const cors = require('cors')

const Users = require('./models/users/Users');
const ToDoList = require('./models/todolist/ToDoList');
const ToDoListSuggestion = require('./models/todolist/ToDoListSuggestion');
const Financce = require('./models/finance/FinanceModel');
const UserOptions = require('./models/users/UserOptions');
const VerificEmailModel = require('./models/users/VerificEmail')
const ForgetPasswordModels = require('./models/users/ForgetPassword')
const CategoryModel = require('./models/blog/CategoryModel');
const AdsModel = require('./models/ads/AdsModel');
const Article = require('./models/blog/ArticleModel');
const Radio = require('./models/radio/RadioModels')
const FlashCardsModel = require('./models/study/FlashCardsModels')
const CoursesModel = require('./models/study/CoursesModels')
const CountryModel = require('./models/countries/CountryModel')
const CitysModel = require('./models/cities/CityModel')
const CommercialModel = require('./models/users/CommercialUser')
const UserFlashCardModel  = require('./models/study/UsersFlashCardsModels');
const UsersController = require('./controllers/users/Users')
const UserOptionsController = require('./controllers/users/UserOptions')
const userFlashCards = require('./controllers/study/UsersFlashCardsController')
const ToDoListController = require('./controllers/todolist/ToDoList')
const ToDoListSuggestionController = require('./controllers/todolist/ToDoListSuggestion')
const FinanceController = require('./controllers/finance/Finances')
const VerificEmailControoler = require('./controllers/users/VerificEmail')
const ForgetPasswordController  = require('./controllers/users/ForgetPassword')
const CategoryController = require('./controllers/blog/CategoryController');
const ArticleController = require('./controllers/blog/ArticleController');
const RadioController = require('./controllers/radios/RadiosController');
const AdsController = require('./controllers/ads/AdsController');
const WordsController = require('./controllers/study/FlashCardsController');
const CoursesControoler = require('./controllers/study/CoursesController');
const CountryController = require('./controllers/citys/Country');
const CitiesController = require('./controllers/citys/CityController');
const CommercialUserController = require('./controllers/users/Commercial');
const SmsControoler = require('./sms/sms')

app.use(cors());
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Headers, *, Access-Control-Allow-Origin', 'Origin, X-Requested-with, Content_Type,Accept,Authorization','http://localhost:4200');
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
});
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
app.use('/', ToDoListSuggestionController)
app.use('/', FinanceController)
app.use('/', UserOptionsController)
app.use('/', VerificEmailControoler)
app.use('/', ForgetPasswordController)
app.use('/', CategoryController)
app.use('/', ArticleController)
app.use('/', RadioController)
app.use('/', AdsController)
app.use('/', WordsController)
app.use('/', CountryController)
app.use('/', CoursesControoler)
app.use('/', CitiesController)
app.use('/', CommercialUserController)
app.use('/', SmsControoler)
app.use('/', userFlashCards)








app.listen(process.env.PORT || 3000,()=>{
    console.log('Server Running')
});