import { UserRepo } from "../models/User.js"
import { User } from "../types/users.js"

const usersRepo = new UserRepo()

function findAll() {
  const users = usersRepo.findAll()
  return users
}

function findOne(userId: number) {
  const user = usersRepo.findOne(userId)
  return user
}

function createOne(user: User) {
  const newUser = usersRepo.createOne(user)
  return newUser
}

function findIndex(userId: number) {
  const userIndex = usersRepo.findIndex(userId);
  return userIndex;
}

function updateUser(userIndex: number, user: User) {
  const updateUser = usersRepo.updateUser(userIndex, user);
  return updateUser;
} 

function deleteUser(userIndex: number) {
  const user = usersRepo.deleteUser(userIndex);
  return user;
}

export default {
  findOne,
  findAll,
  createOne,
  findIndex,
  updateUser,
  deleteUser
}
