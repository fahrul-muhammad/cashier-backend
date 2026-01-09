import { Pool } from "pg";
import { Material } from "../models/material.model";

class MaterialRepository {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  getAllMaterial = async (): Promise<Material[]> => {
    try {
      const query = await this.connection.query("select * from cashier.material m WHERE m.is_active = true ;");
      const result = query.rows;
      return result as Material[];
    } catch (error) {
      throw error;
    }
  };

  addMaterial = async (body: Material): Promise<Material> => {
    try {
      const query = `
        INSERT INTO cashier.material
        (name, base_unit)
        VALUES ($1, $2)
        RETURNING *;
      `;
      const values = [body.name, body.base_unit];
      const result = await this.connection.query(query, values);
      return result.rows[0] as Material;
    } catch (error) {
      throw error;
    }
  };

  archiveMaterial = async (materialId: string): Promise<void> => {
    try {
      const query = "UPDATE cashier.material SET is_active = false WHERE id = $1;";
      const values = [materialId];
      await this.connection.query(query, values);
    } catch (error) {
      throw error;
    }
  };

  restoreMaterial = async (materialId: string): Promise<void> => {
    try {
      const query = "UPDATE cashier.material SET is_active = true WHERE id = $1;";
      const values = [materialId];
      await this.connection.query(query, values);
    } catch (error) {
      throw error;
    }
  };

  getMaterialById = async (materialId: string): Promise<Material | null> => {
    try {
      const query = "SELECT * FROM cashier.material WHERE is_active = true AND id = $1 ;";
      const values = [materialId];
      const result = await this.connection.query(query, values);

      if (result.rows.length === 0) {
        return null;
      }

      return result.rows[0] as Material;
    } catch (error) {
      throw error;
    }
  };

  updateMaterial = async (id: string, body: any): Promise<any> => {
    try {
      const fields: string[] = [];
      const values: string[] = [];
      let index: number = 1;

      if (body.name) {
        fields.push(`name = $${index++}`);
        values.push(body.name);
      }

      if (body.base_unit) {
        fields.push(`base_unit = $${index++}`);
        values.push(body.base_unit);
      }

      if (fields.length === 0) {
        throw new Error("No fields to update");
      }

      const query = `
        UPDATE cashier.material
        SET ${fields.join(", ")}
        WHERE id = $${index}
        RETURNING *;
      `;

      values.push(id);

      const result = await this.connection.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  };
}

export default MaterialRepository;
