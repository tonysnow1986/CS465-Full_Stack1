const fs = require('fs');

const meals = (req, res) => {
    pageTitle = 'Travlr Getaways - About';
    res.render('about', {title: pageTitle});
};

module.exports = {
    about
};