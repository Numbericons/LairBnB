const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Lair = require('../../models/Lair');
const validateLairInput = require('../../validation/lairs');

router.get('/', (req, res) => {
    Lair.find()
        .lean()
        .then(lairs => {
            const newLairs = {};
            lairs.forEach( lair => {
                const id = lair._id.id.join("")
                newLairs[id] = lair;
            })
            res.json(newLairs)
        })
        .catch(err => res.status(404).json({nolairsfound: 'No lairs found'}))
})

router.get('/:lair_id', (req, res) => {
    Lair.find({id: req.params.lair_id})
        .then(lair => res.json(lair))
        .catch(err => res.status(404).json({nolairsfound: 'That lair was not found'}))
})

module.exports = router;
