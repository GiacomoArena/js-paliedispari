
const button = document.getElementById('button-vai')
const pariDispari = document.getElementById('pari-dispari')
const number = document.getElementById('one-to-five')
const valoreNum = parseInt(number.value);


button.addEventListener('click', function(){
  let funzioneSomma = somma(valoreNum, randomNumPc(1, 5))
})




function randomNumPc (min, max){
  const randomNum = Math.floor(Math.random()*(max - min +1)+min);

return randomNum;
}

function somma(num, random){
  const operazione = valoreNum + randomNumPc(1, 5);
  if(operazione % 2 === 0){
    console.log("questo numero é pari " + operazione);
  }
  else {
    console.log("questo numero é dispari " + operazione);
  }

  return operazione;
}