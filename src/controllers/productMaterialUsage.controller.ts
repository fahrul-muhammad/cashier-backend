import { Request, Response } from "express";
import { sendResponse } from "../helpers/standardResponse.helper";
import { ProductMaterialUsage } from "../models/productMaterialUsage.model";
import ProductMaterialUsageRepository from "../repository/productMaterialUsage.repository";

class ProductMaterialUsageController {
  productMaterialUsageRepository: ProductMaterialUsageRepository;

  constructor(productMaterialUsageRepo: ProductMaterialUsageRepository) {
    this.productMaterialUsageRepository = productMaterialUsageRepo;
  }

  getAllProductMaterialUsage = async (req: Request, res: Response): Promise<void> => {
    try {
      const results = await this.productMaterialUsageRepository.getAllProductMaterialUsage();
      sendResponse<ProductMaterialUsage[]>(res, 200, results);
    } catch (error) {
      throw error;
    }
  };

  createProductMaterialUsage = async (req: Request, res: Response): Promise<void> => {
    try {
      const reqBody = req.body;
      const result = await this.productMaterialUsageRepository.addProductMaterialUsage(reqBody);
      sendResponse<ProductMaterialUsage>(res, 201, result);
    } catch (error) {
      throw error;
    }
  };

  getProductMaterialUsageById = async (req: Request, res: Response): Promise<void> => {
    try {
      const usageId = req.params.id;
      const result = await this.productMaterialUsageRepository.getProductMaterialUsageById(usageId);

      if (!result) {
        sendResponse<string>(res, 404, "Product material usage not found");
        return;
      }

      sendResponse<ProductMaterialUsage>(res, 200, result);
    } catch (error) {
      throw error;
    }
  };

  updateProductMaterialUsage = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const reqBody = req.body;

      const result = await this.productMaterialUsageRepository.updateProductMaterialUsage(id, reqBody);

      sendResponse<ProductMaterialUsage>(res, 200, result);
    } catch (error) {
      throw error;
    }
  };

  deleteProductMaterialUsage = async (req: Request, res: Response): Promise<void> => {
    try {
      const usageId = req.params.id;
      await this.productMaterialUsageRepository.deleteProductMaterialUsage(usageId);
      sendResponse<string>(res, 200, "Product material usage deleted");
    } catch (error) {
      throw error;
    }
  };
}

export default ProductMaterialUsageController;
