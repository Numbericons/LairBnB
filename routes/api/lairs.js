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
                const id = lair._id//.id.join("")
                newLairs[id] = lair;
            })            
            res.json(newLairs)
        })
        .catch(err => res.status(404).json({nolairsfound: 'No lairs found'}))
})

router.get('/bounds/:bounds', (req, res) => {    
    let bounds = JSON.parse(req.params.bounds);
    return Lair.find({
        lat: { $gt: bounds.southWest.lat, $lt: bounds.northEast.lat },
        lng: { $gt: bounds.southWest.lng, $lt: bounds.northEast.lng }
    })
    .lean()
    .then(lairs => {
        const lairIds = lairs.map(lair => lair._id);
        Review.find({
            'lair_id': {
                $in: lairIds
            }
        }).then(reviews => {
            const lairReviews = {};
            reviews.forEach(review => {
                lairReviews[review.lair_id] = lairReviews[review.lair_id] || [];
                lairReviews[review.lair_id].push(review);
            })
            return res.json({lairs, reviews: lairReviews})
        })
    })
})

router.get('/:lair_id', (req, res) => {
    Lair.findById(req.params.lair_id)
        .lean()
        .then(lair => {
            return res.json(lair)
            })
        .catch(err => res.status(404).json({nolairsfound: 'That lair was not found'}))
})

module.exports = router;
