const categoryRepository = require('../repositories/CategoryRepository');

class CategoryService {
  async createCategory(name) {
    return await categoryRepository.createCategory(name);
  }

  async getCategories() {
    return await categoryRepository.getCategories();
  }
}

module.exports = new CategoryService();
