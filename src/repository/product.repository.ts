import { Pool } from "pg";

class ProductRepository {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  getAllProduct = async (): Promise<any> => {
    try {
      const query = await this.connection.query("SELECT * FROM cashier.product;");
      const result = query.rows[0];
      return result;
    } catch (error) {
      throw error;
    }
  };
}

export default ProductRepository;
