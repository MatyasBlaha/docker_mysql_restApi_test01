
import appRouter from './routes/index.js'
import {connectToDatabase} from "./db/index.js";
import createServer from "./utils/server.js";

const app = createServer()

//#Region middlewares
//#endRegion

connectToDatabase().then(() => {
    app.listen(PORT, () => console.log('server running on port ' + PORT));
}).catch((err) => {
    console.log("error with MySQL connection. Error ", err);
    process.exit(0);
})

const PORT = process.env.PORT || 3000;
