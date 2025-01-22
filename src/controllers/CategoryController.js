const categoryService = require('../services/CategoryService');

class CategoryController {
  async createCategory(req, res) {
    const { name } = req.body;
    try {
      const category = await categoryService.createCategory(name);
      res.status(201).json(category);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getCategories(req, res) {
    try {
      const categories = await categoryService.getCategories();
      res.status(200).json(categories);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new CategoryController();
