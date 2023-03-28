
const button = document.getElementById('button-vai')
const pariEDispari = document.getElementById('pari-dispari')
const number = document.getElementById('one-to-five')
const section = document.querySelector('section')
const h1 = document.createElement('h1')
let valoreNum; 
let pariDispari;

section.append(h1)

button.addEventListener('click', function(){
  valoreNum = parseInt(number.value);
  pariDispari= pariEDispari.value

  let arrayResult = somma(valoreNum, randomNumPc(1, 5))

console.log(arrayResult + "-------" + pariDispari);

  if (arrayResult[0] === pariDispari) {
    h1.append(` 
    Complimenti user il tuo numero ${arrayResult[1]} é ${arrayResult[0]} quindi hai vinto ` );

  }
  else{
    h1.append(`Mi spiace ma il PC ha avuto la meglio, ${arrayResult[1]} é ${arrayResult[0]}`);
  }
  
})







function randomNumPc (min, max){
  const randomNum = Math.floor(Math.random()*(max - min +1)+min);

return randomNum;
}

function somma(num, random){
  const array = []
  let output;
  const operazione = valoreNum + randomNumPc(1, 5);
  if(operazione % 2 === 0){
    output = "pari"
  }
  else {
    output = "dispari"
  }
  array[0] = output;
  array[1] = operazione;

  return array;
}


function enableBtn(){
  button.removeAttribute("disabled");
}