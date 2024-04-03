import express from "express";
import AppDataSource from "../dataSource";
import { Glacio } from "../entity/glacio";

const glacioRouter = express.Router();

glacioRouter.use(express.json());

const appDataSource = AppDataSource;

glacioRouter.get("/", async (req, res) => {
  try {
    const glacio = await appDataSource
      .getRepository(Glacio)
      .find({ relations: ["resource"] });
    res.json(glacio);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

export default glacioRouter;
