const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

//get a current user
router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({
      id: req.user.id,
      username: req.user.username,
      email: req.user.email
    });
  })

router.get('/:user_id', (req, res) => {
  User.findById(req.params.user_id)
    .then(user => {
      return res.json(user);
    })
})

router.get('/', (req, res) => {
  return User.find({})
    .lean()
    .then(users => {
      const allUsers = {};
      users.forEach(user => {
        const id = user._id;
        let newUser = {id: id, email: user.email, username: user.username, image_url: user.image_url}
        allUsers[id] = newUser;
      })
      res.json(allUsers);
    })
})

router.patch('/edit', (req, res) => {
  User.findById(req.body.id)
    .then(user => {
        user.host_description = req.body.host_description;
        user.save()
          .then(user => {
            return res.json(user);
          }, err => {
            console.log(err);
          });
    }).catch(err => {
      return res.status(404).json({user: "User not found"})
    })
})

//sign up a user
router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    console.log(errors);
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400).json({email: "A user has already registered with this address"})
      } else {
        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password
        })

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            return newUser.save()
              .then(user => (
                res.json(user)                
              ), err => {
                console.log(err);
              })
          })
        })
      }
    })
  })

  //sign in
  router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;
  
    User.findOne({email})
      .then(user => {
        if (!user) {
          return res.status(404).json({email: 'This user does not exist'});
        }
  
        bcrypt.compare(password, user.password)
        .then(isMatch => {
            if (isMatch) {
            const payload = {
              id: user.id, 
              username: user.username,
              email: user.email,
              image_url: user.image_url,
              host_description: user.host_description
            };
            jwt.sign(
                payload,
                keys.secretOrKey,
                {expiresIn: 3600}, //1 hour expiration
                (err, token) => {
                res.json({
                    success: true,
                    token: 'Bearer ' + token
                });
              });
            } else {
                return res.status(400).json({password: 'Incorrect password'});
            }
        })
      })
  })

module.exports = router;