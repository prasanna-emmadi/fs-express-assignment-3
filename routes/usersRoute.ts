import express from "express"

import UserController from "../controllers/usersController.js"
// import { validateUser } from "../middlewares/userValidate.js"

const router = express.Router()

router.get("/", UserController.findAllUser)
router.get("/:userId", UserController.findOneUser)
router.post("/", UserController.createOneUser)
router.put("/:productId", UserController.updateUser);
router.delete("/:productId", UserController.deleteUser);

export default router
