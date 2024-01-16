const Quote = require("../models/rfp_quotes.model");

const createQuote = async (req, res) => {
  try {
    const Quotes = await Quote.create(req.body);
    res.status(201).json(Quotes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateQuote = async (req, res) => {
  const { userId } = req.params;
  try {
    const Quotes = await Quote.findOneAndUpdate({ userId }, req.body, { new: true });
    res.status(200).json(Quotes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getQuotes = async (req, res) => {
  try {
    const Quotes = await Quote.find({isActive:1});
    res.status(200).json(Quotes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createQuote,
  updateQuote,
  getQuotes,
};
