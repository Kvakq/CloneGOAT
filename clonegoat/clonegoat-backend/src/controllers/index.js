import { getProducts, createProduct, updateProduct, deleteProduct } from '../models/index.js';

export const getAllProducts = (req, res) => {
  const products = getProducts();
  res.status(200).json(products);
};

export const addProduct = (req, res) => {
  const newProduct = req.body;
  createProduct(newProduct);
  res.status(201).json(newProduct);
};

export const editProduct = (req, res) => {
  const { id } = req.params;
  const updatedProduct = req.body;
  updateProduct(id, updatedProduct);
  res.status(200).json(updatedProduct);
};

export const removeProduct = (req, res) => {
  const { id } = req.params;
  deleteProduct(id);
  res.status(204).send();
};