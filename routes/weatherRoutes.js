const express=require('express');
const router=express.Router();

const weatherController=require('../controllers/weatherController');

const apicache=require('apicache');
let cache=apicache.middleware;

router.post('/weather',cache('2 minutes'),weatherController.getWeather);

module.exports=router;
