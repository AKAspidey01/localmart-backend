const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/CategoryController');

// POST - Create a category
router.post('/categories', categoryController.createCategory);

// GET - Get all categories
router.get('/categories', categoryController.getCategories);

module.exports = router;
