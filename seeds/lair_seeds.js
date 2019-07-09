const mongoose = require('mongoose');
const db = require("../config/keys.js").mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(`${err}: Cannot connect to MongoDB`));

const Lair = require('../models/Lair');
const User = require('../models/User');

const seedLairs = () => {
  Lair.deleteMany({}, (err) => { console.log(err) });
  return new Promise((res, rej) => {

    User.findOne({ username: "Lord Voldemort" })
      .then(user => {
          newLair = new Lair({
            name: "Riddle Manor",
            description: "The manor in Little Hangleton my filthy muggle father left to me.",
            image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/voldemort_riddle_house.png",
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
            cemetery: true,
            torture_chamber: true
          })
          newLair.save().then(lair => {
            console.log(`Success: ${lair.name} was created`);
          }, err => { console.log(`${lair.name} was unable to save due to: ${err}`) })
      })

    User.findOne({ username: "Jaws" })
      .then(user => {
        newLair = new Lair({
          name: "Cave of Jaws",
          description: "My hideaway.",
          image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/jaws_james_bond_lair.jpg",
          location: "Costa Smeralda, Sardinia",
          lat: 41.0858,
          lng: 9.4494,
          city: "Costa Smeralda",
          country: "Italy",
          rate: 575,
          max_guests: 2,
          type: "cave",
          owner_id: user.id,
          minions: true,
          wifi: true,
          torture_chamber: true
        })
        newLair.save().then(lair => {
          console.log(`Success: ${lair.name} was created`);
        }, err => { console.log(`${newLair.name} was unable to save due to: ${err}`) })
      })

    User.findOne({ username: "The Joker" })
      .then(user => {
        newLair = new Lair({
          name: "Warehouse 318",
          description: "One of my many hideouts. This one in particular comes with steel sliding doors and torture chamber.",
          image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/joker_lair.jpg",
          location: "Gotham City, NJ",
          lat: 40.7020737,
          lng: -73.9708292,
          city: "Gotham",
          country: "United States",
          rate: 1000,
          max_guests: 10,
          type: "warehouse",
          owner_id: user.id,
          minions: true,
          hero_detector: true,
          wifi: true,
          torture_chamber: true
        })
        newLair.save().then(lair => {
          console.log(`Success: ${lair.name} was created`);
        }, err => { console.log(`${newLair.name} was unable to save due to: ${err}`) })
      })

    User.findOne({ username: "Kylo Ren" })
      .then(user => {
        newLair = new Lair({
          name: "Space Fortress",
          description: "When you just want a place to getaway. Conveniently lands in Tatooine for easy pick-up and departure.",
          image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/kylo_ren_lair.png",
          location: "Tatooine",
          lat: 36.409475,
          lng: -116.795353,
          city: "Tatooine",
          country: "Outer Rim",
          rate: 1569,
          max_guests: 50,
          type: "spaceship",
          owner_id: user.id,
          wifi: true,
          torture_chamber: true,
          pool: true
        })
        newLair.save().then(lair => {
          console.log(`Success: ${lair.name} was created`);
        }, err => { console.log(`${newLair.name} was unable to save due to: ${err}`) })
      })

    User.findOne({ username: "Maleficent" })
      .then(user => {
        newLair = new Lair({
          name: "Maleficent's Castle",
          description: "A castle in the Moors where I live with Aurora.",
          image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/maleficent_castle.jpeg",
          location: "Moors",
          lat: 50.990840, 
          lng: -0.616128,
          country: "Moors",
          rate: 5185,
          max_guests: 16,
          type: "castle",
          owner_id: user.id,
          minions: true,
          cemetery: true,
          pool: true,
          torture_chamber: true
        })
        newLair.save().then(lair => {
          console.log(`Success: ${lair.name} was created`);
        }, err => { console.log(`${newLair.name} was unable to save due to: ${err}`) })
      })

    User.findOne({ username: "Lucius Malfoy" })
      .then(user => {
        newLair = new Lair({
          name: "Malfoy Manor",
          description: "My splendid manor where I live with my wife, Narcissa, and heir, Draco.",
          image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/lucius_malfoy_manor.jpg",
          location: "England",
          lat: 51.349461, 
          lng: -1.992606,
          city: "Wiltshire",
          country: "England",
          rate: 999,
          max_guests: 25,
          type: "manor",
          owner_id: user.id,
          minions: true,
          cemetery: true,
          torture_chamber: true
        })
        newLair.save().then(lair => {
          console.log(`Success: ${lair.name} was created`);
        }, err => { console.log(`${newLair.name} was unable to save due to: ${err}`) })
      })
      
    User.findOne({ username: "Ramsay Bolton" })
      .then(user => {
        newLair = new Lair({
          name: "Dreadfort",
          description: "Castle belonging to House Bolton",
          image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/dreadfort_lair.jpeg",
          location: "The North, Westeros",
          lat: 54.369864, 
          lng: -5.555663,
          country: "Westeros",
          rate: 2955,
          max_guests: 14,
          type: "castle",
          owner_id: user.id,
          minions: true,
          torture_chamber: true
        })
        newLair.save().then(lair => {
          console.log(`Success: ${lair.name} was created`);
        }, err => { console.log(`${newLair.name} was unable to save due to: ${err}`) })
      })

    User.findOne({ username: "Saruman" })
      .then(user => {
        newLair = new Lair({
          name: "Sauron's Tower",
          description: "Don't be freaked out by the giant eye on top. It's actually quite cozy inside.",
          image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/saruman_sauron_tower.jpeg",
          location: "Mordor",
          lat: -39.156699,
          lng: 175.632141,
          country: "Mordor",
          rate: 2870,
          max_guests: 12,
          type: "tower",
          owner_id: user.id,
          minions: true,
          cemetery: true,
          torture_chamber: true
        })
        newLair.save().then(lair => {
          console.log(`Success: ${lair.name} was created`);
        }, err => { console.log(`${newLair.name} was unable to save due to: ${err}`) })
      })

    User.findOne({ username: "Sauron" })
      .then(user => {
        newLair = new Lair({
          name: "Barad Dur",
          description: "Feel the evil presence within.",
          image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/sauron_barad_dur.jpg",
          location: "Mordor",
          lat: -39.156696, 
          lng: 175.632138,
          country: "Mordor",
          rate: 4249,
          max_guests: 12,
          type: "tower",
          owner_id: user.id,
          minions: true,
          cemetery: true,
          torture_chamber: true
        })
        newLair.save().then(lair => {
          console.log(`Success: ${lair.name} was created`);
        }, err => { console.log(`${newLair.name} was unable to save due to: ${err}`) })
      })

    User.findOne({ username: "Bob" })
      .then(user => {
        newLair = new Lair({
          name: "Bob's House",
          description: "Welcome to Bob's House",
          image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/stormtrooper_lair.png",
          location: "Alderaan",
          lat: 46.621948, 
          lng: 8.041452,
          country: "Alderaan",
          rate: 865,
          max_guests: 3,
          type: "house",
          owner_id: user.id,
          wifi: true,
          pool: true
        })
        newLair.save().then(lair => {
          console.log(`Success: ${lair.name} was created`);
        }, err => { console.log(`${newLair.name} was unable to save due to: ${err}`) })
      })


  })
}


seedLairs().then((res) => { mongoose.connection.close() });