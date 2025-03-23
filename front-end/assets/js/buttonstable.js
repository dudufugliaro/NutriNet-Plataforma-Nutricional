document.addEventListener("DOMContentLoaded", function () {
    // Adicionar nova linha
    document.getElementById("btadd").addEventListener("click", function () {
        const table = document.getElementById("tabIngredientes").getElementsByTagName("tbody")[0];
        const newRow = table.insertRow();
        
        // Célula 1: Nome
        const cell1 = newRow.insertCell(0);
        cell1.innerHTML = '<input type="text" class="form-control" placeholder="Ingrediente">';

        // Célula 2: Idade
        const cell2 = newRow.insertCell(1);
        cell2.innerHTML = '<input type="text" class="form-control" placeholder="Quantidade">';

        // Célula 3: Ações (botões)
        const cell3 = newRow.insertCell(2);
        cell3.innerHTML = `
            <button class="btn btn-sm btn-primary edit-btn">Editar</button>
            <button class="btn btn-sm btn-secondary delete-btn">Apagar</button>
        `;
    });

    // Apagar linha
    document.addEventListener("click", function (e) {
        if (e.target && e.target.classList.contains("delete-btn")) {
            const row = e.target.closest("tr");
            if (row) {
                row.remove();
            } else {
                console.error("Linha não encontrada!");
            }
        }
    });
});