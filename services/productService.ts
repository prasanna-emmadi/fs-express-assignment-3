import { Product } from "../types/products"

export default class ProductService {
    private products: Product[];

    constructor() {
        this.products = [
            { id: 1, name: "Product No1", price: 100 },
            { id: 2, name: "Product No2", price: 200 },
            { id: 3, name: "Product No3", price: 300 }
        ];
    }

    getAllProducts(): Product[] {
        return this.products;
    }

    getProductById(id: number): Product | undefined {
        return this.products.find(product => product.id === id);
    }

    createProduct(name: string, price: number): Product {
        const id = this.products.length + 1;
        const newProduct = { id, name, price };
        this.products.push(newProduct);
        return newProduct;
    }

    updateProduct(id: number, name: string, price: number): Product | undefined {
        let updatedProduct;
        this.products = this.products.map(product => {
            if (product.id === id) {
                updatedProduct = { ...product, name, price };
                return updatedProduct;
            }
            return product;
        });
        return updatedProduct;
    }

    deleteProduct(id: number): void {
        this.products = this.products.filter(product => product.id !== id);
    }
}
