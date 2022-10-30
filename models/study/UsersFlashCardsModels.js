const Sequelize = require('sequelize');
const Api = require('../../database/database');
const FlashCardsModel = require('./FlashCardsModels')


const FlashCards = Api.define('userFlashCards',{
    userId:{
        type:Sequelize.STRING,
        allowNull:false
    },
    level:{
        type:Sequelize.STRING,
        allowNull:false
    },
    when:{
        type:Sequelize.STRING,
        allowNull:false
    },
    flashcardId:{
        type:Sequelize.INTEGER,
        allowNull:false
    }

});

FlashCards.belongsTo(FlashCardsModel)
//FlashCards.sync({force:true});
module.exports = FlashCards;