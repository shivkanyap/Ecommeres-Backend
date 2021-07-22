const router = require("express").Router();
const {addProduct,getProduct,deleteProduct,editProduct } = require("../../app/controllers/productController")
const {authenticateUser} = require('../../app/middleware/authentication')
const {adminAccess} = require('../../app/middleware/access')


router.post('/addProduct',authenticateUser,adminAccess,addProduct)
router.get('/getProduct',authenticateUser,getProduct)
router.delete('/deleteProduct',authenticateUser,adminAccess,deleteProduct)
router.patch('/editProduct',authenticateUser,adminAccess,editProduct)
module.exports = router;