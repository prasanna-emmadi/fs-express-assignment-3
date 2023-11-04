import { NextFunction, Request, Response } from "express";
import ItemService from "../services/itemService.js";
import { ApiError } from "../errors/ApiError.js";

const findAll = (_: Request, res: Response) => {
  const items = ItemService.findAll();
  res.json({ items });
};

const findOneItem = (req: Request, res: Response, next: NextFunction) => {
  const itemIndex = Number(req.params.itemIndex);
  const item = ItemService.findOne(itemIndex);

  if (!item) {
    next(ApiError.resourceNotFound("item not found."));
  }
  res.json({ item: item });
};

export default {
  findAll,
  findOneItem,
};
