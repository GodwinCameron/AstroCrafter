import express from "express";
import dotenv  from 'dotenv';
import AppDataSource from "./dataSource";
import resourceRouter from "./routes/resourcesRoute";
import planetRouter from "./routes/planetsRoute";
import inventoryRouter from "./routes/inventoryRoute";
import recipeRouter from "./routes/recipesRoute";

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
app.use('/planets', planetRouter);
app.use('/inventory', inventoryRouter);
app.use('/recipes', recipeRouter);


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