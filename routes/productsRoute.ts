import express, { Express, Request, Response } from "express";

const router = express.Router();

router.use(express.json());

let products = [
  { id: 1, name: "Product No1", price: 100 },
  { id: 2, name: "Product No2", price: 200 },
  { id: 3, name: "Product No3", price: 300 },
];

router.get("/", (_, res) => {
  res.json({ products });
});

router.get("/:id", (req: Request, res: Response) => {
  const productId = parseInt(req.params.id);
  const item = products.find((p) => p.id === productId);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ code: 404, error: "Category not found" });
  }
});

router.post("/", (req: Request, res: Response) => {
  const { name, price } = req.body;
  if (name) {
    const newProduct = { id: products.length + 1, name, price };
    products.push(newProduct);
    res.status(201).json(newProduct);
  } else {
    res.status(400).json({ code: 404, error: "Details are Required" });
  }
});

router.put("/:id", (req: Request, res: Response) => {
  const productId = parseInt(req.params.id);
  const { name } = req.body;

  if (name) {
    const product = products.find((cat) => cat.id === productId);

    if (product) {
      product.name = name;
      res.json({ message: `${JSON.stringify(product)} has been updated` });
    } else {
      res.status(404).json({ code: 404, error: "Product not found" });
    }
  } else {
    res.status(400).json({ code: 404, error: "Details are Required" });
  }
});

router.delete("/:id", (req: Request, res: Response) => {
  const productId = parseInt(req.params.id);
  const index = products.findIndex((cat) => cat.id === productId);

  if (index !== -1) {
    products.splice(index, 1);
    res.json({
      message: `Category ${productId} has been deleted successfully`,
    });
  } else {
    res.status(404).json({ code: 404, error: "Category not found" });
  }
});

export default router;
