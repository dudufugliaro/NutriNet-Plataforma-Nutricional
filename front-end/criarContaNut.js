document.addEventListener("DOMContentLoaded", function () {
    const botaoCriarConta = document.getElementById("btnCriarConta");

    if (!botaoCriarConta) {
        console.error("Erro: Botão 'criarConta' não encontrado!");
        return;
    }

    botaoCriarConta.addEventListener("click", async function () {
        console.log("Botão Criar Conta clicado!");

        // Pegando os dados do formulário
        const nome = document.getElementById("nome").value;
        const genero = document.getElementById("genero").value;
        const dataNascimento = document.getElementById("datanasc").value;
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        // Criando um objeto com os dados
        const dadosnut = { nome, genero, dataNascimento, email, senha };

        // Verificando se todos os campos estão preenchidos
        if (!nome || !genero || !dataNascimento || !email || !senha) {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        // Enviando os dados para a API
        try {
            const response = await fetch("http://localhost:3000/Nutricionista", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dadosnut),
            });

            // Verificando se a resposta foi bem-sucedida
            if (!response.ok) {
                throw new Error('Erro ao criar conta.');
            }

            const data = await response.json();
            console.log("Sucesso:", data);

            // Exibindo a mensagem de sucesso e redirecionando
            alert("Conta criada com sucesso!");
            window.location.href = "login.html";

        } catch (error) {
            console.error("Erro:", error);
            alert("Erro ao criar conta. Tente novamente.");
        }
    });
});
