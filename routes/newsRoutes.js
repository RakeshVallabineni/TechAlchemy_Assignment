const express=require('express');
const router=express.Router();

const Authentication=require('../Authentication/Authorization');

const newsController=require('../controllers/newsController');

const apicache=require('apicache');
let cache=apicache.middleware;

router.get('/news',Authentication,cache('2 minutes'),newsController.getNews);


module.exports=router;
