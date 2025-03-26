import mongoose from 'mongoose';

// Definindo o esquema do Nutricionista
const NutricionistaSchema = new mongoose.Schema({
    nome: { type: String  }, // Nome do nutricionista
    dataNascimento: { type: Date }, // Data de nascimento
    email: { type: String }, // Email
    senha: { type: String } // Senha 
});

// Criando o modelo
const ModelNutricionista = mongoose.model('Nutricionista', NutricionistaSchema, 'Nutricionista');

export default ModelNutricionista;