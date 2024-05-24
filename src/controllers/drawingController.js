const Drawing = require('../models/Drawing');

exports.createDrawing = async (req, res) => {
  const { imageData } = req.body;
  const userId = req.user.userId;
  try {
    const drawing = new Drawing({ userId, imageData });
    await drawing.save();
    res.status(201).json({ message: 'Drawing saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error saving drawing' });
  }
};

exports.getUserDrawings = async (req, res) => {
  const userId = req.user.userId;
  try {
    const drawings = await Drawing.find({ userId });
    res.status(200).json(drawings);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching drawings' });
  }
};

exports.getAllDrawings = async (req, res) => {
  try {
    const drawings = await Drawing.find();
    res.status(200).json(drawings);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching drawings' });
  }
};