import express, { Request, Response } from "express";
const router = express.Router();

const items = [1, 2, 3, 4, 5, 6];

router.get("/", (_, res) => {
  res.json({ items });
});

router.get("/:itemIndex", (req: Request, res: Response) => {
  const index = parseInt(req.params.itemIndex);
  res.json({ items: items[index] });
});

export default router;
