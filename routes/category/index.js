const router = require("express").Router();
const {addStoreCategory,
    getStoreCategory,
    deleteStoreCategory,
    editStoreCategory} =require('../../app/controllers/categoryController')

const {authenticateUser} = require('../../app/middleware/authentication')
const {adminAccess} = require('../../app/middleware/access')

router.post('/addCategory',authenticateUser,adminAccess,addStoreCategory)
router.get('/getCategory',authenticateUser, adminAccess,getStoreCategory)
router.patch('/editCategory',authenticateUser,adminAccess,editStoreCategory)
router.delete('/deleteCategory',authenticateUser,adminAccess,deleteStoreCategory)


module.exports=router;