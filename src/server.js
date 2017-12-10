const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb');

app.use(bodyParser.json());
app.set('port', process.env.PORT || 3001);

const testData = require('./test-data');
const baseUrl = 'mongodb://localhost:27017';

const connection = MongoClient.connect(`${baseUrl}/test-mongo-viz`);
let _db;
let _collection;

app.post('/query', (req, res) => {
  return _collection.find(req.filter)
  .toArray()
  .then((result) => res.send(result))
});

connection.then((db) => {
  _db = db;
  _collection = _db.collection('test-collection');
  _collection.insert(testData)
    .then(() => {
      app.listen(app.get('port'), () => console.log(`Express listening on port ${app.get('port')}`));
    });
});
