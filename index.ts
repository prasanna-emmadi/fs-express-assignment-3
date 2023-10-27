import express, { Request, Response } from "express";

import { CategoryController } from "./controllers/categoryController.js";
import itemsRoute from "./routes/itemsRoute.js";
import usersRoute from "./routes/usersRoute.js";
import { errorLoggingMiddleware } from "./middlewares/error.js";
import { loggingMiddleware } from "./middlewares/logging.js";
import { monitorLoggingMiddleware } from "./middlewares/monitor.js";

import categoriesRoute from "./routes/categoriesRoute.js";

import productRoute from './routes/productsRoute.js';


const PORT = 8080;
const app = express();
app.use(express.json());

const categoryController = new CategoryController();


app.get("/hello", loggingMiddleware, (req: Request, res: Response) => {
  res.json({ msg: "hello, from Express.js!" });
});

app.use(errorLoggingMiddleware);
app.use(loggingMiddleware);

app.use("/items", itemsRoute);
app.use("/users", usersRoute);
app.use("/categories", categoriesRoute);
app.use("/products", productRoute);

app.post("/categories", (req, res) =>
  categoryController.createCategory(req, res)
);
app.get("/categories", (req, res) =>
  categoryController.getAllCategories(req, res)
);
app.get("/categories/:id", (req, res) =>
  categoryController.getCategoryById(req, res)
);
app.put("/categories/:id", (req, res) =>
  categoryController.updateCategory(req, res)
);
app.delete("/categories/:id", (req, res) =>
  categoryController.deleteCategory(req, res)
);



app.use(errorLoggingMiddleware);
app.use(monitorLoggingMiddleware);

app.listen(PORT, () => {
  console.log(`👀 app is running at localhost:${PORT}`);
});
