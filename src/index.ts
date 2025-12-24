import app from "./app";
require("dotenv").config();

app.listen(process.env.port, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});

// (async () => {
//   try {
//     const result = await pool.query('SELECT * FROM cashier."product";');
//     console.log("DB connected. Data product:", result.rows);
//   } catch (error) {
//     console.error("DB connection failed:", error);
//   }
// })();
