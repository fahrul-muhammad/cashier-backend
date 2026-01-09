import { Request, Response } from "express";
import { sendResponse } from "../helpers/standardResponse.helper";
import { Material } from "../models/material.model";
import MaterialRepository from "../repository/material.repository";

class MaterialController {
  materialRepository: MaterialRepository;

  constructor(materialRepo: MaterialRepository) {
    this.materialRepository = materialRepo;
  }

  getAllMaterial = async (req: Request, res: Response): Promise<void> => {
    try {
      const results = await this.materialRepository.getAllMaterial();
      sendResponse<Material[]>(res, 200, results);
    } catch (error) {
      throw error;
    }
  };

  createMaterial = async (req: Request, res: Response): Promise<void> => {
    try {
      const reqBody = req.body;
      const result = await this.materialRepository.addMaterial(reqBody);
      sendResponse<Material>(res, 201, result);
    } catch (error) {
      throw error;
    }
  };

  archiveMaterial = async (req: Request, res: Response): Promise<void> => {
    try {
      const materialId = req.params.id;
      await this.materialRepository.archiveMaterial(materialId);
      sendResponse<string>(res, 200, "Material archived");
    } catch (error) {
      throw error;
    }
  };

  restoreMaterial = async (req: Request, res: Response): Promise<void> => {
    try {
      const materialId = req.params.id;
      await this.materialRepository.restoreMaterial(materialId);
      sendResponse<string>(res, 200, "Material restored");
    } catch (error) {
      throw error;
    }
  };

  getMaterialById = async (req: Request, res: Response): Promise<void> => {
    try {
      const materialId = req.params.id;
      const result = await this.materialRepository.getMaterialById(materialId);

      if (!result) {
        sendResponse<string>(res, 404, "Material not found");
        return;
      }

      sendResponse<Material>(res, 200, result);
    } catch (error) {
      throw error;
    }
  };

  updateMaterial = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const reqBody = req.body;

      const result = await this.materialRepository.updateMaterial(id, reqBody);
      sendResponse<Material>(res, 200, result);
    } catch (error) {
      throw error;
    }
  };
}

export default MaterialController;
