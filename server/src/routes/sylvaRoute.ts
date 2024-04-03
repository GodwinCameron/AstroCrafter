import express from 'express';
import AppDataSource from '../dataSource';
import { Sylva } from '../entity/sylva';

const sylvaRouter = express.Router();

sylvaRouter.use(express.json());

const appDataSource = AppDataSource;

sylvaRouter.get("/", async (req, res) => {
    try{
        const items = await appDataSource.getRepository(Sylva).find();
        res.send(items);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
        
})

export default sylvaRouter;