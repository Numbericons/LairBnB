const mongoose = require('mongoose');
const db = require("../config/keys.js").mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(`${err}: Cannot connect to MongoDB`));

const Lair = require('../models/Lair');
const User = require('../models/User');
const Review = require('../models/Review');
const reviewersArray = [
  'April Graves',
  'Christie Brandao',
  'Zachary Oliver',
  'Charles Mancuso'
];

const seedReviews = () => {
  Review.deleteMany({}, (err) => { console.log(err) });
  const reviewerIds = [];
  const userObj = {};
  return User.find({})
    .then(res => {
      for (let i=0,fin=res.length; i < fin; i++) {
        const user = res[i];
        if (reviewersArray.includes(user.username)) {
          reviewerIds.push(user._id)
        }
        userObj[user._id] = user.username;
      };
      Lair.find({}).then(res => {
        for (let iLair=0,fin=res.length; iLair < fin; iLair++) {
          const lair = res[iLair];
          const baseAccuracy = Math.floor(Math.random() * 5) + 1;
          const baseCommunication = Math.floor(Math.random() * 5) + 1;
          const baseCleanliness = Math.floor(Math.random() * 5) + 1;
          const baseLocation = Math.floor(Math.random() * 5) + 1;
          const baseCheckIn = Math.floor(Math.random() * 5) + 1;
          const baseValue = Math.floor((baseAccuracy + baseCommunication + baseCleanliness + baseLocation + baseCheckIn)/5);
          const revIds = reviewerIds.slice(0);
          const numReviews = Math.floor(Math.random() * 5);
          for (let iReview=1,fin=numReviews; iReview <= fin; iReview++) {
            const randIdx = Math.floor(Math.random() * revIds.length);
            const revId = revIds[randIdx];
            revIds.splice(randIdx, 1);
            const reviewObj = generateReview({
              baseAccuracy,
              baseCommunication,
              baseCleanliness,
              baseLocation,
              baseCheckIn,
              baseValue,
              guest_id: revId,
              lair_id: lair._id,
              villain: userObj[lair.owner_id],
              name: lair.name,
              city: lair.city,
              country: lair.country,
              rate: lair.rate,
              type: lair.type,
              torture_chamber: lair.torture_chamber,
              minions: lair.minions,
              wifi: lair.wifi,
              hero_detector: lair.hero_detector,
              pool: lair.pool,
              cemetery: lair.cemetery,
            });
            const newReview = new Review(reviewObj);
            newReview.save().then(review => {
              console.log(`Success: user ${revId} reviewed ${lair.name}`);
              if (iLair === (res.length - 1) && iReview === numReviews) {
                mongoose.connection.close();
              }
            }, err => { console.log(`Fail: user ${revId} was unable to review ${lair.name} due to: ${err}`)})

          }
        }
      })
    }, err => {console.log(err);})
}

const generateReview = ( details ) => {
  const stayLength = Math.floor(Math.random() * 90) + 2;
  const locName = details.city || details.country;

  let accuracy = Math.random() >= 0.5 && details.baseAccuracy || (details.baseAccuracy - 1);
  accuracy = accuracy < 1 && 1 || accuracy;
  let communication = Math.random() >= 0.5 && details.baseCommunication || (details.baseCommunication - 1);
  communication = communication < 1 && 1 || communication;
  let cleanliness = Math.random() >= 0.5 && details.baseCleanliness || (details.baseCleanliness - 1);
  cleanliness = cleanliness < 1 && 1 || cleanliness;
  let location = Math.random() >= 0.5 && details.baseLocation || (details.baseLocation - 1);
  location = location < 1 && 1 || location;
  let check_in = Math.random() >= 0.5 && details.baseCheckIn || (details.baseCheckIn - 1);
  check_in = check_in < 1 && 1 || check_in;
  let value = Math.random() >= 0.5 && details.baseValue || (details.baseValue - 1);
  value = value < 1 && 1 || value;

  const veryPositiveIntros = [
    `This place was amazing!`,
    `A great place to stay in ${locName}!`,
    `Loved staying at ${details.name}!`,
    `We stayed ${stayLength} days at ${details.villain}'s lair and had a fantastic time!`,
    `I can't recommend this place enough! Best ${details.type} ever!`,
    `Can't wait to go back! Awesome trip!`,
    `Wish I could live there forever.`,
    `Definitely an experience to treasure.`
  ];

  const positiveIntros = [
    `It was a lovely experience.`,
    `Had a pleasant time at ${details.villain}'s lair.`,
    `Nice lair. Would recommend.`,
    `Worth the money. Try it.`,
    `Enjoyed a pretty good stay at ${details.name}.`,
    `Spent ${stayLength} days and don't regret it.`,
    `A good place to stay in ${locName}.`,
    `Not the best ${details.type} but definitely worth the money.`
  ];

  const neutralIntros = [
    `It was okay overall.`,
    `Had a decent time at ${details.villain}'s lair.`,
    `Stayed ${stayLength} days and it was alright.`,
    `A very neutral experience.`,
    `Might rent this ${details.type} again. Might not.`,
    `Not a bad place to stay.`,
    `I have mixed feelings about my trip.`,
    `Definitely had both good points and bad points.`
  ];

  const negativeIntros = [
    `Kinda wasted ${stayLength} days of my life here.`,
    `${details.name} definitely has room for improvement.`,
    `Probably not gonna rent this again.`,
    `A few good points but mostly bad ones.`,
    `Memorable... but not in a good way.`,
    `Not staying here again.`,
    `If you want an amazing trip, look elsewhere.`,
    `${details.villain} could do better.`
  ];

  const veryNegativeIntros = [
    `This place sucks so much. Do not recommend!`,
    `Don't stay at ${details.villain}'s lair. Period.`,
    `Had a terrible time at ${details.name}.`,
    `Everything was awful.`,
    `I barely got away with my life. It was that bad!`,
    `I'd sue ${details.villain} if I wasn't afraid for my life.`,
    `Going into witness protection after leaving this review.`,
    `Can't believe I wasted my money on this!`
  ];

  const goodSummary = [
    `Was a great experience overall.`,
    `In conclusion, I definitely recommend this.`,
    `Really wish I could have stayed longer!`,
    `Can't wait to go back!`,
    `I would stay here again in a heartbeat!`
  ];

  const medSummary = [
    "If you're looking for a decent place, this is fine. If you want greatness, look elsewhere.",
    "Despite a few flaws, this lair's not bad.",
    "It's got pros and cons. Take it or leave it.",
    `In conclusion, this ${details.type} is pretty average.`,
    "TLDR: not terrible, not great"
  ];

  const badSummary = [
    "DO. NOT. GO.",
    "TLDR: You'd be better off ripping off your own arm than staying here.",
    "Summary: no! no! no! Turn around!",
    "I really want my money back...",
    "Wish I had never gone!"
  ];

  const commObj = {
    val: communication,
    good: [
      `${details.villain} was a great host and offered us tips on the best sites to see nearby.`,
      `When we lost our key, ${details.villain} was very quick to get us back inside.`,
      `${details.villain} was always quick to respond when we had questions.`,
      "We were treated respectfully and kindly.",
      `${details.villain} made sure to let us know they were free to answer any of our questions.`,
      `${details.villain} always responded quickly.`,
      "The host acted very friendly with us.",
      `${details.villain} was very polite.`
    ],
    bad: [
      "Really despised talking to our host. They insulted us at every turn.",
      `${details.villain} kept calling us weird words we didn't understand.`,
      "Whenever we tried to ask questions, the host threatened us.",
      `${details.villain} really looked down on us and made sure we knew it.`,
      `${details.villain} was never around when needed.`,
      `${details.villain} kept talking in gibberish. Pretty sure we were being insulted.`,
      "When I asked for my friend's kidneys back, our host glared at us and was very rude.",
      "We felt really disrespected because our host never returned our calls."
    ]
  };

  const cleanObj = {
    val: cleanliness,
    good: [
      "Everything was spotless. I was really impressed by how clean the lair was.",
      `You can tell how much ${details.villain} cares about hosting. The lair was really clean and inviting.`,
      "No complaints whatsoever about the cleanliness.",
      `${details.name} was by far the cleanest ${details.type} I've ever seen.`,
      `Every part of ${details.name} was tidy and clean.`,
      "I think the lair was even cleaner than my own home.",
      `Staying at ${details.name} really changed my perspective about ${details.type}s. I never thought they could be so clean!`,
      `${details.villain}'s lair was pristine.`
    ],
    bad: [
      `${details.name} was absolutely filthy. We almost hurled.`,
      "It was horrible... the floors were covered in a strange substance.",
      `The ${details.type} was dirty. The grime on the walls was at least two inches thick!`,
      `I found some strange blood spatters under the bed. Can't say it's the cleanest ${details.type} I've stayed at...`,
      `${details.villain} should be ashamed about how dirty the lair was when I was there.`,
      "If I could only use one word to describe the lair, I would use 'filthy.'",
      `It's disastrous how dirty ${details.name} was.`,
      "The whole lair was disgusting."
    ]
  }

  const locObj = {
    val: location,
    good: [
      `The areas surrounding ${details.name} were really scenic and beautiful.`,
      "Great location. Absolutely breathtaking.",
      "There were plenty of great places to eat and things to do nearby.",
      `${locName} has a fantastic night life.`,
      `Had a great time exploring ${locName}.`,
      `There's plenty to do around ${locName}.`,
      `Absolutely love ${locName}. What an amazing place!`,
      "The location was perfect and very convenient for us."
    ],
    bad: [
      `${locName} became a complete hell hole thanks to ${details.villain}.`,
      `${locName} is really dangerous. We were scared for our lives multiple times.`,
      `There's nothing worthwhile to see around the lair, so the location is pretty bad.`,
      `${details.villain} destroyed all the sites I wanted to see.`,
      `I didn't even get to see ${locName} because ${details.villain} kept me imprisoned the whole time.`,
      `${locName} had a strange odor. Pretty sure ${details.villain} is to blame.`,
      "The location sucked.",
      `We weren't impressed by what ${locName} had to offer.`
    ]
  };


  const valueObj = {
    val: value,
    good: [
      `This place is a steal at only $${details.rate} per night.`,
      `You really get your bang for your buck with this place.`,
      "This is surprisingly affordable for what you get.",
      "I was amazed by how cheap it was.",
      `At this price, I had high expectations. I must say that ${details.name} really delivered!`,
      `Wow. I couldn't believe you get all this for just $${details.rate}/night.`,
      `This is what living in luxury feels like.. What a great value!`,
      "The price is really great"
    ],
    bad: [
      "This lair is really overpriced. It's just not worth it.",
      `${details.villain} is scamming people by overcharging.`,
      "You really expect more if you're shelling out this amount of money...",
      `$${details.rate} per night is too much money for this.`,
      "This is the worst value lair on all of LairBnB.",
      "This lair isn't worth the rate charged (I want a refund).",
      `It's absolutely despicable to charge $${details.rate}/night for this lair.`,
      `Why is this place so expensive? It's not that great.`
    ]
  };

  const tChamberObj = {
    hasAmenity: details.torture_chamber,
    good: [
      "We really enjoyed the torture chamber. We took turns turns trying it out on some super heroes.",
      "My friend's favorite part of the whole trip was the torture chamber. He's really into that kind of stuff.",
      `${details.villain} was gracious enough to show me their torture chamber and tell us all about its history.`,
      "The torture chamber was interesting. Although I didn't use it, my friend had a blast with it.",
      `${details.villain} was really proud of their torture chamber. I can't blame them either. It was definitely top-notch.`
    ],
    bad: [
      `${details.villain} trapped my friend in the torture chamber. I still don't know where she is.`,
      "I couldn't sleep at night because there were terrible screams emanating from the torture chamber every night.",
      "The torture chamber was overhyped. It didn't live up to expectations.",
      `Although the description claimed there was a torture chamber, I couldn't find it despite hours of looking.`,
      "The torture chamber was missing a lot of tools that every decent torture chamber should have."
    ]
  };

  const minionObj = {
    hasAmenity: details.minions,
    good: [
      `${details.villain}'s minions were very well-trained and obedient.`,
      "I had a blast using the minions at the lair. They followed my every command.",
      "The minions were really great. It almost makes me want to become a super villain.",
      `The minions at ${details.name} were very respectful and capable.`,
      `${details.villain} had the best minions I've ever seen.`
    ],
    bad: [
      "I was really excited to boss around some minions but they kept running away from me. Huge disappointment!",
      "The minions were very disrespectful to us.",
      `${details.villain}'s minions refused to obey us. Total letdown.`,
      `There weren't any minions at ${details.name} despite ${details.villain} claiming there were.`,
      "One of the minions abducted one of my friends. The private investigators are still looking for him."
    ]
  };

  const detectorObj = {
    hasAmenity: details.hero_detector,
    good: [
      "The hero detector was present but obviously broken. I happen to know my friend is secretly a super hero, and it failed to detect her.",
      "I thought the hero detector was interesting. Our host showed us how to use it and we spent a lot of time looking for super heroes",
      "We used the hero detector to hunt down some heroes and ask them for autographs. Score!",
      "I accidentally broke the hero detector but our host was very understanding and only charged us a small replacement fee.",
      "The hero detector was very advanced. I'd never seen such a high-tech detector before."

    ],
    bad: [
      "Our host made our stay extremely unpleasant after their broken hero detector indicated we were super heroes.",
      "The hero detector beeped obnoxiously the whole time.",
      "The hero detector kept shooting flames at me.",
      "I woke up in the middle of the night, and the hero detector was floating in front of my face. Freaked me out a lot.",
      "Our host falsely accused me of breaking the hero detector and charged us an outrageous replacement fee."
    ]
  };

  let bodyParts = [];
  const avgRating = (accuracy + communication + cleanliness + location + check_in + value) / 6;

  let bestPoints = [];
  let worstPoints = [];

  const objArray = [commObj, cleanObj, locObj, valueObj];
  for (let i=0,fin=objArray.length; i < fin; i++) {
    const obj = objArray[i];
    const arrIdx = Math.floor(Math.random() * 8);
    if (obj.val >= 4) {
      const desc = obj.good[arrIdx];
      bestPoints.push(desc);
    } else if (obj.val < 3 ) {
      const desc = obj.bad[arrIdx];
      worstPoints.push(desc);
    }
  }

  const amenityArray = [tChamberObj, minionObj, detectorObj];
  for (let i=0,fin=amenityArray.length; i < fin; i++) {
    const obj = amenityArray[i];
    const arrIdx = Math.floor(Math.random() * 5);
    if (Math.random() < 0.7 && obj.hasAmenity) {
      const desc = obj.good[arrIdx];
      bestPoints.push(desc);
    } else if (obj.hasAmenity) {
      const desc = obj.bad[arrIdx];
      worstPoints.push(desc);
    }
  }

  const chosenBestPoints = [];
  for (let i=0,fin=(bestPoints.length); i<fin; i++) {
    const randIdx = Math.floor(Math.random() * bestPoints.length);
    const point = bestPoints[randIdx];
    if (Math.random() < 0.7) {
      chosenBestPoints.push(point);
    }
    bestPoints.splice(randIdx, 1);
    if (bestPoints.length === 0) {
      break;
    }
  }


  const chosenWorstPoints = [];
  for (let i=0,fin=(worstPoints.length); i<fin; i++) {
    const randIdx = Math.floor(Math.random() * worstPoints.length);
    const point = worstPoints[randIdx];
    if (Math.random() < 0.3) {
     chosenWorstPoints.push(point);
    }
    worstPoints.splice(randIdx, 1);
    if (worstPoints.length === 0) {
      break;
    }
  }

  const goodAndBadPoints = chosenBestPoints.length > 0 && chosenWorstPoints.length > 0;

  const introIdx = Math.floor(Math.random() * 8);
  let introPool;
  if (!goodAndBadPoints && chosenBestPoints.length > 0) {
    introPool = veryPositiveIntros;
  } else if (chosenBestPoints.length > chosenWorstPoints.length) {
    introPool = positiveIntros;
  } else if (chosenBestPoints.length === chosenWorstPoints.length) {
    introPool = neutralIntros;
  } else if (goodAndBadPoints && chosenWorstPoints.length > chosenBestPoints.length) {
    introPool = negativeIntros;
  } else {
    introPool = veryNegativeIntros;
  }
  bodyParts.push(introPool[introIdx]);
  
  if (goodAndBadPoints) {
    bodyParts.push("Good Points:");
  }
  bodyParts = bodyParts.concat(chosenBestPoints);

  if (goodAndBadPoints) {
    bodyParts.push("Bad Points:");
  }
  bodyParts = bodyParts.concat(chosenWorstPoints);



  if (bodyParts.length > 4) {
    const summaryIdx = Math.floor(Math.random() * 5);
    let summary;
    if (chosenWorstPoints.length === 0) {
      summary = goodSummary[summaryIdx];
    } else if ((chosenBestPoints.length >= chosenWorstPoints.length)) {
      summary = medSummary[summaryIdx];
    } else {
      summary = badSummary[summaryIdx];
    }
    bodyParts.push(summary);
  }
  const body = bodyParts.join(" ");

  return {
    accuracy,
    communication,
    cleanliness,
    location,
    check_in,
    value,
    body,
    guest_id: details.guest_id,
    lair_id: details.lair_id
  }
}

seedReviews();