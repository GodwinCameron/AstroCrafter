import express from "express";
import AppDataSource from "../dataSource";
import { Atrox } from "../entity/atrox";
const atroxRouter = express.Router();

atroxRouter.use(express.json());

const appDataSource = AppDataSource;

atroxRouter.get("/", async (req, res) => {
  try {
    const atrox = await appDataSource
      .getRepository(Atrox)
      .find({ relations: ["resource"] });
    res.json(atrox);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

export default atroxRouter;
