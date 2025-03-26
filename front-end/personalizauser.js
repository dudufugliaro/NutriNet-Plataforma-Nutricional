document.addEventListener("DOMContentLoaded", function () {
    // Recuperar os dados do localStorage
    const usuarioData = localStorage.getItem("usuario");
    console.log(localStorage.getItem("usuario"));


    // Verificar se os dados existem
    if (usuarioData) {
        // Converter para objeto
        const usuario = JSON.parse(usuarioData);

        // Personalizar a página com os dados
        document.getElementById("nomeuser").textContent = usuario.nome;
        
    } else {
        console.warn("Nenhum nutricionista encontrado no localStorage.");
    }
});
