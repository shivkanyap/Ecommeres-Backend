const router = require("express").Router();
const {addOrders,getOrder,deleteOrder,editOrder } = require("../../app/controllers/productController")
const {authenticateUser} = require('../../app/middleware/authentication')
const {adminAccess} = require('../../app/middleware/access')


router.post('/addOrder',authenticateUser,adminAccess,addProduct)
router.get('/getOrder',authenticateUser,getOrder)
router.delete('/deleteOrder',authenticateUser,deleteOrder)
router.patch('/editOrder',authenticateUser,adminAccess,editOrder)
module.exports = router;