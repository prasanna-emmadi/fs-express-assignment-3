import express, { Request, Response } from "express";
const router = express.Router();

const users = [
  { id: 1, name: "User 1", address: "road 1", city: "Pune" },
  { id: 2, name: "User 2", address: "road 2", city: "Mumbai" },
  { id: 3, name: "User 3", address: "road 3", city: "Bengaluru" },
];
//get all users
router.get("/", (req: Request, res: Response) => {
  res.status(200);
  res.json(users);
});
//create new user
router.post("/", (req: Request, res: Response) => {
  const { name, address, city } = req.body;
  const id = users.length + 1;
  const newUser = { id, name, address, city };
  users.push(newUser);
  res.status(201).json(newUser);
});
//get user by id
router.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const user = users.find((p) => p.id === parseInt(id));
  if (!user) {
    return res.status(404).json({ message: "User  not found" });
  }
  res.json(user);
});
//update user
router.put("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, address, city } = req.body;
  const userIndex = users.findIndex((p) => p.id === parseInt(id));
  if (userIndex === -1) {
    return res.status(404).json({ message: "User  not found" });
  }
  if (name) {
    users[userIndex].name = name;
  }
  if (address) {
    users[userIndex].address = address;
  }
  if (city) {
    users[userIndex].city = city;
  }
  res.json(users[userIndex]);
});

export default router;
