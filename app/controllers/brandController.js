const Brand = require("../models/Brand");

exports.addBrand = async (req, res) => {
  try {
    const data = req.body;

    if (data.brandName) {
      const isbrandNameExists = await Brand.findOne({
        brandName: data.brandName,
      });

      if (isbrandNameExists) {
        return res.status(400).json({ error: " BrandName Already Exists" });
      }
    }
    const newBrand = new Brand(data);
    const result = await newBrand.save();
    return res
      .status(201)
      .json({ error: "", data: result, message: "Data added Successfully" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Something went wrong", message: error.message });
  }
};

exports.getBrand = async (req, res) => {
  try {
    const list = await Brand.find();
    return res.status(200).json(list);
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ error: "Something went wrong", message: error.message });
  }
};

exports.deleteBrand = async (req, res) => {
  try {
    const item = await Brand.findByIdAndDelete(req.query.id);
    if (!item) {
      return res
        .status(500)
        .json({ error: "Something went wrong", message: "No Entry Found" });
    }
    return res.status(200).json(item);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Something went wrong", message: error.message });
  }
};
