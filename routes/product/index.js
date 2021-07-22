const router = require("express").Router();
const {addProduct,getProduct,deleteProduct,editProduct } = require("../../app/controllers/productController")
const {authenticateUser} = require('../../app/middleware/authentication')
const {adminAccess} = require('../../app/middleware/access')
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `uploads`);
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  
  const fileFilter = (req, file, cb) => {
    if (
      file.mimetype.includes("png") ||
      file.mimetype.includes("jpeg")
    ) {
      cb(null, true);
    } 
  };

  const upload = multer({
    storage,
    fileFilter,
  });

router.post('/addProduct',authenticateUser,adminAccess,upload.single("thumbnail"),addProduct)
router.get('/getProduct',authenticateUser,getProduct)
router.delete('/deleteProduct',authenticateUser,adminAccess,deleteProduct)
router.patch('/editProduct',authenticateUser,adminAccess,editProduct)
module.exports = router;