import ModelDadosUsuario from '../models/DadosUsuario.js';

class DadosUsuarioController {

    // Método para criar dados do usuário
    static async criarDadosUsuario(req, res){
        try {
            const { email, peso, pressao, glicose, gordura, data } = req.body;
            
            if (!email || !peso || !pressao || !glicose || !gordura || !data) {
                return res.status(400).json({ error: "Todos os campos são obrigatórios." });
            }

            // Criando um novo documento no banco com a data recebida na requisição
            const novoDado = new ModelDadosUsuario({
                email,
                peso,
                pressao,
                glicose,
                gordura,
                data: new Date(data) // Convertendo para um objeto Date
            });

            // Salvando no banco de dados
            await novoDado.save();

            res.status(201).json(novoDado);
        } catch (error) {
            console.error("Erro ao criar dados do usuário:", error);
            res.status(500).json({ error: "Erro interno do servidor." });
        }
    }

    // Método para buscar dados do usuário
    static async buscarDadosUsuario(req, res) {
        try {
            const { email } = req.params;

            // Buscando dados do usuário pelo email
            const dadosUsuario = await ModelDadosUsuario.find({ email });

            if (!dadosUsuario) {
                return res.status(404).json({ message: "Usuário não encontrado." });
            }

            return res.status(200).json({ dadosUsuario });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro ao buscar dados do usuário.", error: error.message });
        }
    }

    // Método para deletar dados do usuário
    static async deletarDadosUsuario(req, res) {
        try {
            const { email } = req.params;

            const dadosUsuario = await ModelDadosUsuario.findOneAndDelete({ email });

            if (!dadosUsuario) {
                return res.status(404).json({ message: "Usuário não encontrado." });
            }

            return res.status(200).json({ message: "Dados do usuário excluídos com sucesso!" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro ao excluir dados do usuário.", error: error.message });
        }
    }
}

export default DadosUsuarioController;
