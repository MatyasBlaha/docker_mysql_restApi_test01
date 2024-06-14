import express from 'express';
import appRouter from "../routes/index.js";

const createServer = () => {
    const app = express();

    app.use(express.json());

    app.use('/api/v1/products', appRouter);

    return app;
}

export default createServer;