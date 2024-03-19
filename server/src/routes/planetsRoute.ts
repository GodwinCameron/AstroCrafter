import express from "express";
import { Planets } from "../entity/planets";
import AppDataSource from "../dataSource";

const planetRouter = express.Router();

planetRouter.use(express.json());

const appDataSource = AppDataSource;

planetRouter.get("/", async (req, res) => {
  try {
    const items = await appDataSource.getRepository(Planets).find();
    res.send(items);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

export default planetRouter;
