var fs = require('fs');
var path = require('path');

var tripsPath = path.join(__dirname, '../../data/trips.json');
var trips = JSON.parse(fs.readFileSync(tripsPath, 'utf8'));

var travel = function(req, res) {
    res.render('travel', { title: 'Travlr Getaways', trips: trips });
};

module.exports = { travel };
