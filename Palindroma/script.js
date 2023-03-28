/*
**Palidroma**
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

*/
const body = document.querySelector('body');
const parolaUtente = prompt("Scrivi una parola e ti diró se si tratta di una parola palindroma o no");
const parolaMin = parolaUtente.toLowerCase();

const verificaPalindromo = palindroma(parolaMin);








function palindroma(parolaUtente) {
  let parolaInversa = parolaUtente.split("").reverse().join("");
  if (parolaUtente === parolaInversa) {
    body.append(parolaInversa + " é una parola palindroma");
  }
  else{
    body.append(parolaInversa + " non é una parola palindroma");
  }
  
}