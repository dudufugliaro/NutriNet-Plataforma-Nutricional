import mongoose from "mongoose";

//Um Schema é uma estrutra que define como os dados devem ser organizados dentro de um documento no BD.
//Um Model é uma representação da coleção no BD e, neste, caso, é a interface que permite que a API
//manipule e interaja com a coleção DadosNutricionais no MongoDB

const DadosNutricionaisSchema = new mongoose.Schema({
    nome: { type: String },
    email: { type: String },
    genero: { type: String },
    senha: { type: String },
    altura: { type: Number },
    peso: { type: Number },
    objetivo: { type: String },
    fumante: { type: Boolean },
    dataNascimento: { type: Date},
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