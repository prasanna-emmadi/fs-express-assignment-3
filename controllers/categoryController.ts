import express, { Request, Response } from "express";
import { CategoryService } from "../services/categoryServices.js";

export class CategoryController {
  catService: CategoryService;
  constructor() {
    this.catService = new CategoryService();
  }
  getAllCategories(req: Request, res: Response) {
    const list = this.catService.getCategories();
    res.json({ list });
  }

  getCategoryById(req: Request, res: Response) {
    const categoryId = parseInt(req.params.id);
    const item = this.catService.getSingleCategory(categoryId);
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ code: 404, error: "Category not found" });
    }
  }
  createCategory(req: Request, res: Response) {
    const { name } = req.body;
    if (name) {
      const newCategory = this.catService.addCategory(name);
      res.status(201).json(newCategory);
    } else {
      res.status(400).json({ code: 404, error: "Details are Required" });
    }
  }
  updateCategory(req: Request, res: Response) {
    const categoryId = parseInt(req.params.id);
    const { name } = req.body;
    if (name) {
      const category = this.catService.updateCategory(categoryId, name);
      if (category) {
        res.json({ message: `${JSON.stringify(category)} has been updated` });
      } else {
        res.status(404).json({ code: 404, error: "Category not found" });
      }
    } else {
      res.status(400).json({ code: 404, error: "Details are Required" });
    }
  }
  deleteCategory(req: Request, res: Response) {
    const categoryId = parseInt(req.params.id);
    const index = this.catService.deleteCategory(categoryId);

    if (index !== -1) {
      res.json({
        message: `Category ${categoryId} has been deleted successfully`,
      });
    } else {
      res.status(404).json({ code: 404, error: "Category not found" });
    }
  }
}
