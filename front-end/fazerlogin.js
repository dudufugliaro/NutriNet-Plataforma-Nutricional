document.addEventListener("DOMContentLoaded", function () {
    const botaoLogin = document.getElementById("btnLogin");

    if (!botaoLogin) {
        console.error("Erro: Botão 'criarConta' não encontrado!");
        return;
    }

    botaoLogin.addEventListener("click", async function () {
        event.preventDefault()
        console.log("Botão Criar Conta clicado!");

        // Pegando os dados do formulário
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        
        // Verificando se todos os campos estão preenchidos
        if (!email || !senha) {
            alert("Por favor, preencha todos os campos!");
            return;
        }
        
        const credenciais = {email, senha};
        console.log(credenciais)

        // Enviando os dados para a API
        try {
            let response = await fetch("http://localhost:3000/Nutricionista/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credenciais),
            });
            console.log("Resposta:", response);
            let data = await response.json();
            // Verificando se a resposta foi bem-sucedida
            
            if (response.ok) {
                localStorage.removeItem("nutricionista");
                localStorage.setItem("nutricionista",JSON.stringify(data.nutricionista));  
                console.log("Sucesso:", data);
                window.location.href = "nutPage.html" 
                return; 
            }
            response = await fetch("http://localhost:3000/DadosNutricionais/login",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credenciais),
            });
            data = await response.json();

            if(response.ok){
                localStorage.removeItem("usuario");
                localStorage.setItem("usuario", JSON.stringify(data.user));  
                console.log("Sucesso:", data);
                window.location.href = "clientpage.html" 
                return; 
            }
                
        alert("Credenciais inválidas. Tente novamente.");
            

        } catch (error) {
            console.error("Erro:", error);
            alert("Erro ao logar na conta. Tente novamente.");
        }
    });
});
