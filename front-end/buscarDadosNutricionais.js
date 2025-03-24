//o document ja exite sem declarar ou criar nada, o proprio navegador cria este objeto e ele fica disponivel globalmente para qualquer script
document.addEventListener("DOMContentLoaded", function () {
    const inputNomeBusca = document.getElementById("nome-usuario-busca");
    const botaoBuscaDadosPeloNome = document.getElementById("botao-busca-dados-pelo-nome")

    //O DOM transforma o HTML em uma arvore de elementos e isso permite que o JavaScript entre para adicionar a interacao
    //na pagina

    function mostrarDadosNutricionais(dadosUsuario) {
        const tabela = document.getElementById("tabela-dados-nutricionais-usuario");

        const linhas = tabela.querySelectorAll("tbody tr");

        // Inserindo os dados em cada linha (segunda célula <td>)
        linhas[0].children[1].textContent = dadosUsuario.nome;
        linhas[1].children[1].textContent = dadosUsuario.genero;
        linhas[2].children[1].textContent = dadosUsuario.dataNascimento;
        linhas[3].children[1].textContent = dadosUsuario.altura;
        linhas[4].children[1].textContent = dadosUsuario.peso + " kg";
        linhas[5].children[1].textContent = dadosUsuario.objetivo;
        linhas[6].children[1].textContent = dadosUsuario.indicadores.glicose;
        linhas[7].children[1].textContent = dadosUsuario.gordura;
        linhas[8].children[1].textContent = dadosUsuario.fumante;
        linhas[9].children[1].textContent = dadosUsuario.restricoes.lactose;
        linhas[10].children[1].textContent = dadosUsuario.restricoes.gluten;
        linhas[11].children[1].textContent = dadosUsuario.restricoes.diabetes;
        linhas[12].children[1].textContent = dadosUsuario.restricoes.hipertensao;
        linhas[13].children[1].textContent = dadosUsuario.restricoes.vegetariano;
        linhas[14].children[1].textContent = dadosUsuario.restricoes.vegano;
    }

    botaoBuscaDadosPeloNome.addEventListener("click", function (event) {
        event.preventDefault(); // Evita recarregar a página
        const nomeBusca = inputNomeBusca.value
        //passar o nome para a url da requisicao que o back-end possa buscar os dados nutricioanis do nome
        //url do tipo http://localhost:3000/DadosNutricionais/busca?nome=nomeBusca
        let url = `http://localhost:3000/DadosNutricionais/busca?nome=${encodeURIComponent(nomeBusca)}`;
        fetch(url, {  
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })  //o then eh executao apos a resposta do fetch -- entao, aninhando os then podendo ir tratando as diferentes e sequenciais etapas do processo
        .then(response => response.json())
        .then(data => {
            console.log("Sucesso:", data);
            alert("Dados nutricionais buscados com sucesso!");
            mostrarDadosNutricionais(data[0]);
            // window.location.href = "clientpage.html"
        })
        .catch(error => {
            console.error("Erro:", error);
            alert("Erro ao buscar dados nutricionais do usuario");
        });
    });

    
});
