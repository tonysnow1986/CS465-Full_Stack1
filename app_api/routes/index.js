const express = require('express');
const router = express.Router();
//const jwt = require('express-jwt');

var {expressjwt: jwt} = require('express-jwt');

const auth = jwt({secret: process.env.JWT_SECRET, userProperty: 'payload', algorithms: ["HS256"],});



const authContoller = require('../controllers/authentication');
const tripsController = require('../controllers/trips');

router
.route('/login')
.post(authContoller.login);

router
.route('/register')
.post(authContoller.register);

router
    .route('/trips')
    .get(tripsController.tripsList);
    

router
    .route('/trips')
    .post(auth, tripsController.tripsAddTrip);
    
   
   
router
   .route('/tip/:tripCode')
   .get(tripsController.tripsFindByCode); 

router 
.route('/tip/:tripCode')
.put( auth, tripsController.tripsUpdateTrip);

router
.route('/tip/:tripCode')
.delete(auth, tripsController.tripsDeleteTrip);

   
   
   
   

module.exports = router;