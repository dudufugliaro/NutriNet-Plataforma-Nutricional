import express from 'express';
import DadosUsuarioController from "../controllers/DadosUsuarioController.js"

const router = express.Router();

// Rota para criar ou atualizar dados do usuário
router.post('/dados', DadosUsuarioController.criarDadosUsuario);

// Rota para buscar dados do usuário
router.get('/dados/:email', DadosUsuarioController.buscarDadosUsuario);

// Rota para deletar dados do usuário
router.delete('/dados/:email', DadosUsuarioController.deletarDadosUsuario);

export default router;
