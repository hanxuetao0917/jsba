var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

ig.use({
    access_token: '1313472298.1677ed0.9e9fdc7b035c462695279429ae977980',
    });

app.get('/', function(req, res) {
    ig.user_self_media_recent(function(err, medias, pagination, remaining, limit) {
        res.render('pages/index', {grams: medias});
    });
});

app.listen(3000);

console.log('App running at http://127.0.0.1:3000');