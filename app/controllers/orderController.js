const express=require('express')
const router=express.Router()
const Order = require("../models/Orders")
exports.addOrders = async (req, res) => {
    
    try {
      const data = {
        productId:req.body.productId,
        categoryId:req.body.categoryId,
        customer_id:req.body.customer_id,
        billingAddressId:req.body.billingAddressId,
        shippingAddressId:req.body.shippingAddressId,
        order_status:req.body.order_status,
        discountApplied:req.body.discountApplied,
        unit_price:req.body.unit_price,
        createdAt:req.body.createdAt,
        quantity:req.body.quantity,
        couponAmount:req.body.couponAmount,
        tax:req.body.tax,
        shippingCost:req.body.shippingCost,
        
      }    
      const newOrder = new Order(data);
      newOrder.total_amount = ( req.body.unit_price-  req.body.couponAmount+req.body.tax+ req.body.shippingCost - req.body.discountApplied )* req.body.quantity
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