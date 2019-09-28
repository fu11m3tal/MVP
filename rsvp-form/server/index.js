const express = require('express');
const bodyParser = require('body-parser');
const controller = require('../database/controllers/rsvp.js')
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/workouts');
app.post('/workouts');
app.put('/workouts');
app.delete('/workouts');

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
