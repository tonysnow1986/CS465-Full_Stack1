const fs = require('fs');

const meals = (req, res) => {
    pageTitle = 'Travlr Getaways - News';
    res.render('News', {title: pageTitle});
};

module.exports = {
    news
};