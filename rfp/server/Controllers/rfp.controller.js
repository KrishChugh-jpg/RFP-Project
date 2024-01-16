const RFP = require("../models/rfp.model");

const createRFP = async (req, res) => {
  try {
    const rfp = await RFP.create(req.body);
    res.status(201).json(rfp);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateRFP = async (req, res) => {
  const { rfpId } = req.params;
  try {
    const rfp = await RFP.findByIdAndUpdate(rfpId, req.body, { new: true });
    res.status(200).json(rfp);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getRFPs = async (req, res) => {
  try {
    const rfps = await RFP.find();
    res.status(200).json(rfps);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createRFP,
  updateRFP,
  getRFPs,
};
