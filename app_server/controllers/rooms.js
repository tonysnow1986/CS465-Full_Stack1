const fs = require('fs');

const meals = (req, res) => {
    pageTitle = 'Travlr Getaways - Rooms';
    res.render('rooms', {title: pageTitle});
};

module.exports = {
    rooms
};