document.addEventListener("DOMContentLoaded", () => {
    const nomeReceitaInput = document.getElementById('nomereceita');
    const tempoPreparoInput = document.getElementById('tempopreparo');
    const instrucoesInput = document.getElementById('instrucoes');
    const botaoCriarReceita = document.getElementById('btCreateReceita');
    const inputCalorias = document.getElementById("calorias");

    botaoCriarReceita.addEventListener('click', async () => {
        try {
            // Validação dos campos obrigatórios
            if (!nomeReceitaInput.value.trim()) {
                throw new Error("O nome da receita é obrigatório");
            }

            if (!tempoPreparoInput.value || isNaN(tempoPreparoInput.value)) {
                throw new Error("Tempo de preparo deve ser um número");
            }

            if (!instrucoesInput.value.trim()) {
                throw new Error("As instruções são obrigatórias");
            }

            // Coleta de ingredientes
            const ingredientes = Array.from(document.querySelectorAll('#tabIngredientes tbody tr'))
                .filter(linha => {
                    const inputs = linha.querySelectorAll('input');
                    return inputs.length >= 2 && inputs[0].value.trim() && inputs[1].value.trim();
                })
                .map(linha => {
                    const [nomeInput, qtdInput] = linha.querySelectorAll('input');
                    return {
                        nome: nomeInput.value.trim(),
                        quantidade: qtdInput.value.trim()
                    };
                });

            if (ingredientes.length === 0) {
                throw new Error("Adicione pelo menos um ingrediente");
            }
            console.log("calorias inserias:", inputCalorias.value);
            // Preparar objeto para envio
            const receitaData = {
                nome: nomeReceitaInput.value.trim(),
                tempoPreparo: parseInt(tempoPreparoInput.value),
                ingredientes,
                instrucoes: instrucoesInput.value.trim(),
                porcoes: 1, // Valor padrão
                quantidadeCalorias: inputCalorias.value // Valor padrão
            };

            console.log("Enviando dados:", receitaData);

            // Envio para API
            const response = await fetch('http://localhost:3000/Receitas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(receitaData)
            });

            if (!response.ok) {
                const responseData = await response.json();
                const serverMessage = responseData.message || responseData.error || "Erro desconhecido no servidor";
                throw new Error(`Servidor respondeu com erro: ${serverMessage} (status ${response.status})`);
            }
            alert("Receita criada com sucesso");
            //limpa todos os inputs da pagina
            document.querySelectorAll("input").forEach(input => input.value = "");
            const responseData = await response.json();
            console.log("Resposta do servidor:", responseData);

        } catch (error) {
            console.error("Erro completo:", {
                message: error.message,
                stack: error.stack,
                timestamp: new Date().toISOString()
            });
            alert(`Falha no cadastro: ${error.message}`);
        }
    });
});
