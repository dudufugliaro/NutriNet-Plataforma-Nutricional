import express from "express";
import DadosNutricionaisController from "../controllers/DadosNutricionaisController.js";

const routes = express.Router();

//o express analisa as rotas sequencialmente, dessa forma devemos colocar as rotas de maior complexidade
//vindo primeiro

routes.get("/DadosNutricionais", DadosNutricionaisController.getDadosNutricionais);
routes.get("/DadosNutricionais/busca", DadosNutricionaisController.getDadosNutricionaisPeloNome);
routes.post("/DadosNutricionais", DadosNutricionaisController.postDadosNutricionais);
routes.get("/DadosNutricionais/:id", DadosNutricionaisController.getDadosNutricionaisPorId);
routes.put("/DadosNutricionais/:id", DadosNutricionaisController.putDadosNutricionais);
routes.delete("/DadosNutricionais/:id", DadosNutricionaisController.deleteDadosNutricionais);

routes.post("/DadosNutricionais/login", DadosNutricionaisController.loginUsuario);
export default routes;