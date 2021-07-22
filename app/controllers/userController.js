const express=require('express')
const router=express.Router()
const {User}=require('../models/User')
const { authenticateUser}=require('../middleware/authentication')



exports.addUser = async (req, res) => {
    
    try {
      const data = req.body
        
          
      const newUser = new User(data);
      const result  =  await  newUser.save();
      return res.status(201).json({error:'',data:result});
    } 
      catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ error: 'Something went wrong', message: error.message });
    }
};

exports.loginUser =  (req, res) => {
    const body=req.body
    User.findByCredentials(body.email,body.password)
    .then((user)=>{
        return user.generateToken()
    })
    .then((token)=>{
        res.send({token})
    })
    .catch((err)=>{
        res.send(err)
    })    
    
    
};

exports.getAccount=(req,res)=>{
    const {user}=req
    res.send(user)
}


router.userlogout=(req,res)=>{
    const {user,token}=req
    User.findByIdAndUpdate(user._id,{$pull:{tokens:{token:token}}})
    .then(function(user){
        res.send({notice:'successfully logout...'})
    })
    .catch(function(err){
        res.send(err)
    })
}
// router.get('/loggedinuser', authenticateUser,async function(req,res){
   
//     try{
//     let users=await User.find()
//     users.forEach((user)=>{
//         user.tokens.forEach((token)=>{
//            if(token.token===req.token){
//                 return res.send(user)
//             }
//         })
//      })
//     }catch(e){
//         return res.send(e,{msg:'error'})
//     }
// })


// module.exports={
//     usersRouter:router
// }