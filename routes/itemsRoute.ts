import express, { Request, Response } from "express";
import ItemsController from "../controllers/itemsController.js";
// import { validateUser } from "../middlewares/userValidate.js"

const router = express.Router();

router.get("/", ItemsController.findAll);
router.get("/:userId", ItemsController.findOneItem);

export default router;
