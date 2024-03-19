import express from "express";
import { Planet } from "../entity/planets";
import AppDataSource from "../dataSource";

const planetRouter = express.Router();

planetRouter.use(express.json());

const appDataSource = AppDataSource;

planetRouter.get("/", async (req, res) => {
  try {
    const items = await appDataSource.getRepository(Planet).find();
    res.send(items);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

export default planetRouter;
