const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Review = require('../../models/Review');
const validateReviewInput = require('../../validation/reviews');

router.get('/api/lairs/:lair_id/reviews', (req, res) => {
    Review.find({lair_id: req.params.lair_id})
        .then(reviews => res.json(reviews))
        .catch(err => res.status(404).json({noreviewsfound: 'No reviews found'}))
})

router.get('/api/reviews/:id', (req, res) => {
    Review.find({id: req.params.id})
        .then(review => res.json(review))
        .catch(err => res.status(404).json({noreviewfound: 'That review was not found'}))
})

router.post('/api/reviews', 
    passport.authenticate('jwt', { session: false }), 
    (req, res) => {
        const { errors, isValid } = validateReviewInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newReview = new Review({
            guest_id: req.user.id,
            lair_id: req.lair.id,
            rating: req.body.rating,
            body: req.body.body,            
        })

        newReview.save().then(review => res.json(review));
})

router.delete('/api/reviews/:id', 
    passport.authenticate('jwt', { session: false }), 
    (req, res) => {
        Review.find({id: req.params.id})
            .then(review => { 
              review.remove()
                .then(function(){return res.sendStatus(204)})
                .catch(err => res.json(err))
            })
            .catch(err => res.status(404)json({noreviewsfound: 'That review was not found'}))
    
})

module.exports = router;