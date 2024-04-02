import express from 'express';
import AppDataSource from '../dataSource';
import { Resources } from '../entity/resources';

const resourceRouter = express.Router();

resourceRouter.use(express.json());

const appDataSource = AppDataSource;

resourceRouter.get("/", async (req, res) => {
    try{
        const items = await appDataSource.getRepository(Resources).find();
        res.send(items);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
        
})

export default resourceRouter;