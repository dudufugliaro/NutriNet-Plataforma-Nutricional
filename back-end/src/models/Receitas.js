import mongoose from "mongoose"

const ReceitasSchema = new mongoose.Schema({
    nome: { type: String, required: true }, // Nome da receita
    descricao: { type: String }, // Descrição opcional
    tempoPreparo: { type: Number, required: true }, // Tempo em minutos
    porcoes: { type: Number, required: true }, // Quantidade de porções
    quantidadeCalorias: { type: Number, required: true},
    //array de objetos - cada receita pode ter um numero diferente de ingredientes
    ingredientes: [
        {
            nome: { type: String, required: true }, // Nome do ingrediente
            quantidade: { type: String, required: true } // Quantidade
        }
    ],

    instrucoes: { type: String, required: true }, // Passo a passo
    categoria: { type: String}, // Categoria opcional
    dataCriacao: { type: Date, default: Date.now } // Data de criação automática
}, {versionKey: false});

const ModelReceitas = mongoose.model("Receitas", ReceitasSchema, "Receitas");

export default ModelReceitas;