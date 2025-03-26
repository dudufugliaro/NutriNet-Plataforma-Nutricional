import mongoose from 'mongoose';

// Definindo o esquema do Nutricionista
const DadosUsuarioSchema = new mongoose.Schema({
    email: { type: String  }, // email do usuario
    gordura: { type: Number }, // percentual de gordura
    pressao: { type: Number }, // pressao sanguinea
    glicose: {type: Number}, //glicose
    peso: { type: Number }, // peso
    data: {type: Date} //data de adicao
});

// Criando o modelo
const ModelDadosUsuario = mongoose.model('DadosUsuario', DadosUsuarioSchema, 'DadosUsuario');

export default ModelDadosUsuario;