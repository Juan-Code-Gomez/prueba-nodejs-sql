import { getConnection, mssql } from "./src/database/connectionSQLServer";

const getProducts = async () => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query("SELECT id, name, description, quantity FROM product");
        console.log(result);
        console.log("Products listed!");
    } catch (error) {
        console.log(error);
    }
}

getProducts();