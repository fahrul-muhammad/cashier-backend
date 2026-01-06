import { Request, Response } from "express";
import { sendResponse } from "../helpers/standardResponse.helper";
import { Product } from "../models/product.model";
import ProductRepository from "../repository/product.repository";

class ProductController {
  productRepository: ProductRepository;

  constructor(productRepo: ProductRepository) {
    this.productRepository = productRepo;
  }

  getAllProduct = async (req: Request, res: Response): Promise<void> => {
    try {
      const results = await this.productRepository.getAllProduct();
      sendResponse<Product[]>(res, 200, results);
    } catch (error) {
      throw error;
    }
  };

  createProduct = async (req: Request, res: Response): Promise<void> => {
    try {
      const reqBody = req.body;
      if (req.file) {
        reqBody.product_image = `/uploads/${req.file.filename}`;
      }
      const result = await this.productRepository.addProduct(reqBody);
      sendResponse(res, 201, result);
    } catch (error) {
      throw error;
    }
  };

  archiveProduct = async (req: Request, res: Response): Promise<void> => {
    try {
      const productId = req.params.id;
      await this.productRepository.archiveProduct(productId);
      sendResponse<string>(res, 200, "Product archived");
    } catch (error) {
      throw error;
    }
  };

  restoreProduct = async (req: Request, res: Response): Promise<void> => {
    try {
      const productId = req.params.id;
      await this.productRepository.restoreProduct(productId);
      sendResponse<string>(res, 200, "Product restored");
    } catch (error) {
      throw error;
    }
  };

  getProductById = async (req: Request, res: Response): Promise<void> => {
    try {
      const productId = req.params.id;
      const result = await this.productRepository.getProductById(productId);
      if (!result) {
        sendResponse<string>(res, 404, "Product not found");
        return;
      }
      sendResponse<Product>(res, 200, result);
    } catch (error) {
      throw error;
    }
  };

  updateProduct = async (req: Request, res: Response): Promise<any> => {
    try {
      const { id } = req.params;
      const reqBody = req.body;
      if (req.file) {
        reqBody.product_image = `/uploads/${req.file.filename}`;
      }

      const result = await this.productRepository.updateProduct(id, reqBody);

      return sendResponse(res, 200, result);
    } catch (error) {
      throw error;
    }
  };
}

export default ProductController;
