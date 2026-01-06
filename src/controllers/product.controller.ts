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
}

export default ProductController;
