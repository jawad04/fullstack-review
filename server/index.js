const express = require('express');
let app = express();
var getRepos = require('../helpers/github.js');
var mongo = require('../database/index.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

app.post('/repos', function (req, res) {
console.log('post')
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  getRepos.getReposByUsername(req.body.username, (err, response, body) => {
    if(err) {
      res.status(500).send(err.message);
    } else{
      var repoArr = JSON.parse(body);
      mongo.save(repoArr, (err) => {
        if(err) {
          res.status(500).send(err.message);
        } else {
          res.send();
        }
      });
    }
  });
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  mongo.top25Repos((err, results) => {
    if(err) {
      res.status(500).send(err.message);
    } else {
      res.send(results)
    }
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});