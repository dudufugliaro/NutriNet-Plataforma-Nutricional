document.addEventListener("DOMContentLoaded", function () {
    // Recuperar os dados do localStorage
    const nutricionistaData = localStorage.getItem("nutricionista");

    // Verificar se os dados existem
    if (nutricionistaData) {
        // Converter para objeto
        const nutricionista = JSON.parse(nutricionistaData);

        // Personalizar a página com os dados
        document.getElementById("nomenut").textContent = nutricionista.nome;
        
    } else {
        console.warn("Nenhum nutricionista encontrado no localStorage.");
    }
});
