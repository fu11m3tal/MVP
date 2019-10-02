const { Users } = require('../models/fitness.js');

exports.getAllAccount = (req, res) =>  {
  Users.find({})
  .then((users) => {
    res.send(users)
  })
}

exports.getAccount = (req, res) =>  {
  var {username} = req.params
  Users.find({username})
  .then((user) => {
    res.send(user)
  })
}

exports.postAccount = (req, res) =>  {
  var newAccount = {
    firstName: "Steven",
    lastName: "Yoh",
    username: "fu11m3tal",
    score: 2000,
    dailyGoal: 100
  }
  const newAccountInstance = new User(newAccount)
  newAccountInstance.save()
  .then((account) => {
    res.send(account)
  })
  .catch(err => {
    res.send(err)
  })
}

exports.postWorkout = (req, res) => {
  var {username, score} = req.body
  Users.find({username})
  .then(user => {
    console.log(user)
    var currentScore = user[0].score;
    var newScore = currentScore + score
    console.log(username, newScore)
    Users.updateOne({ username }, { $set: { score: newScore }})
    .then(user => {
      console.log(user)
    })
    .catch(err => {
      res.send(err)
    })
  })
  .catch(err => {
    res.sendStatus(500)
  })
};

