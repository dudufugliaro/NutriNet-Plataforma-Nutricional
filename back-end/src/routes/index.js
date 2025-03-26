import express from "express";
import DadosNutricionaisRoutes from "./DadosNutricionaisRoutes.js"
import PlanoAlimentarRoutes from "./PlanoAlimentarRoutes.js"
import ReceitasRoutes from "./ReceitasRoutes.js"
import NutricionistaRoutes from "./NutricionistaRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res ) => res.status(200).send("NutriNet"));
    
    app.use(express.json(), DadosNutricionaisRoutes, PlanoAlimentarRoutes, ReceitasRoutes, NutricionistaRoutes);
}

export default routes;