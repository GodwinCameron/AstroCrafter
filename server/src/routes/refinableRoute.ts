import express from "express";
import AppDataSource from "../dataSource";
import { Refinables } from "../entity/refinables";

const refineRouter = express.Router();

refineRouter.use(express.json());

const appDataSource = AppDataSource;

refineRouter.get("/", async (req, res) => {
  try {
    const refinables = await appDataSource
      .getRepository(Refinables)
      .find({ relations: ["raw", "creates"], order: { id: "ASC" } });
    res.json(refinables);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

export default refineRouter;
