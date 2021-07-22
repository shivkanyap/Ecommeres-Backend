const express=require('express')
const router=express.Router()
const Order = require("../models/Orders")
exports.addOrders = async (req, res) => {
    
    try {
      const data = req.body
        
          
      const newOrder = new Order(data);
      const result  =  await  newOrder.save();
      return res.status(201).json({error:'',data:result});
    } 
      catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ error: 'Something went wrong', message: 'You are not authorized User ' });
    }
};
  

  exports.getOrder = async (req, res) => {
    try {
      const list = await Order.find();
      return res.status(200).json(list);
    } catch (error) {
      console.log(error);

  
      return res
        .status(500)
        .json({ error: 'Something went wrong', message: error.message });
    }
  };

  exports.deleteOrder = async (req, res) => {
    try {
      const item = await Order.findByIdAndDelete(req.query.id);
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

  exports.editOrder = async (req, res) => {
    try {
      const order = await Order.findById(req.query.id);
      if (!order) {
        return res.status(404).json({ error: 'No Store Found' });
      }
      
  
    
      const updatedItem = await Order.findOneAndUpdate(
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