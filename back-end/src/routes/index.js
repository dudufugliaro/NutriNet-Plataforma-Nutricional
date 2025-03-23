import express from "express";
import DadosNutricionaisRoutes from "./DadosNutricionaisRoutes.js"
import PlanoAlimentarRoutes from "./PlanoAlimentarRoutes.js"

const routes = (app) => {
    app.route("/").get((req, res ) => res.status(200).send("NutriNet"));
    
    app.use(express.json(), DadosNutricionaisRoutes, PlanoAlimentarRoutes);
}

export default routes;