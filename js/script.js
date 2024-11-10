// PRELEVIAMO ELEMENTI DI COMPILAZIONE FORM
const formElem = document.getElementById ("user-form");
const nameUser = document.getElementById("name");
const surnameUser = document.getElementById("surname");
const userAge = document.getElementById("età");
const userKm = document.getElementById("km");

// PRELEVIAMO I DATI DEL BIGLIETTO FINALE
const nometicket = document.getElementById("nome-ticket");
const cognometicket = document.getElementById("surname-ticket");
const discountticket = document.getElementById("discount-ticket");
const finalpriceticket = document.getElementById ("price-ticket");



formElem.addEventListener("submit", function(event){
   
    event.preventDefault();
// CONVERTO LA STRINGA IN NUMERO
   
    // prelevo tutti i valori
    const name = nameUser.value.trim();
    const surname = surnameUser.value.trim();
    const userAge = userAge.value.trim();
    const userKm = userKm.value.trim();

    // convertiamo le stringhe in numeri
 

    nometicket.innerHTML = name;
    cognometicket.innerHTML = surname;
    finalpriceticket.innerHTML = priceticket;
})




// CREO LA CONDIZIONE PER CALCOLARE LO SCONTO DEL BIGLIETTO

 const priceticket = (userKm * 0.21);

// if (userAgenum < 18) {
//     const discount = ((priceticket /100)* 20);
//     const finalprice = priceticket - discountticket;
    
//  } else if(userAgenum > 65){
//     const discountticket = ((priceticket /100)* 40);
//     const priceticket = priceticket - discountticket;
//  }




      








