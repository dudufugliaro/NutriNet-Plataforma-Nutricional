import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

async function conectaNaDataBase() {
    try {
        //process.env.DB_CONNECTION_STRING  
        await mongoose.connect(process.env.DB_CONNECTION_STRING);
        console.log("🔥 Conectado ao MongoDB!");
    } catch (erro) {
        console.error("❌ Erro ao conectar ao MongoDB:", erro);
        process.exit(1); // Finaliza o processo em caso de erro grave
    }
    return mongoose.connection;
}

export default conectaNaDataBase;