import express from "express";
import AppDataSource from "../dataSource";
import { Desolo } from "../entity/desolo";
const desoloRouter = express.Router();

desoloRouter.use(express.json());

const appDataSource = AppDataSource;

desoloRouter.get("/", async (req, res) => {
  try {
    const desolo = await appDataSource
      .getRepository(Desolo)
      .find({ relations: ["resource"] });
    res.json(desolo);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

export default desoloRouter;
