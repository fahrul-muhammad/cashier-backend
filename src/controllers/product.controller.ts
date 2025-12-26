import { Request, Response } from "express";
import ProductRepository from "../repository/product.repository";

class ProductController {
  productRepository: ProductRepository;

  constructor(productRepo: ProductRepository) {
    this.productRepository = productRepo;
  }

  getAllProduct = async (req: Request, res: Response): Promise<any> => {
    try {
      const results = await this.productRepository.getAllProduct();
      return res.status(200).json(results);
    } catch (error) {
      throw error;
    }
  };
}

export default ProductController;
