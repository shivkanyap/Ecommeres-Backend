
const router = require("express").Router();
const {addUser,loginUser,getAccount,userlogout } = require("../../app/controllers/userController")

router.post('/register',addUser)
router.post('/login',loginUser )
router.get('/account',getAccount)
// router.delete('/logout',userlogout)
module.exports = router;