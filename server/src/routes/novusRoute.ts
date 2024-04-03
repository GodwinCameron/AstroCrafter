import express from "express";
import AppDataSource from "../dataSource";
import { Novus } from "../entity/novus";

const novusRouter = express.Router();

novusRouter.use(express.json());

const appDataSource = AppDataSource;

novusRouter.get("/", async (req, res) => {
  try {
    const novus = await appDataSource
      .getRepository(Novus)
      .find({ relations: ["resource"] });
    res.json(novus);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

export default novusRouter;
