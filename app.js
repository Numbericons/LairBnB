const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const googleKey = require('./config/keys').google;
const keys = require('./config/keys');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require("./routes/api/users");
const lairs = require("./routes/api/lairs");
const bookings = require("./routes/api/bookings");
const reviews = require("./routes/api/reviews");
const path = require('path');
const jwt = require('jsonwebtoken');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    // jwt.sign({ google: googleKey }, keys.secretOrKey, (err, apiKey)=> {
      // res.cookie("google", apiKey)
      // res.json({status: 'cookies are sent'})
    // })
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/lairs", lairs);
app.use("/api/bookings", bookings);
app.use("/api/reviews", reviews);

app.get("/google", (req, res) => {
  res.json({ key: googleKey })
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));