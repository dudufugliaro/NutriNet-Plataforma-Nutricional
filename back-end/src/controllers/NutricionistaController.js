import ModelNutricionista from "../models/Nutricionista.js";

class NutricionistaController {
    
    // Retorna todos os nutricionistas
    static async getNutricionistas(req, res) {
        try {
            const nutricionistas = await ModelNutricionista.find({});
            res.status(200).json(nutricionistas);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao buscar nutricionistas.` });
        }
    }

    // Busca nutricionista pelo nome (usando query param ?nome=xyz)
    static async getNutricionistaPeloNome(req, res) {
        const nome = req.query.nome;
        try {
            const nutricionista = await ModelNutricionista.findOne({ nome });
            if (!nutricionista) {
                return res.status(404).json({ message: "Nutricionista não encontrado." });
            }
            res.status(200).json(nutricionista);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao buscar nutricionista pelo nome.` });
        }
    }

    // Cadastra um novo nutricionista
    static async postNutricionista(req, res) {
        try {
            const novoNutricionista = await ModelNutricionista.create(req.body);
            res.status(201).json({ message: "Nutricionista cadastrado com sucesso!", nutricionista: novoNutricionista });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao cadastrar nutricionista.` });
        }
    }

    // Busca um nutricionista pelo ID
    static async getNutricionistaPorId(req, res) {
        try {
            const nutricionista = await ModelNutricionista.findById(req.params.id);
            if (!nutricionista) {
                return res.status(404).json({ message: "Nutricionista não encontrado." });
            }
            res.status(200).json(nutricionista);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao buscar nutricionista pelo ID.` });
        }
    }

    // Atualiza um nutricionista pelo ID
    static async putNutricionista(req, res) {
        try {
            const nutricionistaAtualizado = await ModelNutricionista.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!nutricionistaAtualizado) {
                return res.status(404).json({ message: "Nutricionista não encontrado." });
            }
            res.status(200).json({ message: "Nutricionista atualizado com sucesso!", nutricionista: nutricionistaAtualizado });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao atualizar nutricionista.` });
        }
    }

    // Deleta um nutricionista pelo ID
    static async deleteNutricionista(req, res) {
        try {
            const nutricionistaDeletado = await ModelNutricionista.findByIdAndDelete(req.params.id);
            if (!nutricionistaDeletado) {
                return res.status(404).json({ message: "Nutricionista não encontrado." });
            }
            res.status(200).json({ message: "Nutricionista deletado com sucesso!" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao deletar nutricionista.` });
        }
    }

    // Login de nutricionista (busca por email e senha)
    static async loginNutricionista(req, res) {
        try {
            const { email, senha } = req.body;
            const nutricionista = await ModelNutricionista.findOne({ email, senha });
            
            if (!nutricionista) {
                return res.status(401).json({ message: "Credenciais inválidas." });
            }

            res.status(200).json({ message: "Login realizado com sucesso!", nutricionista });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao realizar login.` });
        }
    }
}

export default NutricionistaController;
