import express, { Request, Response } from "express";

import itemsRoute from "./routes/itemsRoute.js";
import usersRoute from "./routes/usersRoute.js";
import categoriesRoute from "./routes/categoriesRoute.js";
import productsRoute from "./routes/productsRoute.js";
import { loggingMiddleware } from "./middlewares/logging.js";
import { errorLoggingMiddleware } from "./middlewares/error.js";

const PORT = 8080;
const app = express();

app.get("/hello", loggingMiddleware, (req: Request, res: Response) => {
  res.json({ msg: "hello, from Express.js!" });
});

app.use("/items", itemsRoute);
app.use("/users", usersRoute);
app.use("/categories", categoriesRoute);
app.use("/products", productsRoute);

app.use(errorLoggingMiddleware);
app.listen(PORT, () => {
  console.log(`👀 app is running at localhost:${PORT}`);
});
