
const router = require("express").Router();
const {addUser,loginUser,getAccount,userlogout } = require("../../app/controllers/userController")
const {authenticateUser} = require('../../app/middleware/authentication')

router.post('/register',addUser)
router.post('/login',loginUser )
router.get('/account',authenticateUser,getAccount)
router.delete('/logout',authenticateUser,userlogout)
module.exports = router;