import mongoose from "mongoose";
import { PlanoAlimentarSchema } from "./PlanoAlimentar.js";

//Um Schema é uma estrutra que define como os dados devem ser organizados dentro de um documento no BD.
//Um Model é uma representação da coleção no BD e, neste, caso, é a interface que permite que a API
//manipule e interaja com a coleção DadosNutricionais no MongoDB

// const DadosNutricionaisSchema = new mongoose.Schema({
//     // id: { type: mongoose.Schema.Types.ObjectId },
//     nome: {type: mongoose.Schema.Types.String},
//     email: {type: mongoose.Schema.Types.String},
//     genero: {type: mongoose.Schema.Types.String},
//     senha: {type: mongoose.Schema.Types.String},
//     altura: {type: mongoose.Schema.Types.Number},
//     fumante: {type: mongoose.Schema.Types.Boolean},
//     lactose: {type: mongoose.Schema.Types.Boolean},
//     gluten: {type: mongoose.Schema.Types.Boolean},
//     diabetes: {type: mongoose.Schema.Types.Boolean},
//     hipertensao: {type: mongoose.Schema.Types.Boolean},
//     vegetariano: {type: mongoose.Schema.Types.Boolean},
//     vegano: {type: mongoose.Schema.Types.Boolean},
//     objetivo: {type: mongoose.Schema.Types.String},    
//     peso: {type: mongoose.Schema.Types.Number},
//     nivelAtividadeFisica: {type: mongoose.Schema.Types.String},
//     percentualGordura: {type: mongoose.Schema.Types.Number},
//     glicose: {type: mongoose.Schema.Types.Number},
//     planoalimentar: { type: mongoose.Schema.Types.ObjectId, ref: "PlanoAlimentar", default: null } // Referência ao plano
// }, {versionKey: false}); 

const DadosNutricionaisSchema = new mongoose.Schema({
    nome: { type: String },
    email: { type: String },
    genero: { type: String },
    senha: { type: String },
    altura: { type: Number },
    peso: { type: Number },
    objetivo: { type: String },
    fumante: { type: Boolean },
    restricoes: {
        lactose: { type: Boolean },
        gluten: { type: Boolean },
        diabetes: { type: Boolean },
        hipertensao: { type: Boolean },
        vegetariano: { type: Boolean },
        vegano: { type: Boolean }
    },
    indicadores: {
        percentualGordura: { type: Number },
        glicose: { type: Number }
    },
    nivelAtividadeFisica: { type: String },
    planoalimentar: { type: mongoose.Schema.Types.ObjectId, ref: "PlanoAlimentar", default: null }
}, { versionKey: false });


const ModelDadosNutricionais = mongoose.model("DadosNutricionais", DadosNutricionaisSchema,"DadosNutricionais");

export default ModelDadosNutricionais;