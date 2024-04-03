import express from "express";
import AppDataSource from "../dataSource";
import { Vesania } from "../entity/vesania";
const vesaniaRouter = express.Router();

vesaniaRouter.use(express.json());

const appDataSource = AppDataSource;

vesaniaRouter.get("/", async (req, res) => {
  try {
    const vesania = await appDataSource
      .getRepository(Vesania)
      .find({ relations: ["resource"] });
    res.json(vesania);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

export default vesaniaRouter;
