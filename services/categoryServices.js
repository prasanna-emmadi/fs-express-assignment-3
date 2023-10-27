"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
class CategoryService {
    constructor() {
        this.categories = [{ id: 1, name: "Electronics" }, { id: 2, name: "Clothes" }];
    }
    getCategories() {
        return this.categories;
    }
    getSingleCategory(id) {
        return this.categories.find(p => p.id === id);
    }
    addCategory(name) {
        const newCategory = { id: this.categories.length + 1, name };
        this.categories.push(newCategory);
        return newCategory;
    }
    updateCategory(id, name) {
        const category = this.categories.find(cat => cat.id === id);
        if (category) {
            category.name = name;
        }
        return category;
    }
    deleteCategory(id) {
        const index = this.categories.findIndex(cat => cat.id === id);
        if (index !== -1) {
            this.categories.splice(index, 1);
        }
        return index;
    }
}
exports.CategoryService = CategoryService;
