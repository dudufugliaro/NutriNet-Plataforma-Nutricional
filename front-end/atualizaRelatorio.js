document.addEventListener("DOMContentLoaded", async function () {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    if (!usuario || !usuario.email) {
        console.error("Nenhum usuário logado.");
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/dados/${usuario.email}`);
        if (!response.ok) {
            throw new Error("Erro ao buscar dados do usuário.");
        }

        const dados = await response.json();
        if (!dados.dadosUsuario || dados.dadosUsuario.length < 1) {
            console.error("Nenhum dado encontrado.");
            return;
        }

        const dadosUsuario = dados.dadosUsuario; // Acessando o array de dados

        // Ordenar os dados do mais recente para o mais antigo com base na data
        dadosUsuario.sort((a, b) => new Date(b.data) - new Date(a.data));

        // Pegando os dois registros mais recentes
        const recente = dadosUsuario[0];
        const anterior = dadosUsuario[1] || {}; // Se não houver um segundo registro, evita erro

        // Função para calcular variação percentual
        function calcularVariacao(atual, antigo) {
            if (!antigo || antigo === 0) return "N/A";
            return ((atual - antigo) / antigo * 100).toFixed(2) + "%";
        }

        // Atualizar a tabela com os dados mais recentes e suas variações
        const tabela = document.getElementById("tabRelatorio").getElementsByTagName("tbody")[0];
        tabela.innerHTML = `
            <tr><td>Peso</td><td>${recente.peso + " kg" || "N/A"}</td><td>${calcularVariacao(recente.peso, anterior.peso)}</td></tr>
            <tr><td>Pressão sanguínea</td><td>${recente.pressao + " mmHg" || "N/A"}</td><td>${calcularVariacao(recente.pressao, anterior.pressao)}</td></tr>
            <tr><td>Glicose</td><td>${recente.glicose + "mg/dL" || "N/A"}</td><td>${calcularVariacao(recente.glicose, anterior.glicose)}</td></tr>
            <tr><td>Gordura (%)</td><td>${recente.gordura*100 + "%" || "N/A"}</td><td>${calcularVariacao(recente.gordura, anterior.gordura)}</td></tr>
        `;

        // Calcular e exibir o IMC
        const altura = usuario.altura;
        console.log(altura) 
        const imc = (recente.peso / (altura ** 2)).toFixed(2);
        let classificacao = "Normal";
        if (imc < 18.5) classificacao = "Abaixo do peso";
        else if (imc >= 25 && imc < 30) classificacao = "Sobrepeso";
        else if (imc >= 30) classificacao = "Obesidade";

        document.querySelector("#formdiv p").innerHTML = `Seu IMC baseado nas últimas medidas corporais é: ${imc}. Você está na classe <em>${classificacao}</em>.`;

    } catch (error) {
        console.error("Erro ao buscar dados:", error);
    }
});
