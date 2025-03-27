import express from "express";
import ReceitasController from "../controllers/ReceitasController.js";

const routes = express.Router();

routes.get("/Receitas", ReceitasController.getReceitas);
routes.post("/Receitas", ReceitasController.postReceitas);
routes.get("/Receitas/busca-nome", ReceitasController.getReceitasPeloNome);
routes.get("/Receitas/busca-tempo", ReceitasController.getReceitasPeloTempoPreparo);
routes.get("/Receitas/busca-calorias", ReceitasController.getReceitasPelasCalorias);

export default routes;