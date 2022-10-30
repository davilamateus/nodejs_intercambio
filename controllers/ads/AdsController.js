const express = require('express');
const router = express.Router();
const AdsModel = require('./../../models/ads/AdsModel');
const auth = require('./../../middleware/userMiddleware');
const { Op } = require("sequelize");




router.post('/admin/ads/', auth, (req, res) => {

    const { title, countryId, imgWeb, imgMobile, link, commercial } = req.body;

    if (req.user.category == '2') {

        if (title !== undefined && link !== undefined && countryId !== undefined && imgWeb !== undefined && commercial !== undefined && imgMobile !== undefined) {

            AdsModel.create({
                title: title,
                commercial: commercial,
                countryId: countryId,
                imgWeb: imgWeb,
                imgMobile: imgMobile,
                link: link})
                .then(() => {res.status(200).json({ success: 'Ads Add' })})
                .catch((error) => { res.status(400).json(error) });

        } else {
            res.status(201).json({ Error: 'Fault Infors' });

        }

    } else {
        res.status(204).json({ error: 'No Auth' });
    }

});

router.get('/ads', (req, res) => {
    const country = req.query['country'];
    const commercial = req.query['commercial'];

    AdsModel.findAll({ 
        where:{[Op.and]: [{ commercial:commercial}, { countryId: country }]}})
            .then((data) => { res.status(200).json(data) })
            .catch((error) => { res.status(400).json(error) });

});

router.patch('/admin/ads/', auth, (req, res) => {

    const { title, commercial, country, link, id,imgWeb,imgMobile } = req.body;


    if (req.user.category == '2') {

        if (title !== undefined && imgMobile !== undefined && country !== undefined & link !== undefined && id !== undefined) {

            AdsModel.update({
                title: title,
                commercial: commercial,
                country: country,
                imgWeb: imgWeb,
                imgMobile: imgMobile,
                link: link
            }, { where: { id: id } })
                .then(() => { res.status(200).json({ success: 'Ads Update' }) })
                .catch((error) => { res.status(400).json(error) });

        } else {
            res.status(201).json({ Error: 'Fault Infors' });

        }

    } else {
        res.status(204).json({ error: 'No Auth' });
    }

});


router.delete('/admin/ads/', auth, (req, res) => {

    const {id } = req.body;


    if (req.user.category == '2') {

        if (id !== undefined) {

            AdsModel.destroy({ where: { id: id } })
            .then(() => { res.status(200).json({ success: 'Ads Delete' }) })
            .catch((error) => { res.status(400).json(error) });

        } else {
            res.status(201).json({ Error: 'Fault Infors' });

        }

    } else {
        res.status(204).json({ error: 'No Auth' });
    }

});

module.exports = router;