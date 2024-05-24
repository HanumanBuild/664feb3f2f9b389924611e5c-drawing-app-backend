const express = require('express');
const { createDrawing, getUserDrawings, getAllDrawings } = require('../controllers/drawingController');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, createDrawing);
router.get('/user', authMiddleware, getUserDrawings);
router.get('/all', getAllDrawings);

module.exports = router;