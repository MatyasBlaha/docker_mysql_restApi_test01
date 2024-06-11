import { pool } from './index.js';
export const find = async () => {
    const q ="SELECT * FROM products";
    try {
        const client = await pool.getConnection();
        const result = await client.query(q);
        return result[0];
    } catch (err) {
        console.log("error occurred while finding all products", err );
        throw err;
    }
}


export const findById = async (id) => {
    const q ="SELECT * FROM products WHERE id = ?";
    try {
        const client = await pool.getConnection();
        const result = await client.query(q, [id]);
        return result;
    } catch (err) {
        console.log("error occurred while finding by id", err );
        throw err;
    }
}


export const create = async (title, description, price) => {
    const q ="INSERT INTO products(title, description, price) VALUES (?, ?, ?)";
    try {
        const client = await pool.getConnection();
        const result = await client.query(q, [title, description, price]);
        return result;
    } catch (err) {
        console.log("error occurred while creating new product", err );
        throw err;
    }
}


export const update = async (id, title, description, price) => {
    const q = "UPDATE products SET title = ?, description = ?, price = ? WHERE id = ?";

    const values = [
        title,
        description,
        price,
    ]

    try {
        const client = await pool.getConnection();
        const result = await client.query(q, [...values, id]);
        return result;
    } catch (err) {
        console.log("error occurred while updating", err);
        throw err;
    }
}


export const deleteP = async (id) => {
    const q = "DELETE FROM products WHERE id = ?"
    try {
        const client = await pool.getConnection();
        const result = await client.query(q, [id]);
        return result;
    } catch (err) {
        console.log("error occurred while deleting product", err);
        throw err;
    }
}