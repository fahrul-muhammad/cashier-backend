import { Pool } from "pg";
import { Product } from "../models/product.model";

class ProductRepository {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  getAllProduct = async (): Promise<any> => {
    try {
      const query = await this.connection.query("SELECT * FROM cashier.product;");
      const result = query.rows;
      return result;
    } catch (error) {
      throw error;
    }
  };

  addProduct = async (body: Product): Promise<any> => {
    try {
      const query = `
      INSERT INTO cashier.product 
      (product_name, selling_price, product_image)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
      const values = [body.product_name, body.selling_price, body.product_image ?? null];
      const result = await this.connection.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  };
}

export default ProductRepository;
