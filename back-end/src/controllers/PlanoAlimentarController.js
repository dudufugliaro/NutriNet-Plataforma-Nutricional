import { ModelPlanoAlimentar } from "../models/PlanoAlimentar.js"
import ModelDadosNutricionais from "../models/dadosNutricionais.js";

class PlanoAlimentarController{

    static async getPlanosAlimentares(req, res) {
        try{
            const PlanosAlimentares = await ModelPlanoAlimentar.find({});
            res.status(200).json(PlanosAlimentares);
        } catch(erro){
            res.status(500).json({message: '${erro.message} - falha ao resgatar Planos Alimentares'});
        }
    }

    // static async postPlanoAlimentar(req, res) {
    //     try{
    //         //receber no req o id do usuario que sera associado ao plano e depois atualizar 
    //         const newPA = await ModelPlanoAlimentar.create(req.body);
    //         res.status(201).json({message: "criado com sucesso", PlanoAlimentar: newPA});
    //     } catch(erro){
    //         res.status(500).json({message: `${erro.message} - falha ao registrar Plano Alimentar`});
    //     }
    // }

    static async postPlanoAlimentar(req, res) {
        try{
            // 📌 Extrai o ID do usuário e os dados do plano do corpo da requisição
            const { usuarioId, ...PlanoAlimentar } = req.body;

            // 📌 Verifica se o usuário existe antes de criar o plano
            const usuario = await ModelDadosNutricionais.findById(usuarioId);
            if (!usuario) {
                return res.status(404).json({ message: "Usuário não encontrado" });
            }

            const novoPlanoAlimentar = await ModelPlanoAlimentar.create(PlanoAlimentar);
            await ModelDadosNutricionais.findByIdAndUpdate(usuarioId, { planoalimentar: novoPlanoAlimentar._id });

             // 📌 Responde com sucesso
            res.status(201).json({
                message: "Plano Alimentar criado e associado com sucesso!",
                PlanoAlimentar: novoPlanoAlimentar,
                UsuarioAtualizado: usuario
            });

        } catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao registrar Plano Alimentar`});
        }
    }

    static async getPlanoAlimentarePorId(req, res) {
        try{
            const id = req.params.id;
            const PlanoAlimentar = await ModelPlanoAlimentar.findById(id);
            res.status(200).json(PlanoAlimentar);
        } catch(erro){
            res.status(500).json({message: '${erro.message} - falha ao resgatar Plano Alimentar por Id'});
        }
    }

    static async putPlanoAlimentar(req, res) {
        try{
            const id = req.params.id;
            await ModelPlanoAlimentar.findByIdAndUpdate(id, req.body);
            res.status(200).json("Plano Alimentar Atualizado");
        } catch(erro){
            res.status(500).json({message: '${erro.message} - falha ao atualizar Plano Alimentar'});
        }
    }

    static async deletePlanoAlimentar(req, res) {
        try{
            const id = req.params.id;
            await ModelPlanoAlimentar.findByIdAndDelete(id);
            res.status(200).json("Plano Alimentar deletado");
        } catch(erro){
            res.status(500).json({message: '${erro.message} - falha ao deletado Plano Alimentar'});
        }
    }

};

export default PlanoAlimentarController;