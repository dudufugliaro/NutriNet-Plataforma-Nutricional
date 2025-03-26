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
            // Verifique os dados recebidos
            console.log("Dados recebidos:", req.body);

            // Validação básica
            if (!req.body.nome || !req.body.tempoPreparo || req.body.ingredientes.length === 0 || !req.body.instrucoes) {
                return res.status(400).json({ error: "Preencha todos os campos obrigatórios corretamente." });
            }

            // Criar uma nova receita
            const novaReceita = await ModelReceitas.create(req.body);

            // Enviar resposta de sucesso
            return res.status(201).json({
                message: "Receita criada com sucesso",
                Receita: novaReceita
            });

        } catch (erro) {
            console.error("Erro no servidor:", erro);  // Verifique o erro no servidor
            return res.status(500).json({
                message: `Erro no servidor: ${erro.message} - falha ao cadastrar Receita`,
            });
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
