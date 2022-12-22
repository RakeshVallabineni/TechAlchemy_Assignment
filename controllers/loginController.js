const bcrypt=require('bcrypt');

const USER=require('../models/user.js');

const Joi=require("joi");

const jwt=require('jsonwebtoken');

const token_secret=process.env.TOKEN_SECRET;

exports.login=async (req,res,next)=>{
    try{
        const { email,password }=req.body;

        const loginCheck=Joi.object({
            email:Joi.string().email(),
            password:Joi.string()
        })
        
        const { error }=loginCheck.validate(req.body);
        if (!error) {

            let findExistingUser=await USER.findAll({where:{emailid:email}});
            
            if(findExistingUser.length>0){
            
                const loginResponse=await bcrypt.compare(password,findExistingUser[0].password);
                if(loginResponse){
                    const Token=jwt.sign(findExistingUser[0].id,token_secret); 
                    res.status(200).json({Token:Token,message:'successfully logged in'});
                }
                else{
                    res.status(401).json({message:"wrong credentials"});
                }                                                     
            }
            else{
                res.status(401).json({message:'user does not exist'});
            }
        }
        else{
            res.status(401).json({message:'This is not an email'});
        }
    }
    catch(err){
        if(err){
            res.status(500).json({message:"something went wrong"});
        }
    }
  
}

