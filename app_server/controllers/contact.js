const fs = require('fs');

const meals = (req, res) => {
    pageTitle = 'Travlr Getaways - Contact';
    res.render('contact', {title: pageTitle});
};

module.exports = {
    contact
};