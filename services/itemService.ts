import { ItemRepo } from "../models/Item.js";

const itemsRepo = new ItemRepo();

function findAll() {
  const items = itemsRepo.findAll();
  return items;
}

function findOne(userId: number) {
  const user = itemsRepo.findOne(userId);
  return user;
}

export default {
  findAll,
  findOne,
};
