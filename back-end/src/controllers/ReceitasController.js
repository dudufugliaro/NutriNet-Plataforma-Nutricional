import ModelReceitas from "../models/Receitas.js";

class ReceitasController {
    
    static async getReceitas (req, res) {
        try {
            const receitas = await ModelReceitas.find({});
            res.status(200).json(receitas);
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha ao resgatar Receitas`});
        }
    }

    static async postReceitas (req, res) {
        try {
            console.log("Recebendo dados:", req.body);

            // Validação básica no backend
            if (!req.body.nome || !req.body.tempoPreparo || req.body.ingredientes.length === 0 || !req.body.instrucoes) {
                return res.status(400).json({ error: "Preencha todos os campos obrigatórios corretamente." });
            }

            const newReceita = await ModelReceitas.create(req.body);
            console.log(req.body);
            req.status(201).json({message: "receita criada com sucesso", Receita: newReceita});
        } catch(error){
            res.status(500).json({message: '${erro.message} - falha ao cadastrar Receit'});
        }
    }
    
    static async getReceitasPeloNome (req, res) {
        const nomeReceita = req.query.nome;
        try {
            const receita = await ModelReceitas.find({ nome: nomeReceita });
            res.status(200).json(receita);
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha ao buscar Receitas pelo nome`});
        }
    }
};

export default ReceitasController;
