document.addEventListener("DOMContentLoaded", function () {
    const botaoLogout = document.getElementById("btnLogout");

    if (!botaoLogout) {
        console.error("Erro: Botão 'Logout' não encontrado!");
        return;
    }

    botaoLogout.addEventListener("click", function () {
        // Remover o item 'nutricionista' do localStorage
        localStorage.removeItem("usuario");

        // Redirecionar para a página de login (ou outra página)
        window.location.href = "../initial.html";
    });
});
