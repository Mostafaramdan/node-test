const User = require('../db/models/users.model')
const jwt = require('jsonwebtoken')
const auth = async(req,res, next)=>{
    /*
    1- get authorizstion from header  (Bearer jwt )
    2- decode {_id:user id}
    3- search in user 
    4- if not enta msh auth
    5- return user
     */
    try{
        const token = req.header('Authorization').replace('Bearer ', '')
        console.log(token)
        const decodedToken = jwt.verify(token, process.env.JWTSECURITY)
        console.log(decodedToken)
        const user = await User.findOne({_id:decodedToken._id, 'tokens.token':token})
        res.send(user)
        if(!user) throw new Error('please authintcate')
        // if(!user.status) throw new Error('please activate your acc')
        req.user=user
        req.token = token
        next()        
    }
    catch(e){
        res.status(500).send({
            apistatus:false,
            data:e.message,
            message:"not authorized"
        })
    }
}

module.exports = auth