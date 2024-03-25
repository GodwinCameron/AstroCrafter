import express from "express";
import { Planets } from "../entity/planets";
import AppDataSource from "../dataSource";

const planetRouter = express.Router();

planetRouter.use(express.json());

const appDataSource = AppDataSource;


// Create get all recipes
planetRouter.get("/", async (req, res) => {
    // Get all list of available recipes
    try {
        //example of joining tables
        const planet = await appDataSource.getRepository(Planets).createQueryBuilder("resource")
                .leftJoinAndSelect("planet.resources" , "resources") //add the ingredients table
                // .leftJoinAndSelect("ingredient.inventory", "inventory") //add the inventory table
                .getMany()
        
        res.json(planet);
        
    } catch (error) {
        console.log("something went wrong")
        return res.status(500).json({message: error})
    }
  });

// Source Code form Slides
// planetRouter.get("/", async (req, res) => {
//   try {
//     const items = await appDataSource.getRepository(Planets).find();
//     res.send(items);
//   } catch (err) {
//     res.status(500).send("Internal Server Error");
//   }
// });

export default planetRouter;
