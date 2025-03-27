//o document ja exite sem declarar ou criar nada, o proprio navegador cria este objeto e ele fica disponivel globalmente para qualquer script
//adicionar um Event Listener, com DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {

    botaoBuscaReceitasPeloNome = document.getElementById("botao-buscar-receita-pelo-nome");
    inputNomeReceita = document.getElementById("input-nome-receita");

    botaoBuscaReceitasPeloTempoPreparo = document.getElementById("botao-buscar-receitas-pelo-tempopreparo");
    inputtempoPreparo = document.getElementById("input-tempopreparo-receita");

    inputCalorias = document.getElementById("input-calorias-receita");
    botaoBuscaReceitasPelasCalorias = document.getElementById("botao-buscar-receitas-por-calorias");

    if (!botaoBuscaReceitasPeloNome || !inputNomeReceita) {
        console.error("Erro: Elementos HTML não encontrados.");
        return;
    }
    
    function preencherReceitas(receitas) {
        const container = document.getElementById("container-receitas");
        container.innerHTML = ""; // Limpa antes de adicionar novas receitas
    
        receitas.forEach(receita => {
            const divReceita = document.createElement("div");
            divReceita.classList.add("receita");
    
            divReceita.innerHTML = `
                <h2>${receita.nome}</h2>
                <p><strong>Descrição:</strong> ${receita.descricao || "Sem descrição"}</p>
                <p><strong>Tempo de preparo:</strong> ${receita.tempoPreparo} minutos</p>
                <p><strong>Porções:</strong> ${receita.porcoes}</p>
                <p><strong>Calorias:</strong> ${receita.quantidadeCalorias} kcal</p>
    
                <h3>Ingredientes:</h3>
                <ul>
                    ${receita.ingredientes.map(ingrediente => `<li>${ingrediente.quantidade} de ${ingrediente.nome}</li>`).join("")}
                </ul>
    
                <h3>Instruções:</h3>
                <p>${receita.instrucoes}</p>
    
                <p><strong>Categoria:</strong> ${receita.categoria || "Sem categoria"}</p>
                <p><em>Criado em: ${new Date(receita.dataCriacao).toLocaleDateString()}</em></p>
            `;
    
            container.appendChild(divReceita);
        });
    }  

       

    botaoBuscaReceitasPeloNome.addEventListener("click", function (event) {
        event.preventDefault(); // Evita recarregar a página
        nomeReceita = inputNomeReceita.value;
        let url = `http://localhost:3000/Receitas/busca-nome?nome=${encodeURIComponent(nomeReceita)}`;
        fetch(url, {  
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })  //o then eh executao apos a resposta do fetch -- entao, aninhando os then podendo ir tratando as diferentes e sequenciais etapas do processo
        .then(response => response.json())
        .then(data => {
            console.log("receita encontrada: ", data);
            alert("Receitas buscadas com sucesso");
            document.querySelectorAll("input").forEach(input => input.value = "");
            preencherReceitas(data);
        })
        .catch(error => {
            console.error("Erro:", error);
            alert("Erro ao buscar receitas pelo nome");
        });
    });

    botaoBuscaReceitasPeloTempoPreparo.addEventListener("click", function (event) {
        event.preventDefault(); // Evita recarregar a página
        tempo = inputtempoPreparo.value;
        console.log(tempo);
        let url = `http://localhost:3000/Receitas/busca-tempo?tempo=${encodeURIComponent(tempo)}`;
        fetch(url, {  
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })  //o then eh executao apos a resposta do fetch -- entao, aninhando os then podendo ir tratando as diferentes e sequenciais etapas do processo
        .then(response => response.json())
        .then(data => {
            alert("Receitas buscadas com sucesso");
            document.querySelectorAll("input").forEach(input => input.value = "");
            preencherReceitas(data);
        })
        .catch(error => {
            console.error("Erro:", error);
            alert("Erro ao buscar receitas pelo tempo de preparo");
        });
    });

    botaoBuscaReceitasPelasCalorias.addEventListener("click", function (event) {
        event.preventDefault(); // Evita recarregar a página
        calorias = inputCalorias.value;
        console.log(calorias);
        let url = `http://localhost:3000/Receitas/busca-calorias?calorias=${encodeURIComponent(calorias)}`;
        fetch(url, {  
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })  //o then eh executao apos a resposta do fetch -- entao, aninhando os then podendo ir tratando as diferentes e sequenciais etapas do processo
        .then(response => response.json())
        .then(data => {
            console.log("receita encontrada: ", data);
            alert("Receitas buscadas com sucesso");
            document.querySelectorAll("input").forEach(input => input.value = "");
            preencherReceitas(data);
        })
        .catch(error => {
            console.error("Erro:", error);
            alert("Erro ao buscar receitas pelas calorias");
        });
    });



    
});