const jwt=require('jsonwebtoken');

const USER=require('../models/user.js')

const token_secret=process.env.TOKEN_SECRET;

const Authorization=async (req,res,next)=>{
    try{
        const token=req.header('Authorization');
        
        const userId=Number(jwt.verify(token,token_secret));
        if(userId!=null){
            const userIdresponse=await USER.findByPk(userId);
            req.userIdentity=userIdresponse;
            next();
        }

    }
    catch(err){
        if(err){
            res.status(401).json({message:"you're not authorised"});
        }
        
    }


}

module.exports=Authorization;