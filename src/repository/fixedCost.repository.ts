import { Pool } from "pg";
import { FixedCost } from "../models/fixedCost.model";

class FixedCostRepository {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  GetAllFixedCost = async (): Promise<FixedCost[]> => {
    try {
      const query = `SELECT * FROM cashier.fixed_cost`;
      const result = await this.connection.query(query);
      return result.rows;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  CreateFixedCost = async (body: FixedCost): Promise<FixedCost> => {
    try {
      const query = `INSERT INTO cashier.fixed_cost (name, total_cost, target_unit_per_month) VALUES ($1,$2,$3) RETURNING *;`;
      const result = await this.connection.query(query, [body.name, body.total_cost, body.target_unit_per_month]);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  };

  EditFixedCostById = async (body: FixedCost, id: string): Promise<void> => {
    try {
      let index: number = 1;
      const fields: string[] = [];
      const values: string[] = [];

      if (body.name) {
        fields.push(`name = $${index++}`);
        values.push(body.name);
      }

      if (body.total_cost) {
        fields.push(`total_cost = $${index++}`);
        values.push(body.total_cost.toString());
      }

      if (body.target_unit_per_month) {
        fields.push(`target_unit_per_month = $${index++}`);
        values.push(body.target_unit_per_month.toString());
      }

      if (fields.length === 0) {
        throw new Error("No fields to update");
      }

      const query = `UPDATE cashier.fixed_cost SET ${fields.join(", ")} WHERE id = $${index} RETURNING *;`;
      values.push(id);
      const result = await this.connection.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  };

  DeleteFixedCostById = async (id: string): Promise<void> => {
    try {
      const query = `DELETE FROM cashier.fixed_cost WHERE id = $1;`;
      await this.connection.query(query, [id]);
    } catch (error) {
      throw error;
    }
  };
}

export default FixedCostRepository;
