import express from "express";
import routes from "./routes/";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import MongoMemoryServer from 'mongodb-memory-server';
import fixtures from "./fixtures";

const app = express();
const router = express.Router();
const mongod = new MongoMemoryServer();

mongod.getConnectionString().then((mongoUri) => {
    const mongooseOpts = { // options for mongoose 4.11.3 and above
        autoReconnect: true,
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 1000,
        useMongoClient: true, // remove this line if you use mongoose 5 and above
    };

    mongoose.connection.on('error', (e) => {
        if (e.message.code === 'ETIMEDOUT') {
            console.log(e);
            mongoose.connect(mongoUri, mongooseOpts);
        }
        console.log(e);
    });

    mongoose.connection.once('open', () => {
        console.log(`MongoDB successfully connected to ${mongoUri}`);
        fixtures.run();
    });

    return mongoose.connect(mongoUri, mongooseOpts);
});

let port = 5000 || process.env.PORT;

/** set up routes {API Endpoints} */
routes(router);

/** set up middlewares */
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());
//app.use('/static',express.static(path.join(__dirname,'static')))

app.use('/api', router);

/** start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});