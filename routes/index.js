import { Router } from 'express';
import {createProduct, getAllProducts, getProductById, updateProduct, deleteProduct} from "../handlers/index.js";

const appRouter = Router();


appRouter.get('/', getAllProducts);
appRouter.get('/:id', getProductById);
appRouter.post('/create', createProduct);
appRouter.put('/update/:id', updateProduct);
appRouter.delete('/delete/:id', deleteProduct);

export default appRouter;