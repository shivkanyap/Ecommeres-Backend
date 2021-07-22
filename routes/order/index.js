const router = require("express").Router();
const {addOrders,getOrder,deleteOrder,editOrder } = require("../../app/controllers/orderController")
const {authenticateUser} = require('../../app/middleware/authentication')
const {adminAccess} = require('../../app/middleware/access')


router.post('/addOrder',authenticateUser,adminAccess,addOrders)
router.get('/getOrder',authenticateUser,getOrder)
router.delete('/deleteOrder',authenticateUser,deleteOrder)
router.patch('/editOrder',authenticateUser,adminAccess,editOrder)
module.exports = router;