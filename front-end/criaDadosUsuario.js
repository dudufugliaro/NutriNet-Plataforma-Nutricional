document.addEventListener("DOMContentLoaded", function () {
    const botaoCriarConta = document.getElementById("btnCriarDadosUser");
    
    if (!botaoCriarConta) {
        console.error("Erro: Botão 'criar dados' não encontrado!");
        return;
    }

    botaoCriarConta.addEventListener("click", async function () {
        console.log("Botão Criar dados usuario clicado!");

        // Pegando os dados do formulário

        const usuarioData = localStorage.getItem("usuario");
        if (usuarioData) {
            // Converter para objeto
            const usuario = JSON.parse(usuarioData);
           /* email = "mateus@email.com"
            gordura = 0.1 // percentual de gordura
            pressao = 12  // pressao sanguinea
            glicose = 70 //glicose
            peso = 70 // peso
            data = new Date(2025,2,26)*/
            email = usuario.email
            gordura = document.getElementById("gordura").value; // percentual de gordura
            pressao = document.getElementById("pressao").value;  // pressao sanguinea
            glicose = document.getElementById("glicose").value; //glicose
            peso = document.getElementById("peso").value; // peso
            data = document.getElementById("data").value;
            
            // Criando um objeto com os dados
            const dadosuser = {email,gordura,pressao,glicose,peso,data};
            console.log(dadosuser)
            // Verificando se todos os campos estão preenchidos
            if (!email || !gordura || !pressao || !glicose || !peso || !data) {
                alert("Por favor, preencha todos os campos!");
                return;
            }

            // Enviando os dados para a API
            try {
                const response = await fetch("http://localhost:3000/dados", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(dadosuser),
                });
                console.log(response);
                // Verificando se a resposta foi bem-sucedida
                if (!response.ok) {
                    throw new Error('Erro ao criar dados.');
                }
                else{
                    const data = await response.json();
                    console.log("Sucesso:", data);
                    alert("Dados adicionados com sucesso")
                    window.location.href = "clientpage.html" 
                }
            } catch (error) {
                console.error("Erro:", error);
                alert("Erro ao criar conta. Tente novamente.");
            }
        }
    });
});
