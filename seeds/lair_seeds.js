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
            description: "The manor in Little Hangleton my filthy muggle father left to me. Filled to the brim with ancient artifacts and antiques. Make sure to be careful of your surroundings or Nagini might end up eating you as a snack.",
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
          description: "My hideaway in Costa Smeralda. If you're looking for a place to escape and never be found, you came to the right place. You're constantly surrounded by the ocean blue water in this beautiful town in Italy.",
          image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/jaws_james_bond_lair2.jpg",
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
          description: "One of my many hideouts. This one in particular comes with steel sliding doors and a torture chamber. Don't go peeking around too much into the rooms or I'll have one of my henchmen take your eyes out. HA! Kidding, kidding...",
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
          description: "When you just want a place to getaway. Conveniently lands in Tatooine for easy pick-up and departure. If you like the smell of moist fur and Jabba the Hut, this is a perfect spot for you!",
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
          description: "A castle in the Moors where I live with Aurora. Plenty of red apples around the castle for you to munch on. Don't go swimming in the water around the castle because it's infested with crocodiles. The real pool is located on the second floor main room.",
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
          description: "My splendid manor where I live with my wife, Narcissa, and heir, Draco. Our Lord Voldemort likes to have meetings here once in a while and there's not really much you or I can do about it. Besides that, it's a beautiful spot with a rich English background to it.",
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
          description: "Castle belonging to House Bolton. The main feature here is the torture chamber. My last pet, Reek, was held captive here and was trained to serve me. Comes equipped with all the tools necessary that will make any sadists' mouth drool.",
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
          description: "Don't be freaked out by the giant eye on top. It's actually quite cozy inside. Easy to get in, but the only was out is to jump off the roof onto a giant eagle.",
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
          description: "One of the most spectacular architectural feats in the history of Middle-Earth. This place emanates death. Feel the evil presence within.",
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
          description: "Welcome to Bob's House. Free coffee (Nespresso!). Area: beautiful & green; young mid to upper class families",
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
          description: "Come into my cave... I won't bite. Cozy spider webs are littered throughout, waiting for any living organisms to take a rest. Plenty of spiders flow in and out of the cave so you won't feel lonely.",
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
          name: "Frankenstein's Lab",
          description: "Take a ride on the wild side and venture to this lab on the hill. Even Ed Sheeran won't be able to silence your screams of agony. Ask about our matchmaking service!",
          image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/frankensteinscastle.jpeg",
          location: "Muhltal, Germany",
          lat: 49.793920,
          lng: 8.668150,
          country: "Germany",
          rate: 1999,
          max_guests: 15,
          type: "lab",
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
          description: "That's no moon.. It's a Space Station. And you won’t believe how Spacious even our crew rooms are! The scenic Death Star trench will remind you of the Grand Canyon back home. Romantic views in all directions of the fragments from the most exotic worlds. Don’t miss your chance for our construction pricing. The water heater can be tricky in the winter months, but you can call us for a backup generator.",
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
          description: "Rates are cheap and the capacity is high. Exceptionally comfortable bedroom with an adjoining stunning brand new bathroom in the best location in Lithuania. Suits independent travellers who want to stay in Aukštaitija without paying Aukštaitija prices. Bring ALL of your friends.",
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
          description: "I am longing to be with you, and by the sea, where we can talk together freely and build our castles in the air. If you want to experience Transylvania at it's best then come to Dracula's Castle. Centrally located, packed with blood bars and music venues along historic Fang street. Your stay will feel truly endless.",
          image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/draculascastle.jpg",
          location: "Castelul Bran, Romania",
          lat: 45.5149022, 
          lng: 25.364975,
          country: "Romania",
          rate: 10,
          max_guests: 2,
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
          description: "My armor is like tenfold shields, my teeth are swords, my claws are spears, the shock of my tail a thunderbolt, my wings a hurricane, and my breath death! Enjoy your stay, mortals!",
          image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/smaug_horde_cave.jpg",
          location: "Hobbiton",
          lat: -37.8720725,
          lng: 175.6817922,
          country: "New Zealand",
          rate: 9999,
          max_guests: 10,
          type: "cave",
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
          description: "This elegant home was built in the 1850's. It's complete with beautiful wooden windows, a scarlet red door, and a luxurious front yard. Book now before it's too late! Guest bedroom with double bed. Historical site!",
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
          description: "I am Locutus of Borg. Resistance is futile. Your life as it has been, is over. Lower your shields and surrender your ships. We will add your biological and technological distinctiveness to our own. Your culture will adapt to service us. You will be assimilated. Get 50% off the buffet Summer 2019 only!",
          image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/borg_cube.jpg",
          location: "Sector 001",
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
          description: "Icecrown Citadel is the greatest fortress of the Scourge and the last bastion of the dreaded Lich King. Located in the frozen wastes of Icecrown on the continent of Northrend, the Citadel is built around the Frozen Throne that once held the spirit of Ner'zhul until he joined with Arthas Menethil to become the new Lich King. Constructed from saronite, the Citadel is inhabited by some of the strongest and vilest of the Lich King's minions - a great army of the living dead standing between their dark master and those who seek to destroy him. Air conditioned spire overlooks Northrend. Colorful artwork adorns the walls throughout this curated interior, designed by one of Northrend's premier architects.",
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
          description: "Open halls high atop the Mountains of the Moon. Our cells are lovely, a very good size for a dwarf, with a double bed and has a beautiful view of the cliffs below, with your own door leading out to the 'patio'. AND a plentiful, tears of Lys free breakfast is included in the price of the room! Mind the Moon Door.",
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
          description: "You are GAURANTEED to love this. This monestary/manor atop a mountain will surely get your blood pumping. Enjoy the roomy interior and don't mind my henchmen smugg... moving items in and around the manor.",
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
          description: "Exquisite spires and dark coloration define these darkly beautiful ships. Our sentient enslaved CPU will be more than enough company for those traveling alone. If you go to Z'ha'dum, you will die.",
          image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/shadow_vessel.jpeg",
          location: "Z'ha'dum",
          lat: 39.7217047,
          lng: 21.6284006,
          country: "Lorien's Home",
          rate: 132,
          max_guests: 2,
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
          description: "No one may enter my cave unless they have my precious. Book now and get two nights for the cost of 1 precious. Featuring egyptian bed linen.",
          image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/gollumsCave.jpeg",
          location: "Misty Mountain",
          lat: 25.304603, 
          lng: 110.273657,
          country: "Middle-Earth",
          rate: 1,
          max_guests: 2,
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
          description: "Cozy hideaway, situated in the ruins of the Dwarrowdelf underground kingdom, beneath the magnificent Misty Mountains. Relax, re-charge your batteries and feel like home in a modern (in dwarf years), clean, tastefully furnished and safe apartment.",
          image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/BalrogKhazadDum.jpg",
          location: "Moria",
          lat: -45.053891, 
          lng: 168.814304,
          country: "Middle-Earth",
          rate: 1313,
          max_guests: 13,
          type: "castle",
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
          description: "Beautiful spot atop a Thai karst. Very low noise level, perfect for musicians. Stylish rooms are thoughtfully designed to offer every comfort and amenity you'd expect from a luxury hotel.",
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
      
    User.findOne({ username: "Hugo Strange" })
      .then(user => {
        newLair = new Lair({
          name: "Hugo Strange's Laboratory",
          description: "This humongous lab is a place you must stay at if you're ever in the Gotham area. It comes complete with a ginormous fan that keeps the place cool at all times. There's also various lab experiments you can work on. Once you get over the screaming of the patients, I'm sure you'll have a wonderful time dissecting and infecting.",
          image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/hugoStrangeLaboratory.jpeg",
          location: "Gotham City, NJ",
          lat: 40.478840, 
          lng: - 74.484777,
          city: "Gotham",
          country: "United States",
          rate: 1500,
          max_guests: 10,
          type: "lab",
          owner_id: user.id,
          torture_chamber: true,
          wifi: true,
          hero_detector: true
        })
        newLair.save().then(lair => {
          console.log(`Success: ${lair.name} was created`);
        }, err => { console.log(`${newLair.name} was unable to save due to: ${err}`) })
      })

    User.findOne({ username: "Lucifer" })
      .then(user => {
        newLair = new Lair({
          name: "9 Circles",
          description: "Circle VII: Violence The 7th circle is divided into 3 rings — outer are murderers sinking into boiling blood, the middle are the suicides who turned into bleeding trees, and the inner ring are blasphemers and sodomites who reside in a desert of burning sand and are scorched by burning rain falling from above. Book this or another circle today! Daily cleaning available.",
          image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/hell.jpg",
          location: "Hell",
          lat: 43.6543552,
          lng: -72.8557741,
          country: "United States",
          rate: 666,
          max_guests: 6,
          type: "cave",
          owner_id: user.id,
          torture_chamber: true,
          minions: true,
          pool: true
        })
        newLair.save().then(lair => {
          console.log(`Success: ${lair.name} was created`);
        }, err => { console.log(`${newLair.name} was unable to save due to: ${err}`) })
      })

    User.findOne({ username: "Dr. Doom" })
      .then(user => {
        newLair = new Lair({
          name: "Castle Doom",
          description: "Located on a mountain top outside the capital city of Doomstadt (originally known as Hassenstadt) within the small Eastern European country of Latveria. It was once the royal palace of Hassenstadt. Shared kitchen: own labelled fridge unit, own cupboard.",
          image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/dr_doom_planet_zero.jpg",
          location: "Latveria",
          lat: 56.9715833,
          lng: 23.9890791,
          country: "United States",
          rate: 150,
          max_guests: 3,
          type: "castle",
          owner_id: user.id,
          torture_chamber: true,
          wifi: true
        })
        newLair.save().then(lair => {
          console.log(`Success: ${lair.name} was created`);
        }, err => { console.log(`${newLair.name} was unable to save due to: ${err}`) })
      })

    User.findOne({ username: "Dr. Octopus" })
      .then(user => {
        newLair = new Lair({
          name: "Dr. Octopus's Laboratory",
          description: "This laboratory located in Forest Hills, Queens is a great spot to stay for any thrill-seekers. It comes complete with various lab experiments that you can ethically test on huma... animals and non-living organisms.",
          image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/drOctopusLab.jpg",
          location: "Forest Hills, Queens",
          lat: 40.725713, 
          lng: -73.792322,
          city: "Queens",
          country: "United States",
          rate: 888,
          max_guests: 8,
          type: "lab",
          owner_id: user.id,
          torture_chamber: true,
          wifi: true,
          hero_detector: true
        })
        newLair.save().then(lair => {
          console.log(`Success: ${lair.name} was created`);
        }, err => { console.log(`${newLair.name} was unable to save due to: ${err}`) })
      })

    User.findOne({ username: "Rick Sanchez" })
      .then(user => {
        newLair = new Lair({
          name: "Rick's Lab",
          description:
            "Rick: Alright, Morty, I just gotta erhp combine it with some of your DNA. Morty: Oh well, okay. [unzips] Rick: A hair, Morty.I need one of your hairs.This isn't Game of Thrones. That's the type of hijinx you can expect right here in Rick's lab! We got tiny people, tiny universes, tiny lasagna! Just stay away from my Eyeholes!",
          image_url:
            "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/rick_morty_lab.jpeg",
          location: "Davis",
          lat: 38.5568789,
          lng: -121.7699633,
          country: "United States",
          rate: 12,
          max_guests: 1,
          type: "lab",
          owner_id: user.id,
          torture_chamber: true,
          wifi: true
        });
        newLair.save().then(lair => {
          console.log(`Success: ${lair.name} was created`);
        }, err => { console.log(`${newLair.name} was unable to save due to: ${err}`) })
      })

    User.findOne({ username: "Walter White" })
      .then(user => {
        newLair = new Lair({
          name: "Meth Lab RV",
          description:
            "This beige 1986 Fleetwood Bounder recreation is perfect for all of your cooking needs! Enjoy the beautiful distressed aesthetic. Features homemade batteries and natural heating.",
          image_url:
            "https://lairbnb-dev.s3.us-east-2.amazonaws.com/lairs/breaking_bad_lab_3.png",
          location: "New Mexico",
          lat: 35.0826103,
          lng: -106.8165663,
          country: "United States",
          rate: 100,
          max_guests: 1,
          type: "lab",
          owner_id: user.id,
          wifi: true,
          minions: true
        });
        newLair.save().then(lair => {
          console.log(`Success: ${lair.name} was created`);
        }, err => { console.log(`${newLair.name} was unable to save due to: ${err}`) })
      })

  })
}


seedLairs().then((res) => { mongoose.connection.close() });