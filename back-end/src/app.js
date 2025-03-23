import express from "express"
import conectaNaDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import cors from "cors";

const conexao = await conectaNaDataBase();

conexao.on("error", (erro) => {
    console.error("erro de conexao", erro);
});
conexao.once("open", () => {
    console.log("Conexao com o banco feita com sucesso");
});


const app = express();
app.use((cors())); //habilita requisicoes de origens diferentes
routes(app);

export default app;