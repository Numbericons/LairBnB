const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Lair = require('../../models/Lair');
const validateLairInput = require('../../validation/lairs');

router.get('/api/lairs', (req, res) => {
    Lair.find()
        .then(lairs => res.json(lairs))
        .catch(err => res.status(404).json({nolairsfound: 'No lairs found'}))
})

router.get('/api/lairs/:lair_id', (req, res) => {
    Lair.find({id: req.params.lair_id})
        .then(lair => res.json(lair))
        .catch(err => res.status(404).json({nolairsfound: 'That lair was not found'}))
})

module.exports = router;
