import express from "express";
import dotenv  from 'dotenv';
import AppDataSource from "./dataSource";
import resourceRouter from "./routes/resourcesRoute";
import planetRouter from "./routes/planetsRoute";
import sylvaRouter from "./routes/sylvaRoute";
import desoloRouter from "./routes/desoloRoute";
import calidorRouter from "./routes/calidorRoute";
import vesaniaRouter from "./routes/vesaniaRoute";
import novusRouter from "./routes/novusRoute";

const cors = require('cors');
const app = express();

app.use(cors());

dotenv.config()

const appDataSource = AppDataSource

// app.get("/planets", (req, res) => {
//     const planets = appDataSource.getRepository("planets").find();
//     res.send(planets);
// });

app.use('/resources', resourceRouter);
app.use('/sylva', sylvaRouter);
app.use('/vesania', vesaniaRouter);
app.use('/calidor', calidorRouter);
app.use('/desolo', desoloRouter);
app.use('/planets', planetRouter);
app.use('/novus', novusRouter);


app.listen(process.env.PORT, () => {
    console.log(`[/server]: Server is running at http://localhost:${process.env.PORT}`);
});

// app.get("/", (req: Request, res: Response) => {
//     res.send("Express + TypeScript Server");
// });



// app.get('/planets', async(req, res) => {
//     const users = await AppDataSource
//     res.send()
//     // .manager.find(Lecturer)
// })