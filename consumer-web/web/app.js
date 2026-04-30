const express = require('express');
const path = require('path');
const app = express();
const { getMovie } = require('../api/getText.js');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/movies.html'));
});

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.set('views', path.join(__dirname, 'views'));

const movies = [{
  "id": 100,
  "name": "James Bond",
  "date": "2021"
}];

app.get('/movies', async function(req, res){
  const movies = await getMovie('http://localhost:5000/movie/100');
  res.render('movies', {
    movies: movies,
    title: "Movies",
    header: "Movies"
  });
});

app.get('/movie/james-bond', (req, res) => {
  res.sendFile(path.join(__dirname, '/web.html'));
});

app.get('/movie/100', (req, res) => {
  res.sendFile(path.join(__dirname, '/movies.json'));
});

app.get("/api/getMovies", (req, res) => {
  res.sendFile(path.join(__dirname, '..', '/api/getMovies.js'));
});

app.listen(5000, () => {
  console.log('Server is up on port 5000');
});