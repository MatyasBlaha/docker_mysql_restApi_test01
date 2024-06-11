import { createPool } from 'mysql2/promise';
import dotenv from 'dotenv'

dotenv.config();


const pool = createPool({
   port: process.env.MYSQL_PORT,
   password:  process.env.MYSQL_PASSWORD,
   host: process.env.MYSQL_HOST,
   database: process.env.MYSQL_DATABASE,
   user: process.env.MYSQL_USER,
});

const connectToDatabase = async () => {
   try {
      await pool.getConnection();
      console.log("MySQL connection succeeded")
   } catch (err) {
      console.log("Database Connection Failed", err);
      throw err;
   }
}

export { connectToDatabase, pool };