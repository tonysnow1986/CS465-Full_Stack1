const request = require('request');
const apiOption = {
    server: "http://localhost:3000"
}

const renderTravelList = (req, res, responseBody) => {
    let message = null;
    pageTitle =  'Travlr Getways -Travel';
    if (!(responseBody instanceof Array)){
        message = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBody.length){
            message = 'No trips exist in database!';
        }
    }
    res.render('travel', {
        title: pageTitle, 
        trips: responseBody, 
               message});

    };

    // GET travel list
    const travelList = (req, res) => {
        const path = '/api/trips';
        const requestOptions = {
            url: `${apiOption.server}${path}`,
            method: 'GET',
            json: {}
        };
        console.info('>> travelController.travelList calling ' + requestOptions.url);

        request(
            requestOptions,
            (err, {statusCode}, body) => {
                if (err){
                    console.error(err);
                }
                renderTravelList(req, res, body);
            });
        
    };
    module.exports = {
        travelList,
    };