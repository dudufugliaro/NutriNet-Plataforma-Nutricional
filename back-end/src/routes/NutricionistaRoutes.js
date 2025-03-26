import express from "express";
import NutricionistaController from "../controllers/NutricionistaController.js";

const routes = express.Router();

// Definição das rotas para Nutricionista
routes.get("/Nutricionista", NutricionistaController.getNutricionistas);
routes.get("/Nutricionista/busca", NutricionistaController.getNutricionistaPeloNome);
routes.post("/Nutricionista", NutricionistaController.postNutricionista);
routes.get("/Nutricionista/:id", NutricionistaController.getNutricionistaPorId);
routes.put("/Nutricionista/:id", NutricionistaController.putNutricionista);
routes.delete("/Nutricionista/:id", NutricionistaController.deleteNutricionista);

// Rota para login de nutricionistas
routes.post("/Nutricionista/login", NutricionistaController.loginNutricionista);

export default routes;