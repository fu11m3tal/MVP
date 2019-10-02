const express = require('express');
const bodyParser = require('body-parser');
const controller = require('../database/controllers/fitness.js')
const app = express();
const db = require('../database/index.js')
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/account/', controller.getAllAccount);
app.get('/api/account/:username',  controller.getAccount);
app.put('/api/account/workout', controller.postWorkout);
app.post('/api/account', (req, res) => {
  controller.getAccount(req, res)
});
app.post('/workouts', controller.postWorkout);
app.put('/workouts');
app.delete('/workouts');

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
