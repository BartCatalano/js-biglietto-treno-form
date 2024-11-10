<!-- COSA SVOLGERE -->

Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.


<!-- SVOLGIMENTO IN LINGUA UMANA -->
1) creare la parte pratica senza estetica
 - creare sezione di inserimento età e km
 - creare bottone submit dentro il form
 -creare il calcolo di sconto in base ad età e km
 - creare risposta finale
 -collegare js alle varie funzioni dei menù e dei tasti

 2) Stilizzare la pagina
 - creare due raw, una per la il compilamento e una per il risultato finale
 - personalizzare bottoni e stile del foglio
 - creare la parte del risultato invisibile fino all' invio dei dati.


 <!-- SVOLGIMENTO LOGICO -->
 1) creare gli imput di inserimento
    -creiamo tutti gli input
    -li portiamo su js
    -li preleviamo in event
    

 2) creare il calcolo di spesa con le variabili età - km - sconto
    (if)       20% se si ha meno di 18 anni
    (else if)  40% se si ha più di 65 anni
    (else)    prezzo pieno negli altri casi

 3) creare la parte grafica per le due raw inserendo la parte compilativa in uno 
    e la parte del risultato nel secondo

   - rendere visibile la seconda parte solo dopo aver elaborato il risultato
 