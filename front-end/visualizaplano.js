document.addEventListener("DOMContentLoaded", async function () {
    const usuario = localStorage.getItem("usuario"); // Obtém o ID salvo
    console.log(usuario)
    //const planoId = "67e515e2bf6952e5ae5a41b8"
    
    console.log(usuario)
    if (!usuario) {
        console.error("Nenhum plano alimentar encontrado no localStorage.");
        return;
    }else{
        const userSalvo = JSON.parse(usuario); // Converte para objeto
        console.log("Usuário carregado:", usuario); // Debug
        try {
            const response = await fetch(`http://localhost:3000/PlanoAlimentar/${userSalvo.planoalimentar}`);
            if (!response.ok) throw new Error("Erro ao buscar o plano alimentar");
    
            const plano = await response.json();
    
            // Atualiza os elementos da tabela
            document.getElementById("calorias").textContent = plano.caloriasDiarias + " kcal";
            document.getElementById("proteinas").textContent = plano.proteinasDiarias + " g";
            document.getElementById("gorduras").textContent = plano.gordurasDiarias + " g";
            document.getElementById("carboidratos").textContent = plano.carboidratosDiarios + " g";
            document.getElementById("objetivo").textContent = plano.objetivo;
            document.getElementById("datainicio").textContent = new Date(plano.dataInicio).toLocaleDateString("pt-BR");
            document.getElementById("datafim").textContent = new Date(plano.dataFim).toLocaleDateString("pt-BR");
    
        } catch (error) {
            console.error("Erro ao carregar os dados:", error);
        }
    }
    
});
