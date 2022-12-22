const USER=require('../models/user.js');

const bcrypt=require('bcrypt');

const saltRounds=10;

const Joi=require("joi");

exports.saveUser=async (req,res,next)=>{
    try{
        const { name,email,password }=req.body;
   
        const signupCheck=Joi.object({
          name:Joi.string().min(6).max(30).required(),
          email:Joi.string().email().required(),
          password:Joi.string().min(8).max(12).required()
        })
        
        const { error }=signupCheck.validate(req.body);

        if(!error){
            let findExistingUser=await USER.findAll({where:{emailid:email}});

            if(findExistingUser.length===0){
              await bcrypt.hash(password,saltRounds,async (err,hash)=>{
              if(!err){
                    const saveUserDetailsResponse=await USER.create({
                    name:name,
                    emailid:email,
                    password:hash
                  })

                  if(saveUserDetailsResponse){
                    res.status(200).json({successfull:true,message:'Registration Successfull'});
                  }
                }
            })
          }
          else{
            res.status(401).json({message:'user exist'});
          }
    }
    else{
      res.status(401).json({message:"wrong entry"});
    }
    }
    catch(err){
        if(err){
          res.status(500).json({message:"something went wrong"});
        }
    }

}
