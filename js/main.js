var btnCalcolaPrezzo = document.getElementById("calcola_prezzo");

btnCalcolaPrezzo.addEventListener("click",
    function() {

        // In seguito ai dati inseriti salvo dentro delle variabili i dati del passeggero
        var nome = document.getElementById("nome").value;
        var km = document.getElementById("km").value;
        var fascia_eta = document.getElementById("fascia_eta").value;

        //Mi stabilisco delle variabili per calcolare il prezzo al km
        var euroPerChilometro = 0.21;
        var costo_biglietto = euroPerChilometro * km;

        // Con il click su "Genera" faccio apparire il biglietto 
        var ticket = document.getElementById("ticket");
        ticket.style.display = "block";

        // Inserisco il nome nel biglietto
        document.getElementById("nome_passeggero").innerHTML = nome;

        // In base alla fascia d'età selezionata calcolo il prezzo il nome dell'offerta e li inserisco
        if (fascia_eta == "minorenne")
        {
            document.getElementById("costo").innerHTML =  (costo_biglietto * 0.8).toFixed(2) + " " + "€";
            document.getElementById("nome_offerta").innerHTML = "Biglietto junior";
        }
        else if (fascia_eta == "over65")
        {
            document.getElementById("costo").innerHTML = (costo_biglietto * 0.6).toFixed(2) + " " + "€";
            document.getElementById("nome_offerta").innerHTML = "Biglietto silver";
        }
        else
        {
            document.getElementById("costo").innerHTML = (costo_biglietto.toFixed(2) + " " + "€");
            document.getElementById("nome_offerta").innerHTML = "Biglietto Standard";
        }

        // Genero un numero casuale per la carrozza da 0 a 13

        document.getElementById("numero_carrozza").innerHTML = Math.floor(Math.random()* 13 ) +1;

        // Genero il codice treno compreso tra 90000 e 100000 (escluso)

        document.getElementById("numero_treno").innerHTML = Math.floor(Math.random()* 10000 ) +90000;
    }
)


var btnAnnulla = document.getElementById("annulla");

btnAnnulla.addEventListener("click",
    function() {
        var nome = document.getElementById("nome").value = "";
        var km = document.getElementById("km").value = "";
        var fascia_eta = document.getElementById("fascia_eta").value = "";

        var ticket = document.getElementById("ticket");
        ticket.style.display = "none";
    }
)