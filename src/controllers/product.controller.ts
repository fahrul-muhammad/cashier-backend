import { Request, Response } from "express";
import ProductRepository from "../repository/product.repository";
import { sendResponse } from "../helpers/standardResponse.helper";

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
}

export default ProductController;
