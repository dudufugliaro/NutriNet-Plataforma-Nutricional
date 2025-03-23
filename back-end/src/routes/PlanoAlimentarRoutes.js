import express from "express";
import PlanoAlimentarController from "../controllers/PlanoAlimentarController.js";
const routes = express.Router();

routes.get("/PlanoAlimentar", PlanoAlimentarController.getPlanosAlimentares);
routes.post("/PlanoAlimentar", PlanoAlimentarController.postPlanoAlimentar);
routes.get("/PlanoAlimentar/:id", PlanoAlimentarController.getPlanoAlimentarePorId);
routes.put("/PlanoAlimentar/:id", PlanoAlimentarController.putPlanoAlimentar);
routes.delete("/PlanoAlimentar/:id", PlanoAlimentarController.deletePlanoAlimentar);

export default routes;