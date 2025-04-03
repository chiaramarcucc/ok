const cubisti = [
    {
        nome: "Chiara Marcucci",
        wcaid: 2021,
        media3x3: 19.90,
        singolo3x3: "pochissimo",
        media2x2: null,
        singolo2x2: null,
        media4x4: null,
        singolo4x4: null,
        media5x5: null,
        singolo5x5: null,
        media6x6: null,
        singolo6x6: null,
        media7x7: null,
        singolo7x7: null,
        mediaPyraminx: null,
        singoloPyraminx: null,
        mediaMegaminx: null,
        singoloMegaminx: null,
        mediaSquare: null,
        singoloSquare: null,
        mediaClock: null,
        singoloClock: null,
        media3x3Blind: null,
        singolo3x3Blind: null,
        media4x4Blind: null,
        singolo4x4Blind: null,
        media5x5Blind: null,
        singolo5x5Blind: null,
        mediaMultiblind: null,
        singoloMultiblind: null,
        mediaFMC: null,
        singoloFMC: null,
        mediaSkewb: null,
        singoloSkewb: null,
        media3x3OH: null,
        singolo3x3OH: null,
        numeroGare: null,
        numeroMedaglie: null,
    },
    {
        nome: "Vincenzo Maria Gammino",
        wcaid: 2016,
        media3x3: 10.90,
        singolo3x3: 8.63,
        media2x2: null,
        singolo2x2: null,
        media4x4: null,
        singolo4x4: null,
        media5x5: null,
        singolo5x5: null,
        media6x6: null,
        singolo6x6: null,
        media7x7: null,
        singolo7x7: null,
        mediaPyraminx: null,
        singoloPyraminx: null,
        mediaMegaminx: null,
        singoloMegaminx: null,
        mediaSquare: null,
        singoloSquare: null,
        mediaClock: null,
        singoloClock: null,
        media3x3Blind: null,
        singolo3x3Blind: null,
        media4x4Blind: null,
        singolo4x4Blind: null,
        media5x5Blind: null,
        singolo5x5Blind: null,
        mediaMultiblind: null,
        singoloMultiblind: null,
        mediaFMC: null,
        singoloFMC: null,
        mediaSkewb: null,
        singoloSkewb: null,
        media3x3OH: null,
        singolo3x3OH: null,
        numeroGare: null,
        numeroMedaglie: null,
    },
    // Aggiungi altri cubisti qui
];   // ... (i tuoi dati dei cubisti)

let soldi = 10;
let vite = 5;
let indizi = [];
let cubistaScelto = cubisti[Math.floor(Math.random() * cubisti.length)];
let indiziUsati = 0;

function aggiornaInterfaccia() {
    document.getElementById("soldi").textContent = soldi;
    document.getElementById("vite").textContent = vite;
}

function chiediIndizio(tipoIndizio) {
    let costo = 1;
    if (tipoIndizio === "wcaid" || tipoIndizio === "numeroGare" || tipoIndizio === "numeroMedaglie") {
        costo = 3;
    }

    if (soldi >= costo) {
        soldi -= costo;
        indizi.push(`${tipoIndizio}: ${cubistaScelto[tipoIndizio]}`);
        aggiornaIndizi();
        aggiornaInterfaccia();
        indiziUsati++;
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
        const punti = calcolaPunti();
        document.getElementById("risultato").textContent = `Hai indovinato! Punti: ${punti}`;
        soldi = 10;
        vite++;
        indizi = [];
        indiziUsati = 0;
        cubistaScelto = cubisti[Math.floor(Math.random() * cubisti.length)];
        aggiornaIndizi();
        aggiornaInterfaccia();
    } else {
        vite--;
        if (vite > 0) {
            document.getElementById("risultato").textContent = "Sbagliato! Prova di nuovo.";
            aggiornaInterfaccia();
        } else {
            document.getElementById("risultato").textContent = `Hai perso! Era ${cubistaScelto.nome}.`;
        }
    }
}

function calcolaPunti() {
    let punti = 100;
    punti -= indiziUsati * 10;
    return Math.max(punti, 10);
}

aggiornaInterfaccia();
