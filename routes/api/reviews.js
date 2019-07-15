const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Review = require('../../models/Review');
const validateReviewInput = require('../../validation/reviews');

router.get('/', (req, res) => {
    return Review.find({})
        .lean()
        .then(reviews => {
            const newReviews = {};
            reviews.forEach(review => {
                const id = review._id;
                newReviews[id] = review;
            })
            res.json(newReviews);
        })
})

router.get('/lairs/:lair_id', (req, res) => {
    return Review.find({lair_id: req.params.lair_id})
        .lean()
        .then(reviews => {
            const newReviews = {};
            const guestIds = [];
            reviews.forEach(review => {
                const id = review._id;
                newReviews[id] = review;
                guestIds.push(review.guest_id);
            })
            User.find({
                '_id': {
                    $in: guestIds
                }
            }).then(users => {
                const newUsers = {};
                users.forEach(user => {
                    const id = user._id
                    newUsers[id] = user;
                })
                res.json({reviews: newReviews, users: newUsers})
            })            
        })
        .catch(err => res.status(404).json({noreviewsfound: 'No reviews found'}))
})

router.get('/:id', (req, res) => {
    Review.find({id: req.params.id})
        .then(review => res.json(review))
        .catch(err => res.status(404).json({noreviewfound: 'That review was not found'}))
})

router.post('/', 
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

router.delete('/:id', 
    passport.authenticate('jwt', { session: false }), 
    (req, res) => {
        Review.find({id: req.params.id})
            .then(review => { 
              review.remove()
                .then(function(){return res.sendStatus(204)})
                .catch(err => res.json(err))
            })
            .catch(err => res.status(404).json({noreviewsfound: 'That review was not found'}))
    
})

module.exports = router;