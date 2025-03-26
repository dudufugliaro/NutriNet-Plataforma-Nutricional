import express from "express";
import DadosNutricionaisRoutes from "./DadosNutricionaisRoutes.js"
import PlanoAlimentarRoutes from "./PlanoAlimentarRoutes.js"
import ReceitasRoutes from "./ReceitasRoutes.js"
import NutricionistaRoutes from "./NutricionistaRoutes.js";
import DadosUsuariosRoutes from "./DadosUsuarioRoutes.js"

const routes = (app) => {
    app.route("/").get((req, res ) => res.status(200).send("NutriNet"));
    
    app.use(express.json(), DadosNutricionaisRoutes, PlanoAlimentarRoutes, ReceitasRoutes, NutricionistaRoutes, DadosUsuariosRoutes);
}

export default routes;