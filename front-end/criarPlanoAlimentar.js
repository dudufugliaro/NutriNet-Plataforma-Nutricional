document.addEventListener("DOMContentLoaded", function () {

    const botaoCriarPlanoAlimentar = document.getElementById("botao-criar-plano");
    

    botaoCriarPlanoAlimentar.addEventListener("click", function (event) {
        event.preventDefault();

        const planoAlimentar = {
            nomeUsuario : document.getElementById("nome-usuario-busca").value,
            caloriasDiarias : document.getElementById("input-calorias-diarias").value,
            proteinasDiarias : document.getElementById("input-proteinas-diarias").value,
            carboidratosDiarios : document.getElementById("input-carboidratos-diarios").value,
            gordurasDiarias : document.getElementById("input-gorduras-diarias").value,   
            objetivo : document.getElementById("input-objetivo").value,  
            dataInicio : new Date(document.getElementById("input-data-inicio").value),
            dataFim : new Date(document.getElementById("input-data-fim").value),
        };        
        console.log(planoAlimentar);


        fetch("http://localhost:3000/PlanoAlimentar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(planoAlimentar)
        })
        .then(response => response.json())
        .then(data => {
            console.log("Plano Alimentar salvo com sucesso", data);
            alert("Plano Alimentar criado com sucesso");
        })
        .catch(error => {
            console.log("erro:", error);
            alert("erro ao criar plano alimentar");
        });

    });
});