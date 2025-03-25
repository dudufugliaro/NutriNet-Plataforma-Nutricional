import ModelReceitas from "../models/Receitas";

class ReceitasController {
    
    static async getReceitas (req,res) {
        try{
            const receitas = await ModelReceitas.find({});
            res.status(200).json(receitas);

        } catch(error){
            res.status(500).json({message: '${erro.message} - falha ao resgatar Receitas'});
        }
    }

    static async postReceitas (req, res) {
        try{
            const newReceita = await ModelReceitas.create(req.body);
            console.log(req.body);
            req.status(201).json({message: "receita criada com sucesso", Receita: newReceita});
        } catch(error){
            res.status(500).json({message: '${erro.message} - falha ao cadastrar Receit'});
        }
    }
    
    static async getReceitasPeloNome (req, res) {
        const nomeReceita = req.query.nome;
        try{
            //para buscar por mais atributos, basta adicionar no argumento do find
            const Receita = await ModelReceitas.find({nome: nomeReceita});
            console.log(Receita);
            res.status(200).json();    
        } catch(erro){
            res.status(500).json({message: '${erro.message} - falha ao buscar Receitas pelo nome'});
        }
    }
};

export default ReceitasController;