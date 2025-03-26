import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

async function conectaNaDataBase() {
    
    try {
        //process.env.DB_CONNECTION_STRING  
        await mongoose.connect("mongodb+srv://joaopedrobicalho:nutrinet@cluster0.omhrb.mongodb.net/NutriNet?retryWrites=true&w=majority&appName=Cluster0");
        console.log("🔥 Conectado ao MongoDB!");
    } catch (erro) {
        console.error("❌ Erro ao conectar ao MongoDB:", erro);
        process.exit(1); // Finaliza o processo em caso de erro grave
    }
    return mongoose.connection;
}

export default conectaNaDataBase;