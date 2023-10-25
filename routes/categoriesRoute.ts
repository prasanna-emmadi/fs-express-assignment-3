import express, { Express, Request, Response } from "express";

const router = express.Router();

router.use(express.json());

let categories = [
  { id: 1, name: "Electronics" },
  { id: 2, name: "Clothes" },
];

router.get("/", (_, res) => {
  res.json({ categories });
});

router.get("/:id", (req: Request, res: Response) => {
  const categoryId = parseInt(req.params.id);
  const item = categories.find((p) => p.id === categoryId);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ code: 404, error: "Category not found" });
  }
});

router.post("/", (req: Request, res: Response) => {
  const { name } = req.body;
  if (name) {
    const newCategory = { id: categories.length + 1, name };
    categories.push(newCategory);
    res.status(201).json(newCategory);
  } else {
    res.status(400).json({ code: 404, error: "Details are Required" });
  }
});

router.put("/:id", (req: Request, res: Response) => {
  const categoryId = parseInt(req.params.id);
  const { name } = req.body;

  if (name) {
    const category = categories.find((cat) => cat.id === categoryId);

    if (category) {
      category.name = name;
      res.json({ message: `${JSON.stringify(category)} has been updated` });
    } else {
      res.status(404).json({ code: 404, error: "Category not found" });
    }
  } else {
    res.status(400).json({ code: 404, error: "Details are Required" });
  }
});

router.delete("/:id", (req: Request, res: Response) => {
  const categoryId = parseInt(req.params.id);
  const index = categories.findIndex((cat) => cat.id === categoryId);

  if (index !== -1) {
    categories.splice(index, 1);
    res.json({
      message: `Category ${categoryId} has been deleted successfully`,
    });
  } else {
    res.status(404).json({ code: 404, error: "Category not found" });
  }
});

export default router;
