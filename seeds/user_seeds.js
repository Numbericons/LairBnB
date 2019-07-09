// const faker = require('faker');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const db = require("../config/keys.js").mongoURI;
if (process.argv[1] === "/Users/zach/Desktop/LairBnB/seeds/user_seeds.js") {
  mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(`${err}: Cannot connect to MongoDB`));
}
const User = require('../models/User');

const seedUsers = () => {
  User.deleteMany({}, (err) => { console.log(err) });
  return new Promise((res, rej) => {
    const userArray = [];

    userArray.push(
      new User({
        username: "Lord Voldemort",
        email: "HeirOfSlytherin@aol.com",
        password: "Slytherin",
        host_description: "The true heir of the noble Salazar Slytherin and the greatest dark lord in wizarding history"
      })
    );

    userArray.push(
      new User({
        username: "Jaws",
        email: "JamesBondMustDie@yahoo.com",
        password: "dentist",
        host_description: "One tall, cool killer with a strong set of teeth"
      })
    );

    userArray.push(
      new User({
        username: "The Joker",
        email: "heath_died_too_soon@gmail.com",
        password: "WhYsOsErIoUs?",
        host_description: "I am an agent of chaos, and I can't wait to show you my new toys"
      })
    );







    for (let i=0, fin=userArray.length; i < fin; i++) {
      const user = userArray[i];
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
          if (err) throw err;
          user.password = hash;
          user.save().then(user => {
            console.log(`Success: ${user.username} was created`);
          }, err => { console.log(`${user.username} was unable to save due to: ${err}`) })
        })
      })
    }    
  })
}


seedUsers().then((res) => { mongoose.connection.close() });