import express from "express";
import AppDataSource from "../dataSource";
import { Recipe } from "../entity/";
import { Ingredients } from "../entity/ingredinets";
import { Inventory } from "../entity/inventory"

const userRouter = express.Router()

userRouter.use(express.json())

const appDataSource = AppDataSource

userRouter.post("/", async (req, res) => {

    try {

        const {
            
        }
        
    } catch (error) {
        console.log("Error occured: " + error)
        res.status(500).json({message: error})
    }
});

//TODO: create a post endpoint, to create our users

//TODO: create a post endpoint, for login


export default userRouter;