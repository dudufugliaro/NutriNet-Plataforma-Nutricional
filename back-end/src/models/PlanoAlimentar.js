import mongoose from "mongoose"

const PlanoAlimentarSchema = new mongoose.Schema({
    caloriasDiarias: {type: mongoose.Schema.Types.Number},
    proteinasDiarias: {type: mongoose.Schema.Types.Number},
    carboidratosDiarios: {type: mongoose.Schema.Types.Number},
    gordurasDiarias: {type: mongoose.Schema.Types.Number},
    objetivo: {type: mongoose.Schema.Types.String},
    dataInicio: {type: mongoose.Schema.Types.Date},
    dataFim: {type: mongoose.Schema.Types.Date}
}, {versionKey: false});

const ModelPlanoAlimentar = mongoose.model("PlanoAlimentar", PlanoAlimentarSchema, "PlanoAlimentar");

export {ModelPlanoAlimentar, PlanoAlimentarSchema};