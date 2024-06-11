import express from 'express';
import appRouter from './routes/index.js'
import {connectToDatabase} from "./db/index.js";


const app = express();

//#Region middlewares
app.use(express.json());
app.use('/api/v1/products', appRouter);
//#endRegion

connectToDatabase().then(() => {
    app.listen(PORT, () => console.log('server running on port ' + PORT));
}).catch((err) => {
    console.log("error with MySQL connection. Error ", err);
    process.exit(0);
})

const PORT = process.env.PORT || 3000;
