const Address= require("../models/Address");

exports.addAddress = async (req, res) => {
  try {
    const data = req.body;
   
    const newAddress = new Address(data);
    const result = await newAddress.save();
    return res.status(201).json({ error: "", data: result });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Something went wrong", message: error.message });
  }
};

exports.getAddress = async (req, res) => {
  try {
    const list = await Address.find();
    return res.status(200).json(list);
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ error: "Something went wrong", message: error.message });
  }
};

exports.deleteAddress = async (req, res) => {
  try {
    const address = await Address.findByIdAndDelete(req.query.id);
   
    return res.status(200).json(address);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Something went wrong", message: error.message });
  }
};

exports.editAddress = async (req, res) => {
  try {    
    const updatedAddress = await Address.findOneAndUpdate(
      { _id: req.query.id },
      req.body,
      { new: true }
    );
    res.status(200).json(updatedAddress);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Something went wrong", message: error.message });
  }
};
