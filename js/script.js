// PRELEVIAMO ELEMENTI DI COMPILAZIONE FORM
const formElem = document.getElementById ("user-form");
const nameUser = document.getElementById("name");
const surnameUser = document.getElementById("surname");
const userAge = document.getElementById("età");
const userKm = document.getElementById("km");

// PRELEVIAMO I DATI DEL BIGLIETTO FINALE
const nometicket = document.getElementById("nome-ticket");
const cognometicket = document.getElementById("surname-ticket");
const finalpriceticket = document.getElementById ("price-ticket");





formElem.addEventListener("submit", function(event){
   
    event.preventDefault();

 
   
    // prelevo tutti i valori
    const name = nameUser.value.trim();
    const surname = surnameUser.value.trim();
    const age = userAge.value.trim();
    const km = userKm.value.trim();
    // convertiamo le stringhe in numeri
    const kmNum = parseInt(km);
    const ageNum = parseInt(age);
 
  
 const prezzobase = (kmNum * 0.21);
 const prezzofinale = prezzobase;
 if (ageNum < 18) {
    const sconto = (prezzobase / 100) * 20;
    const prezzofinale = prezzobase - sconto;
   
     
  } else if(ageNum > 65){ 
    const sconto = (prezzobase / 100) * 40;
    const prezzofinale = prezzobase - sconto;
    
      
  } else{
             const prezzofinale = prezzobase;  
             
  }
  
  


    nometicket.innerHTML = name;
    cognometicket.innerHTML = surname;
    finalpriceticket.innerHTML = prezzofinale;
    
    
})




// CREO LA CONDIZIONE PER CALCOLARE LO SCONTO DEL BIGLIETTO






      








