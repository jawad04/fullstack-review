const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  name: String,
  forks_count: Number,
  html_url: String,
  stargazers_count: Number

});

let Repo = mongoose.model('Repo', repoSchema);

let save = (reps, callback) => {
  for(let i = 0; i<reps.length; i++) {
    let repo = reps[i];
    let repos = new Repo({
      id: repo.id,
      name: repo.name,
      forks_count: repo.forks_count,
      html_url: repo.html_url,
      stargazers_count: repo.stargazers_count
    })
    Repo.count({'id': repo.id}, (err, results) => {
      if(err) {
        callback(err);
      } else {
        if(!results) {
           repos.save((err, repos) => {
             callback(err);
           })
        }
      }
    });
  }
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

let top25Repos = (callback) => {
  Repo.
    find().
    limit(25).
    sort('-stargazers_count').
    exec(callback);
}

module.exports.save = save;
module.exports.top25Repos = top25Repos;