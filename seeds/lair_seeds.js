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
            max_guests: 16,
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
          type: "manor",
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
          max_guests: 16,
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
          max_guests: 16,
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
          description: "Castle belonging to House Bolton.",
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
          country: "Middle-Earth",
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
          country: "Middle-Earth",
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
          description: "Welcome to Bob's House.",
          image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/stormtrooper_lair.png",
          location: "Alderaan",
          lat: 46.621948, 
          lng: 8.041452,
          country: "Alderaan",
          rate: 865,
          max_guests: 3,
          type: "spaceship",
          owner_id: user.id,
          wifi: true,
          pool: true
        })
        newLair.save().then(lair => {
          console.log(`Success: ${lair.name} was created`);
        }, err => { console.log(`${newLair.name} was unable to save due to: ${err}`) })
      })

    User.findOne({ username: "Aragog" })
      .then(user => {
        newLair = new Lair({
          name: "Aragog's Cave",
          description: "Come into my cave... I won't bite.",
          image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/AragogCave.jpg",
          location: "Forbidden Forest",
          lat: 51.540956, 
          lng: -0.553130,
          country: "England",
          rate: 1337,
          max_guests: 16,
          type: "cave",
          owner_id: user.id,
          wifi: true,
          minions: true,
          torture_chamber: true
        })
        newLair.save().then(lair => {
          console.log(`Success: ${lair.name} was created`);
        }, err => { console.log(`${newLair.name} was unable to save due to: ${err}`) })
      })

    User.findOne({ username: "Frankenstein" })
      .then(user => {
        newLair = new Lair({
          name: "Frankenstein's Castle",
          description: "Take a ride on the wild side and venture to this castle on the hill. Even Ed Sheeran won't be able to silence your screams of agony.",
          image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/frankensteinscastle.jpeg",
          location: "Muhltal, Germany",
          lat: 49.793920,
          lng: 8.668150,
          country: "Germany",
          rate: 1999,
          max_guests: 15,
          type: "castle",
          owner_id: user.id,
          wifi: true,
          pool: true,
          minions: true,
          torture_chamber: true
        })
        newLair.save().then(lair => {
          console.log(`Success: ${lair.name} was created`);
        }, err => { console.log(`${newLair.name} was unable to save due to: ${err}`) })
      })

    User.findOne({ username: "Darth Vader" })
      .then(user => {
        newLair = new Lair({
          name: "Death Star II",
          description: "That's no moon.. It's a space station.",
          image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/vader_deathstar.jpeg",
          location: "Moons of Endor",
          lat: 37.8970199, 
          lng: -122.5833064,
          country: "Space",
          rate: 456,
          max_guests: 12,
          type: "spaceship",
          owner_id: user.id,
          wifi: true,
          minions: true,
          hero_detector: true,
          torture_chamber: true
        })
        newLair.save().then(lair => {
          console.log(`Success: ${lair.name} was created`);
        }, err => { console.log(`${newLair.name} was unable to save due to: ${err}`) })
      })

    User.findOne({ username: "Hannibal Lecter" })
      .then(user => {
        newLair = new Lair({
          name: "Castle Lecter",
          description: "Rates are cheap and the capacity is high. bring ALL of your friends.",
          image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/HannibalCastle.jpeg",
          location: "Aukštaitija, Lithuania",
          lat: 50.464461, 
          lng: 4.869226,
          country: "Lithuania",
          rate: 1,
          max_guests: 16,
          type: "castle",
          owner_id: user.id,
          wifi: true,
          torture_chamber: true,
          pool: true
        })
        newLair.save().then(lair => {
          console.log(`Success: ${lair.name} was created`);
        }, err => { console.log(`${newLair.name} was unable to save due to: ${err}`) })
      })

    User.findOne({ username: "Count Dracula" })
      .then(user => {
        newLair = new Lair({
          name: "Dracula's Castle",
          description: "I am longing to be with you, and by the sea, where we can talk together freely and build our castles in the air.",
          image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/draculascastle.jpg",
          location: "Castelul Bran, Romania",
          lat: 45.5149022, 
          lng: 25.364975,
          country: "Romania",
          rate: 10,
          max_guests: 1,
          type: "castle",
          owner_id: user.id,
          torture_chamber: true,
          pool: true,
          cemetery: true,
          minions: true
        })
        newLair.save().then(lair => {
          console.log(`Success: ${lair.name} was created`);
        }, err => { console.log(`${newLair.name} was unable to save due to: ${err}`) })
      })

    User.findOne({ username: "Smaug" })
      .then(user => {
        newLair = new Lair({
          name: "Smaug's Gold Horde",
          description: "All you can carry gold! [But] My armor is like tenfold shields, my teeth are swords, my claws spears, the shock of my tail a thunderbolt, my wings a hurricane, and my breath death!",
          image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/smaug_horde_cave.jpg",
          location: "Hobbiton",
          lat: -37.8720725,
          lng: 175.6817922,
          country: "New Zealand",
          rate: 9999,
          max_guests: 10,
          type: "castle",
          owner_id: user.id,
          wifi: true
        })
        newLair.save().then(lair => {
          console.log(`Success: ${lair.name} was created`);
        }, err => { console.log(`${newLair.name} was unable to save due to: ${err}`) })
      })

    User.findOne({ username: "Freddy Krueger" })
      .then(user => {
        newLair = new Lair({
          name: "Elm Street Manor",
          description: "This elegant home was built in the 1850's. It's complete with beautiful wooden windows, a scarlet red door, and a luxurious front yard. Book now before it's too late!",
          image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/kreuger_elmstreet.jpg",
          location: "Ohio",
          lat: 41.375273,
          lng: -83.678690 ,
          city: "Springwood",
          country: "United States",
          rate: 1428,
          max_guests: 13,
          type: "manor",
          owner_id: user.id,
          torture_chamber: true,
          wifi: true,
          cemetery: true
        })
        newLair.save().then(lair => {
          console.log(`Success: ${lair.name} was created`);
        }, err => { console.log(`${newLair.name} was unable to save due to: ${err}`) })
      })

    User.findOne({ username: "Locutus of Borg" })
      .then(user => {
        newLair = new Lair({
          name: "Borg Cube",
          description: "You will be assimilated.",
          image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/borg_cube.jpg",
          location: "Space",
          lat: 34.0201613,
          lng: -118.6919205,
          city: "Borg Space",
          country: "Alpha Quadrant",
          rate: 10110,
          max_guests: 16,
          type: "spaceship",
          owner_id: user.id,
          torture_chamber: true,
          wifi: true,
          hero_detector: true,
          minions: true,
          pool: true
        })
        newLair.save().then(lair => {
          console.log(`Success: ${lair.name} was created`);
        }, err => { console.log(`${newLair.name} was unable to save due to: ${err}`) })
      })

    User.findOne({ username: "Lich King" })
      .then(user => {
        newLair = new Lair({
          name: "Icecrown Citadel",
          description: "Air conditioned spire overlooking Icecrown Citadel and Northrend.",
          image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/lichkingtower.jpg",
          location: "Icecrown, Northrend",
          lat: 33.658250, 
          lng: -117.767142,
          city: "Icecrown",
          country: "Northrend",
          rate: 75,
          max_guests: 5,
          type: "tower",
          owner_id: user.id,
          torture_chamber: true,
          minions: true,
          wifi: true,
          cemetary: true
        })
        newLair.save().then(lair => {
          console.log(`Success: ${lair.name} was created`);
        }, err => { console.log(`${newLair.name} was unable to save due to: ${err}`) })
      })

    User.findOne({ username: "Lysa Arryn" })
      .then(user => {
        newLair = new Lair({
          name: "The Moon Tower",
          description: "Spacious halls high atop the Mountains of the Moon. Mind the Moon Door.",
          image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/Lyssa_The_Eyrie.png",
          location: "The Eyrie",
          lat: 39.7217044,
          lng: 21.6284009,
          city: "Vale of Arryn",
          country: "Westeros",
          rate: 3000,
          max_guests: 9,
          type: "tower",
          owner_id: user.id,
          torture_chamber: true
        })
        newLair.save().then(lair => {
          console.log(`Success: ${lair.name} was created`);
        }, err => { console.log(`${newLair.name} was unable to save due to: ${err}`) })
      })

    User.findOne({ username: "Kristatos" })
      .then(user => {
        newLair = new Lair({
          name: "St. Cyril's Monastery",
          description: "This monestary/manor atop a mountain will surely get your blood pumping. Enjoy the spacious interior and don't mind my henchmen smugg... moving items in and around the manor.",
          image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/st_cyrils_monastery.jpg",
          location: "Peneas Valley, Greece",
          lat: 39.7217047,
          lng: 21.6284006,
          city: "Peneas Valley",
          country: "Greece",
          rate: 5001,
          max_guests: 15,
          type: "manor",
          owner_id: user.id,
          pool: true,
          wifi: true
        })
        newLair.save().then(lair => {
          console.log(`Success: ${lair.name} was created`);
        }, err => { console.log(`${newLair.name} was unable to save due to: ${err}`) })
      })

    User.findOne({ username: "A Shadow" })
      .then(user => {
        newLair = new Lair({
          name: "Shadow Dreadnaught",
          description: "If you go to Z'ha'dum, you will die.",
          image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/shadow_ship.jpg",
          location: "Z'ha'dum",
          lat: 39.7217047,
          lng: 21.6284006,
          country: "Lorien's Home",
          rate: 132,
          max_guests: 1,
          type: "spaceship",
          owner_id: user.id,
          wifi: true,
          hero_detector: true,
          torture_chamber: true
      })
      newLair.save().then(lair => {
        console.log(`Success: ${lair.name} was created`);
      }, err => { console.log(`${newLair.name} was unable to save due to: ${err}`) })
    })


    User.findOne({ username: "Gollum" })
      .then(user => {
        newLair = new Lair({
          name: "Gollum's Cave",
          description: "No one may enter my cave unless they have my precious",
          image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/gollumsCave.jpeg",
          location: "Misty Mountain",
          lat: 25.304603, 
          lng: 110.273657,
          country: "Middle-Earth",
          rate: 1,
          max_guests: 1,
          type: "cave",
          owner_id: user.id,
          pool: true,
          torture_chamber: true
        })
        newLair.save().then(lair => {
          console.log(`Success: ${lair.name} was created`);
        }, err => { console.log(`${newLair.name} was unable to save due to: ${err}`) })
      })

    User.findOne({ username: "Balrog" })
      .then(user => {
        newLair = new Lair({
          name: "Khazad-dûm",
          description: "Cozy hideaway, situated in the ruins of the Dwarrowdelf underground kingdom, beneath the magnificent Misty Mountains.",
          image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/BalrogKhazadDum.jpg",
          location: "Moria",
          lat: -45.053891, 
          lng: 168.814304,
          country: "Middle-Earth",
          rate: 1313,
          max_guests: 13,
          type: "cave",
          owner_id: user.id,
          torture_chamber: true
        })
        newLair.save().then(lair => {
          console.log(`Success: ${lair.name} was created`);
        }, err => { console.log(`${newLair.name} was unable to save due to: ${err}`) })
      })

    User.findOne({ username: "Francisco Scaramanga" })
      .then(user => {
        newLair = new Lair({
          name: "Thai Island",
          description: "Beautiful spot atop a Thai karst.",
          image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/thai+island.jpg",
          location: "Khao Phing Kan",
          lat: 8.2746301,
          lng: 98.4986943,
          country: "Thailand",
          rate: 3333,
          max_guests: 2,
          type: "tower",
          owner_id: user.id,
          torture_chamber: true
        })
        newLair.save().then(lair => {
          console.log(`Success: ${lair.name} was created`);
        }, err => { console.log(`${newLair.name} was unable to save due to: ${err}`) })
      })



  })
}


seedLairs().then((res) => { mongoose.connection.close() });