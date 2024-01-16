const jwt  = require('jsonwebtoken');
const User = require('../models/user.models');
const requireAuth = (req,res,next)=>{
    const {authorization} = req.headers;
    if(!authorization){
        res.status(401).json({error:'Authorization token required'});
    }
    const token = authorization.split(' ')[1];
    try{
       const {_id} =  jwt.verify(token,process.env.SECRET);
       req.user = User.findOne({_id}).select('_id');
       next();
    }catch(err){
        console.log(err);
        res.status(401).json({error:'Provide a valid token'});
    }
}
module.exports = requireAuth;