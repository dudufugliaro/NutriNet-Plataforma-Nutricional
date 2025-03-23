document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formCriarConta");
    const botaoCriarConta = document.getElementById("botaoCriarConta");

    //O DOM transforma o HTML em uma arvore de elementos e isso permite que o JavaScript entre para adicionar a interacao
    //na pagina

    botaoCriarConta.addEventListener("click", function (event) {
        event.preventDefault(); // Evita recarregar a página

        // Criar um objeto com os dados do formulário
        const formData = {
            nome: form.name.value,
            genero: form.genero.value,
            dataNascimento: form.dataNascimento.value,
            email: form.email.value,
            senha: form.senha.value,
            peso: form.peso.value,
            altura: form.altura.value,
            objetivo: form.objetivo.value,
            fumante: form.fumante.value === "1",
            restricoes: {
                lactose: form.lactose.checked,
                gluten: form.gluten.checked,
                diabetes: form.diabetes.checked,
                hipertensao: form.hipertensao.checked,
                vegetariano: form.vegetariano.checked,
                vegano: form.vegano.checked,
            },
            indicadores: {
                percentualGordura: form.percentualGordura.value,
                glicose: form.glicose.value
            }
        };

        // Enviar os dados via requisição POST para o back-end - o fetch serve como uma api para comunicar com o back-end
        fetch("http://localhost:3000/DadosNutricionais", {  // Ajuste a URL conforme necessário
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })  //o then eh executao apos a resposta do fetch -- entao, aninhando os then podendo ir tratando as diferentes e sequenciais etapas do processo
        .then(response => response.json())
        .then(data => {
            console.log("Sucesso:", data);
            alert("Conta criada com sucesso!");
            window.location.href = "clientpage.html"
        })
        .catch(error => {
            console.error("Erro:", error);
            alert("Erro ao criar conta. Tente novamente.");
        });
    });
});
