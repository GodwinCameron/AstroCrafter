import express from "express";
import AppDataSource from "../dataSource";
import { Recipes } from "../entity/recipes";

const recipeRouter = express.Router();

recipeRouter.use(express.json());

const appDataSource = AppDataSource;

recipeRouter.get("/", async (req, res) => {
  try {
    const recipes = await appDataSource
      .getRepository(Recipes)
      .find({ relations: ["ingredient_1", "ingredient_2"], order: { id: "ASC" } });
    res.json(recipes);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

export default recipeRouter;
