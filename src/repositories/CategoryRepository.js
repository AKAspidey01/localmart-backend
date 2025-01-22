const Category = require('../models/Category');

class CategoryRepository {
  async createCategory(name) {
    const category = new Category({ name });
    return await category.save();
  }

  async getCategories() {
    return await Category.find();
  }
}

module.exports = new CategoryRepository();
