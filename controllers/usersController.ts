import { NextFunction, Request, Response } from "express";
import UsersService from "../services/usersService.js";
import { ApiError } from "../errors/ApiError.js";

export function findAllUser(_: Request, res: Response) {
  const users = UsersService.findAll();
  res.json({ users });
}

export function findOneUser(req: Request, res: Response, next: NextFunction) {
  const userId = Number(req.params.userId);
  const user = UsersService.findOne(userId);

  if (!user) {
    next(ApiError.resourceNotFound("user not found."))
    return;
  }
  res.json({ user });
}

export function createOneUser(req: Request, res: Response) {
  const newUser = req.body;
  const user = UsersService.createOne(newUser);
  res.status(201).json({ user });
}

export function updateUser(req: Request, res: Response, next: NextFunction) {
  const userId = Number(req.params.userId);
  const updateUserData = req.body;
  const userIndex = UsersService.findIndex(userId);

  if (userIndex === -1) {
    next(ApiError.resourceNotFound("User not found."));
    return;
  }
  const updatedUser = UsersService.updateUser(userIndex, updateUserData);
  res.status(200).json({ updatedUser });
}

export function deleteUser(req: Request, res: Response, next: NextFunction) {
  const userId = Number(req.params.userId);
  const userIndex = UsersService.findIndex(userId);
  if (userIndex === -1) {
    next(ApiError.resourceNotFound("User not found."));
    return;
  }
  UsersService.deleteUser(userIndex);
  res.status(200).json("User deleted ...");
}

export default {
  findOneUser,
  findAllUser,
  createOneUser,
  updateUser,
  deleteUser,
};
