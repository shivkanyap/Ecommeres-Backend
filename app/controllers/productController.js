const express=require('express')
const router=express.Router()
const Product = require("../models/Products")
exports.addProduct = async (req, res) => {
    
    try {
      const data = {
        productName:req.body.productName,
        description:req.body.description,
        regular_price: req.body.regular_price,
        sell_price:req.body.sell_price,
        category:req.body. category,
        createdAt:req.body.createdAt,
        updatedAt:req.body.updatedAt,
        brand:req.body.brand,
        quantity:req.body.quantity,
        status_active:req.body.status_active,
        enableReviews:req.body. enableReviews

      }
        
      if (req.file) {
        data.thumbnail = req.file.filename;
        console.log(req.file, "i file");
      }
      const newProduct = new Product(data);
      const result  =  await  newProduct.save();
      return res.status(201).json({error:'',data:result});
    } 
      catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ error: 'Something went wrong', message: 'You are not authorized User ' });
    }
};
  

  exports.getProduct = async (req, res) => {
    try {
      const list = await Product.find();
      return res.status(200).json(list);
    } catch (error) {
      console.log(error);

  
      return res
        .status(500)
        .json({ error: 'Something went wrong', message: error.message });
    }
  };

  exports.deleteProduct = async (req, res) => {
    try {
      const item = await Product.findByIdAndDelete(req.query.id);
      if (!item) {
        return res
          .status(500)
          .json({ error: 'Something went wrong', message: 'No Entry Found' });
      }
      return res.status(200).json(item);
    } catch (error) {
      return res
        .status(500)
        .json({ error: 'Something went wrong', message: error.message });
    }
  };

  exports.editProduct = async (req, res) => {
    try {
      const category = await Product.findById(req.query.id);
      if (!category) {
        return res.status(404).json({ error: 'No Store Found' });
      }
      
  
    
      const updatedItem = await Product.findOneAndUpdate(
        { _id: req.query.id },
        req.body,
        { new: true }
      );
      res.status(200).json(updatedItem);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ error: 'Something went wrong', message: error.message });
    }
  };