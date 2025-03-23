//os controllers vao ser uma interface entre uma requisao e a logica de negocios que manipula esses dados
import ModelDadosNutricionais from "../models/dadosNutricionais.js";

class DadosNutricionaisController {
    static async getDadosNutricionais(req, res) { //o static serve para chamar o metodo sem instanciar uma classe
        try{
            const colecaoDadosNutricionais = await ModelDadosNutricionais.find({});
            res.status(200).json(colecaoDadosNutricionais);

        } catch(error){
            res.status(500).json({message: '${erro.message} - falha ao resgatar Dados Nutricionais'});
        }

    }

    static async postDadosNutricionais (req, res) {
        try{
            // const { nome, email, senha, altura, fumante, idade, peso, nivelAtividadeFisica,
            //     planoalimentar } = req.body;
            //conferir se o email e senha ja estao cadastrados no banco
            // if (await ModelDadosNutricionais.findOne({ email })) {
            //     return res.status(400).json({ message: "E-mail já cadastrado" });
            // }

            const newDN = await ModelDadosNutricionais.create(req.body);
            console.log(req.body)
            res.status(201).json({message: "criado com sucesso", DadosNutricionais: newDN});
        } catch (erro){
            res.status(500).json({message: '${erro.message} - falha ao cadastrar Dados Nutricionais'});
        }
    }    

    static async getDadosNutricionaisPorId(req, res) { //o static serve para chamar o metodo sem instanciar uma classe
        try{
            const id = req.params.id;
            const DadosNutricionais = await ModelDadosNutricionais.findById(id);
            // ModelDadosNutricionais.find({}).populate("planoalimentar").exec();
            res.status(200).json(DadosNutricionais);

        } catch(error){
            res.status(500).json({message: '${erro.message} - falha ao resgatar Dados Nutricionais pelo Id'});
        }

    }

    static async putDadosNutricionais(req, res) { //o static serve para chamar o metodo sem instanciar uma classe
        try{
            const id = req.params.id;
            ModelDadosNutricionais.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Dados Nutricionais atualizados"});
        } catch(error){
            res.status(500).json({message: '${erro.message} - falha ao atualizar Dados Nutricionais pelo Id'});
        }

    }

    static async deleteDadosNutricionais(req, res) { //o static serve para chamar o metodo sem instanciar uma classe
        try{
            const id = req.params.id;
            ModelDadosNutricionais.findByIdAndDelete(id);
            res.status(200).json({message: "Dados Nutricionais deletados"});
        } catch(error){
            res.status(500).json({message: '${erro.message} - falha ao excluir Dados Nutricionais pelo Id'});
        }

    }

    static async getDadosNutricionaisPeloNome(req, res){
        const nome = req.query.nome;
        try{
            const DadosNutricionais = await ModelDadosNutricionais.find({nome: nome});
            res.status(200).json(DadosNutricionais);    
        } catch(erro){
            res.status(500).json({message: '${erro.message} - falha ao buscar Dados Nutricionais pelo nome'});
        }
    }


};

export default DadosNutricionaisController;