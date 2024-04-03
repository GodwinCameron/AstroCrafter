import express from "express";
import AppDataSource from "../dataSource";
import { Calidor } from "../entity/calidor";
const calidorRouter = express.Router();

calidorRouter.use(express.json());

const appDataSource = AppDataSource;

calidorRouter.get("/", async (req, res) => {
  try {
    const calidor = await appDataSource
      .getRepository(Calidor)
      .find({ relations: ["resource"] });
    res.json(calidor);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

export default calidorRouter;
