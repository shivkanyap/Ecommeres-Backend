const Category = require("../models/Category");

exports.addStoreCategory = async (req, res) => {
  try {
    const data = req.body;
    if (data.categoryName) {
      const iscategoryNameExists = await Category.findOne({
        categoryName: data.categoryName,
      });
      if (iscategoryNameExists) {
        return res.status(400).json({ error: " CategoryName Already Exists" });
      }
    }
    const newStore = new Category(data);
    const result = await newStore.save();
    return res.status(201).json({ error: "", data: result });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Something went wrong", message: error.message });
  }
};

exports.getStoreCategory = async (req, res) => {
  try {
    const list = await Category.find();
    return res.status(200).json(list);
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ error: "Something went wrong", message: error.message });
  }
};

exports.deleteStoreCategory = async (req, res) => {
  try {
    const item = await Category.findByIdAndDelete(req.query.id);
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

exports.editStoreCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.query.id);
    if (!category) {
      return res.status(404).json({ error: "No Category Found" });
    }
    const isCategoryExists = await Category.findOne({
      categoryName: req.body.categoryName,
    });

    if (isCategoryExists) {
      return res.status(400).json({ error: "Category is already taken" });
    }
    const updatedStore = await Category.findOneAndUpdate(
      { _id: req.query.id },
      req.body,
      { new: true }
    );
    res.status(200).json(updatedStore);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Something went wrong", message: error.message });
  }
};
