import { Product } from "../types/products";

export default class ProductRepo {
  private products: Product[];

  constructor() {
    this.products = [
      { id: 1, name: "Product 1", price: 100 },
      { id: 2, name: "Product 2", price: 200 },
      { id: 3, name: "Product 3", price: 300 },
    ];
  }

  findAll(): Product[] {
    return this.products;
  }

  findOne(productId: number): Product | undefined {
    return this.products.find((product) => product.id === productId);
  }

  createOne(product: Product): Product {
    this.products.push(product);
    return product;
  }

  findIndex(productId: number): number {
    return this.products.findIndex((product) => product.id === productId);
  }

  updateProduct(index: number, updatedProduct: Product): Product {
    this.products[index] = updatedProduct;
    return updatedProduct;
  }

  deleteProduct(index: number): void {
    this.products.splice(index, 1);
  }
}