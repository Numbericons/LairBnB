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
        username: "April Graves",
        email: "ag@aol.com",
        image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/villains/april.jpeg",
        password: "password"
      })
    );

    userArray.push(
      new User({
        username: "Christie Brandao",
        email: "cb@yahoo.com",
        image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/villains/christie.jpeg",
        password: "password"
      })
    );

    userArray.push(
      new User({
        username: "Charles Mancuso",
        email: "cm@gmail.com",
        image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/villains/charles.jpeg",
        password: "password"
      })
    );

    userArray.push(
      new User({
        username: "Zachary Oliver",
        email: "zo@comcast.net",
        image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/villains/tornado+.jpg",
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

    userArray.push(
      new User({
        username: "Aragog",
        email: "uLookTasty@fandango.com",
        image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/villains/Aragog.jpg",
        password: "gogarA",
        host_description: "My mom says I spend too much time on the web."
      })
    );

    userArray.push(
      new User({
        username: "Frankenstein",
        email: "F34RL355@yahoo.com",
        image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/villains/frankenstein.jpeg",
        password: "ElizabethLavenza",
        host_description: "Beware; for I am fearless, and therefore powerful."
      })
    );
    
    userArray.push(
      new User({
        username: "Darth Vader",
        email: "annie@skywalker.dark",
        image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/villains/vader.jpeg",
        password: "DrainTheDagobah",
        host_description: "Be careful not to choke on your convictions."
      })
    );

    userArray.push(
      new User({
        username: "Hannibal Lecter",
        email: "Silence_of_the_lambs_is_a_terrible_movie@longEmail.com",
        image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/villains/Hannibal.jpg",
        password: "passw0rd",
        host_description: "Once you get over the mask I'm wearing, I'm actually a nice guy."
      })
    );

    userArray.push(
      new User({
        username: "Count Dracula",
        email: "garlicbreath@transylvania.edu",
        image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/villains/dracula.jpg",
        password: "woodenstakes",
        host_description: "There are darknesses in life and there are lights, and you are one of the lights, the light of all lights."
      })
    );

    userArray.push(
      new User({
        username: "Smaug",
        email: "ispitfire@eminem.co",
        image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/villains/smaug.jpg",
        password: "filthyhobbitses",
        host_description: "His rage passes description - the sort of rage that is only seen when rich folk that have more than they can enjoy suddenly lose something that they have long had but have never before used or wanted."
      })
    );

    userArray.push(
      new User({
        username: "Freddy Krueger",
        email: "askmeaboutskincare@beauty.com",
        image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/villains/Kreuger.jpg",
        password: "3lmstr33t",
        host_description: "43, single, willing to meet up at your location!"
      })
    );

    userArray.push(
      new User({
        username: "Locutus of Borg",
        email: "drone@collective.net",
        image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/villains/locutus.jpg",
        password: "picard",
        host_description: "I am Locutus of Borg. Resistance is futile. Your life as it has been is over. From this time forward, you will service us."
      })
    );

    userArray.push(
      new User({
        username: "Lich King",
        email: "arthasnomore@scourge.com",
        image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/villains/lichking.jpg",
        password: "ForTheHorde",
        host_description: "You speak of justice? Of cowardice? I will show you the justice of the grave... and the true meaning of fear."
      })
    );

    userArray.push(
      new User({
        username: "Lysa Arryn",
        email: "vale@tully.com",
        image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/villains/Lysa+Arryn.jpeg",
        password: "isoball",
        host_description: "A man will tell you poison is dishonorable, but a woman's honor is different. The Mother shaped us to protect our children, and our only dishonor is in failure."
      })
    );

    userArray.push(
      new User({
        username: "Kristatos",
        email: "bestSmugglerEver@jamesBond.com",
        image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/villains/kristatosJamesBond.jpg",
        password: "BONDmustDIE",
        host_description: "I'm a suave, smart smuggler. In my free time I enjoy playing scrabble."
      })
    );

    userArray.push(
      new User({
        username: "A Shadow",
        email: "chaos@firstones.gov",
        image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/villains/shadow.jpg",
        password: "whatdoyouwant",
        host_description: "All life is transitory. A dream. We all come together in the same place at the end of time. If I don't see you again here, I will see you in a little while, in the place where no shadows fall."
      })
    );

    userArray.push(
      new User({
        username: "Gollum",
        email: "myprecious@onering.com",
        image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/villains/gollum.jpeg",
        password: "myprecious",
        host_description: "My Precioussss!"
      })
    );

    userArray.push(
      new User({
        username: "Balrog", 
        email: "iShallPass@bridge.com",
        image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/villains/Balrog.jpeg",
        password: "gandalf_sux",
        host_description: "Nothing can stand in my way!"
      })
    );

    userArray.push(
      new User({
        username: "Francisco Scaramanga",
        email: "oneshot@onekill.edu",
        image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/villains/Francisco_Scaramanga_(Christopher_Lee)_-_Profile.png",
        password: "neverunderestimate",
        host_description: "Mr. Fat has just resigned. I am the new Chairman of the Board. [he goes outside, looks over at Fat's family tomb] He always did like that mausoleum. Put him in it."
      })
    );

    userArray.push(
      new User({
        username: "Hugo Strange",
        email: "baldyBald@bald.Bald",
        image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/villains/hugoStrange.jpg",
        password: "mrCleanIsMyHero",
        host_description: "Do not question my sanity. I am a model of sanity!"
      })
    );

    userArray.push(
      new User({
        username: "Lucifer",
        email: "fallen@angel.co",
        image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/villains/lucifer.jpg",
        password: "dante666",
        host_description: "Never can true reconcilement grow where wounds of deadly hate have pierced so deep..."
      })
    );

    userArray.push(
      new User({
        username: "Dr. Doom",
        email: "doomedone@doom.doom",
        image_url:
          "https://lairbnb-dev.s3.us-east-2.amazonaws.com/villains/dr_doom.jpeg",
        password: "doomedone",
        host_description:
          "The son of a Romani witch, Von Doom has been depicted as a supervillain, the archenemy of the Fantastic Four, and the leader of the fictional nation called Latveria."
      })
    );

    userArray.push(
      new User({
        username: "Dr. Octopus",
        email: "noOneWillDateMe@2ManyArms.org",
        image_url: "https://lairbnb-dev.s3.us-east-2.amazonaws.com/villains/DrOctopus2.png",
        password: "crustacean",
        host_description: "Do you know the best way to get me to laugh? Give me ten-tickles, HAHA!"
      })
    );
    
    userArray.push(
      new User({
        username: "Rick Sanchez",
        email: "shwifty@pocketmortys.com",
        image_url:
          "https://lairbnb-dev.s3.us-east-2.amazonaws.com/villains/evil_rick_morty.jpeg",
        password: "wubalubadubdub",
        host_description:
          "Known for his reckless, nihilistic behavior and pessimistic personality, the character has been well received. He is a sociopathic mad scientist who seems to know everything in the universe and thus finds life a traumatizing and pointless experience. However, despite assuming to be the smartest person in the universe, there have been times where he has been wrong."
      })
    );

    userArray.push(
      new User({
        username: "Walter White",
        email: "fgraymatter@malcom.com",
        image_url:
          "https://lairbnb-dev.s3.us-east-2.amazonaws.com/villains/walter+white.jpeg",
        password: "cranston",
        host_description:
          "A chemistry honors graduate of the California Institute of Technology, Walt co-founded the company Gray Matter Technologies with his close friend Elliott Schwartz and his then-girlfriend Gretchen."
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