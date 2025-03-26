import express from "express";
import ReceitasController from "../controllers/ReceitasController.js";

const routes = express.Router();

routes.get("/Receitas", ReceitasController.getReceitas);
routes.post("/Receitas", ReceitasController.postReceitas);
routes.get("/Receitas/busca", ReceitasController.getReceitasPeloNome);

export default routes;