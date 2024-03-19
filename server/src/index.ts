import express from "express";
import dotenv  from 'dotenv';
import AppDataSource from "./dataSource";

const cors = require('cors');
const app = express();

app.use(cors());

dotenv.config()

const appDataSource = AppDataSource

app.get("/planets", (req, res) => {
    const planets = appDataSource.getRepository("planets").find();
    res.send(planets);
});

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