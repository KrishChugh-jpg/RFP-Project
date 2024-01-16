const Vendor = require("../models/vendor.model");

const createVendor = async (req, res) => {
  try {
    const vendor = await Vendor.create(req.body);
    res.status(201).json(vendor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateVendor = async (req, res) => {
  const { userId } = req.params;
  try {
    const vendor = await Vendor.findOneAndUpdate({ userId }, req.body, { new: true });
    res.status(200).json(vendor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find();
    res.status(200).json(vendors);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createVendor,
  updateVendor,
  getVendors,
};
