const express=require('express');
const app=express();

const dotenv=require('dotenv');
dotenv.config()

const cors=require('cors');
app.use(cors());

const rateLimit=require("express-rate-limit");

const limiter=rateLimit({
    windowMs:10*60*1000, //10 Mins
    max:50 //api calls limit to 50
})

app.use(limiter);
app.set('trust proxy',1);

const body_parser=require('body-parser');
app.use(body_parser.json());

const loginRoutes=require('./routes/loginRoutes');
app.use(loginRoutes);

const signupRoutes=require('./routes/signupRoutes');
app.use(signupRoutes);

const newsRoutes=require('./routes/newsRoutes');
app.use(newsRoutes);

const weatherRoutes=require('./routes/weatherRoutes');
app.use(weatherRoutes);

const sequelize=require('./util/db.js');

sequelize.sync();

app.listen(4000);