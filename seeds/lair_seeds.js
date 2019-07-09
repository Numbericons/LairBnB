// const faker = require('faker');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const db = require("../config/keys.js").mongoURI;
if (process.argv[1] === "/Users/zach/Desktop/LairBnB/seeds/lair_seeds.js") {
  mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(`${err}: Cannot connect to MongoDB`));
}
const Lair = require('../models/Lair');

const seedLairs = () => {
  Lair.deleteMany({}, (err) => { console.log(err) });
  return new Promise((res, rej) => {

    User.findOne({ username: "Lord Voldemort" })
      .then(user => {
          newLair = new Lair({
            name: "Riddle Manor",
            description: "The manor in Little Hangleton my filthy muggle father left to me",
            location: "England",
            lat: 51.566929,
            lng: -0.147071,
            city: "Little Hangleton",
            country: "England",
            rate: 2000,
            max_guests: 20,
            type: "manor",
            owner_id: user.id,
            minions: true,
            cemetery: true
          })
          newLair.save().then(lair => {
            console.log(`Success: ${lair.name} was created`);
          }, err => { console.log(`${lair.name} was unable to save due to: ${err}`) })
      })

    User.findOne({ username: "Jaws" })
      .then(user => {
        newLair = new Lair({
          name: "Cave of Jaws",
          description: "My hideaway ",
          location: "Costa Smeralda, Sardinia",
          lat: 51.566929,
          lng: -0.147071,
          city: "Costa Smeralda",
          country: "Italy",
          rate: 575,
          max_guests: 2,
          type: "cave",
          owner_id: user.id
        })
        newLair.save().then(lair => {
          console.log(`Success: ${lair.name} was created`);
        }, err => { console.log(`${newLair.name} was unable to save due to: ${err}`) })
      })
    

  })
}


seedLairs().then((res) => { mongoose.connection.close() });