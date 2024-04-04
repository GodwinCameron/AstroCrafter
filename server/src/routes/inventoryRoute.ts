import express from "express";
import AppDataSource from "../dataSource";

const inventoryRouter = express.Router();

inventoryRouter.use(express.json());

const appDataSource = AppDataSource;

inventoryRouter.get("/:planetName", async (req, res) => {
  try {
    const planetName = req.params.planetName;

    let Entity;
    switch (planetName) {
      case "Sylva":
        Entity = (await import("../entity/sylva")).Sylva;
        break;
      case "Desolo":
        Entity = (await import("../entity/desolo")).Desolo;
        break;
      case "Calidor":
        Entity = (await import("../entity/calidor")).Calidor;
        break;
      case "Vesania":
        Entity = (await import("../entity/vesania")).Vesania;
        break;
      case "Novus":
        Entity = (await import("../entity/novus")).Novus;
        break;
      case "Glacio":
        Entity = (await import("../entity/glacio")).Glacio;
        break;
      case "Atrox":
        Entity = (await import("../entity/atrox")).Atrox;
        break;
      default:
        res.status(404).send("Planet not found");
        return;
    }

    const planetData = await appDataSource
      .getRepository(Entity)
      .find({ relations: ["resource"] });

    res.json(planetData);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

inventoryRouter.put("/:planetName", async (req, res) => {
  console.log("request received");
  try {
    const planetName = req.params.planetName;

    let Entity;
    switch (planetName) {
      case "Sylva":
        Entity = (await import("../entity/sylva")).Sylva;
        console.log(Entity, "reached");
        break;
      case "Desolo":
        Entity = (await import("../entity/desolo")).Desolo;
        console.log(Entity, "reached");
        break;
      case "Calidor":
        Entity = (await import("../entity/calidor")).Calidor;
        console.log(Entity, "reached");
        break;
      case "Vesania":
        Entity = (await import("../entity/vesania")).Vesania;
        console.log(Entity, "reached");
        break;
      case "Novus":
        Entity = (await import("../entity/novus")).Novus;
        console.log(Entity, "reached");
        break;
      case "Glacio":
        Entity = (await import("../entity/glacio")).Glacio;
        console.log(Entity, "reached");
        break;
      case "Atrox":
        Entity = (await import("../entity/atrox")).Atrox;
        console.log(Entity, "reached");
        break;
      default:
        res.status(404).send("Planet not found");
        return;
    }

    const { name, id, quant } = req.body; //values to be updated

    const inventoryItem = await appDataSource
      .getRepository(Entity)
      .findOneBy({ id: id });

    if (!inventoryItem) {
      res.status(404).send("Item not found");
    } else {
      inventoryItem!.quantity = quant;
      const updatedItem = await appDataSource
        .getRepository(Entity)
        .save(inventoryItem!);

      res.json(updatedItem);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

export default inventoryRouter;
