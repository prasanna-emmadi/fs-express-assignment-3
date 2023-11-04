export class ItemRepo {
  items = [1, 2, 3, 4, 5, 6];

  findAll() {
    return this.items;
  }

  findOne(itemIndex: number) {
    const item = this.items[itemIndex];
    return item;
  }
}
