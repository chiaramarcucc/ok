const cubisti = [
    {
        nome: "Nome Cubista 1",
        wcaid: 2010,
        media3x3: 8.50,
        singolo3x3: 6.20,
        // Aggiungi altri dati
    },
    {
        nome: "Nome Cubista 2",
        wcaid: 2015,
        media3x3: 7.80,
        singolo3x3: 5.90,
        // Aggiungi altri dati
    },
    // Aggiungi altri cubisti
];

let soldi = 10;
let indizi = [];
let cubistaScelto = cubisti[Math.floor(Math.random() * cubisti.length)];

function chiediIndizio(tipoIndizio) {
    let costo = 1;
    if (tipoIndizio === "wcaid" || tipoIndizio === "numeroGare" || tipoIndizio === "numeroMedaglie") {
        costo = 3;
    }

    if (soldi >= costo) {
        soldi -= costo;
        indizi.push(`${tipoIndizio}: ${cubistaScelto[tipoIndizio]}`);
        aggiornaIndizi();
    } else {
        alert("Non hai abbastanza soldi!");
    }
}

function aggiornaIndizi() {
    const listaIndizi = document.getElementById("lista-indizi");
    listaIndizi.innerHTML = "";
    indizi.forEach(indizio => {
        const elementoIndizio = document.createElement("li");
        elementoIndizio.textContent = indizio;
        listaIndizi.appendChild(elementoIndizio);
    });
}

function indovina() {
    const nomeInserito = prompt("Chi è il cubista?");
    if (nomeInserito && nomeInserito.toLowerCase() === cubistaScelto.nome.toLowerCase()) {
        document.getElementById("risultato").textContent = "Hai indovinato!";
    } else {
        document.getElementById("risultato").textContent = `Sbagliato! Era ${cubistaScelto.nome}.`;
    }
}
