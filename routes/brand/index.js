const router = require("express").Router();
const {addBrand,getBrand,deleteBrand} = require('../../app/controllers/brandController')
const {authenticateUser} = require('../../app/middleware/authentication')
const {adminAccess} = require('../../app/middleware/access')

router.post('/addbrand',authenticateUser,adminAccess,addBrand)
router.get('/getbrand',authenticateUser,adminAccess,getBrand)
router.delete('/deletebrand',authenticateUser,adminAccess,deleteBrand)

module.exports=router;