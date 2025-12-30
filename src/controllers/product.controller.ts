import { Request, Response } from "express";
import { sendResponse } from "../helpers/standardResponse.helper";
import ProductRepository from "../repository/product.repository";

class ProductController {
  productRepository: ProductRepository;

  constructor(productRepo: ProductRepository) {
    this.productRepository = productRepo;
  }

  getAllProduct = async (req: Request, res: Response): Promise<any> => {
    try {
      const results = await this.productRepository.getAllProduct();
      return sendResponse(res, 200, results);
    } catch (error) {
      throw error;
    }
  };

  createProduct = async (req: Request, res: Response): Promise<any> => {
    try {
      const reqBody = req.body;
      const result = await this.productRepository.addProduct(reqBody);
      return sendResponse(res, 200, result);
    } catch (error) {
      throw error;
    }
  };
}

export default ProductController;
