const Sequelize=require('sequelize');

const sequelize=require('../util/db.js');

const USER=sequelize.define('users',{
 
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey: true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    emailid:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    }


})

module.exports=USER;
