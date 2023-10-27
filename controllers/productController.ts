import { Request, Response } from 'express';
import ProductService from '../services/productService.js';

const productService = new ProductService();

export const createProduct = (req: Request, res: Response) => {
    const { name, price } = req.body;
    const product = productService.createProduct(name, price);
    res.json(product);
};

export const getAllProducts = (req: Request, res: Response) => {
    const products = productService.getAllProducts();
    res.json(products);
};

export const getProductById = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const product = productService.getProductById(id);
    res.json(product);
};

export const updateProduct = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { name, price } = req.body;
    const updatedProduct = productService.updateProduct(id, name, price);
    res.json(updatedProduct);
};

export const deleteProduct = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    productService.deleteProduct(id);
    res.sendStatus(204);
};
