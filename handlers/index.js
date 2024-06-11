import {find, create, findById, update, deleteP} from '../db/queries.js';

export const getAllProducts = async (req, res) => {
    try {
        const products = await find();
        return res.status(200).json({ products });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getProductById = async (req, res) => {
    const id = req.params.id;

    if(!id) {
        return res.status(403).json({ message: "id was not provided"})
    }

    try {
        const product = await findById(id);
        return res.status(200).json({ product });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const createProduct = async (req, res) => {
    const {title, description, price} = req.body;

    if (!title || !description || !price) {
        return res.status(403).json({ message: "input params were not provided"})
    }

    try {
        const product = await create(title, description, price)
        return res.status(201).json({ product });
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
};

export const updateProduct = async (req, res) => {
    const id = req.params.id;
    const {title, description, price} = req.body;

    if(!id){
    return res.status(403).json({ message: "input params were not provided"})    ;
    }

    if(!title || !description || !price) {
        return res.status(403).json({ message: "input data were not provided"});
    }

    try {
        const product = await update(id, title, description, price);
        return res.status(200).json({ product });
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
};

export const deleteProduct = async (req, res) => {
    const id = req.params.id;

    if(!id){
        return res.status(403).json({message: "input params were not provided"})
    }

    try {
        const product = await deleteP(id)
        return res.status(200).json({product})
    } catch (err) {
        return res.status(500).json({message: err.message})
    }
};