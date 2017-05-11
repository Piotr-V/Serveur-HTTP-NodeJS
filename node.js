var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.render('chambre.ejs', {page: '"Accueil"'});
})

app.get('/about', function(req, res) {
    res.render('chambre.ejs', {page: '"A Propos"'});
})

.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.send(404, 'Page introuvable !');
});

app.listen(3000);