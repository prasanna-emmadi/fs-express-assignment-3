import { Router } from 'express';

import { CategoryController } from '../controllers/categoryController.js';

const categoryController = new CategoryController();
const router = Router();

router.post("/categories", (req, res) =>
  categoryController.createCategory(req, res)
);
router.get("/categories", (req, res) =>
  categoryController.getAllCategories(req, res)
);
router.get("/categories/:id", (req, res) =>
  categoryController.getCategoryById(req, res)
);
router.put("/categories/:id", (req, res) =>
  categoryController.updateCategory(req, res)
);
router.delete("/categories/:id", (req, res) =>
  categoryController.deleteCategory(req, res)
);

export default router;
