// const faker = require('faker');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const db = require("../config/keys.js").mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(`${err}: Cannot connect to MongoDB`));

const User = require('../models/User');

const seedUsers = () => {
  User.deleteMany({}, (err) => { console.log(err) });
  return new Promise((res, rej) => {
    const userArray = [];

    userArray.push(
      new User({
        username: "Demo User",
        email: "DemoUser@gmail.com",
        image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/villains/demo+user.jpeg",
        password: "password"
      })
    );

    userArray.push(
      new User({
        username: "Lord Voldemort",
        email: "HeirOfSlytherin@aol.com",
        image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/villains/voldemort.png",
        password: "Slytherin",
        host_description: "The true heir of the noble Salazar Slytherin and the greatest dark lord in wizarding history"
      })
    );

    userArray.push(
      new User({
        username: "Jaws",
        email: "JamesBondMustDie@yahoo.com",
        image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/villains/jaws.jpeg",
        password: "dentist",
        host_description: "One tall, cool killer with a strong set of teeth"
      })
    );

    userArray.push(
      new User({
        username: "The Joker",
        email: "heath_died_too_soon@gmail.com",
        image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/villains/joker.jpeg",
        password: "WhYsOsErIoUs?",
        host_description: "I am an agent of chaos, and I can't wait to show you my new toys"
      })
    );

    userArray.push(
      new User({
        username: "Kylo Ren",
        email: "kylo@darkside.com",
        image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/villains/kylo_ren.jpeg",
        password: "password",
        host_description: "I am the supreme leader of the First Order. Bow to me."
      })
    );

    userArray.push(
      new User({
        username: "Maleficent",
        email: "StefanSucks@scorned.com",
        image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/villains/maleficent.jpeg",
        password: "aurora",
        host_description: "Protector of the Moors"
      })
    );

    userArray.push(
      new User({
        username: "Lucius Malfoy",
        email: "LMalfoy@hotmail.com",
        image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/villains/malfoy.jpeg",
        password: "pureblood",
        host_description: "The head of the most ancient and noble house of Malfoy. 100% pureblood, you filthy mudbloods."
      })
    );

    userArray.push(
      new User({
        username: "Ramsay Bolton",
        email: "ram_bolt48@gmail.com",
        image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/villains/ramsay_bolton.jpeg",
        password: "Reek123",
        host_description: "Don't mess with me or you'll end up like Reek"
      })
    );

    userArray.push(
      new User({
        username: "Saruman",
        email: "better_than_gandalf@yahoo.com",
        image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/villains/saruman.png",
        password: "onetruering",
        host_description: "Need funding for my half-orc and warg army. Give me the one true ring for three days free."
      })
    );

    userArray.push(
      new User({
        username: "Sauron",
        email: "OneTrueRing@aol.com",
        image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/villains/sauron.jpeg",
        password: "RULER0FTHEMALL",
        host_description: "Creator of the One True Ring and grand overlord of Middle-Earth"
      })
    );

    userArray.push(
      new User({
        username: "Bob",
        email: "bob@aol.com",
        image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/villains/storm_trooper.jpeg",
        password: "DarkSideHasCookies",
        host_description: "Come to the dark side. We have cookies. :)"
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