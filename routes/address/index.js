const router = require("express").Router();
const {addAddress,getAddress,deleteAddress,editAddress} = require('../../app/controllers/addressController')
const {authenticateUser} = require('../../app/middleware/authentication')
const {adminAccess} = require('../../app/middleware/access')

router.post('/addAddress',authenticateUser,adminAccess,addAddress)
router.get('/getAddress',authenticateUser,adminAccess,getAddress)
router.delete('/deleteAddress',authenticateUser,adminAccess,deleteAddress)
router.patch('/editAddress',authenticateUser,adminAccess,editAddress)

module.exports=router;











