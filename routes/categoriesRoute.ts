import express, { Router } from "express";

import { CategoryController } from "../controllers/categoryController.js";

const categoryController = new CategoryController();
const router = Router();

router.use(express.json());

router.post("/", (req, res) => categoryController.createCategory(req, res));
router.get("/", (req, res) => {
  categoryController.getAllCategories(req, res);
});
router.get("/:id", (req, res) => categoryController.getCategoryById(req, res));
router.put("/:id", (req, res) => categoryController.updateCategory(req, res));
router.delete("/:id", (req, res) =>
  categoryController.deleteCategory(req, res)
);

export default router;
