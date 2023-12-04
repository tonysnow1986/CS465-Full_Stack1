const express = require('express');
const router = express.Router();



const tripsController = require('../controllers/trips');


router
    .route('/trips')
    .get(tripsController.tripsList);
    

router
    .route('/trips')
    .post(tripsController.tripsAddTrip);
    
   
   
router
   .route('/tip/:tripCode')
   .get(tripsController.tripsFindByCode); 

router 
.route('/tip/:tripCode')
.put(tripsController.tripsUpdateTrip);

router
.route('/tip/:tripCode')
.delete(tripsController.tripsDeleteTrip);

   
   
   
   

module.exports = router;