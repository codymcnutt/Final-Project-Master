// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/Characters')
// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
var controller = require('./controllers/controller')

app.get('/', function(req, res){
  res.sendFile("/parallax-project/final.html", {root : './public'})
});
app.get('/home', function(req, res){
  res.sendFile("/html/home.html", {root : './public'})
});

app.post('/api/savedGames', controller.createCharacter)


// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})