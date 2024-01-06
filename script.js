function generateNumber(){
const min = Math.ceil(document.querySelector(".input-min").value)
const max = Math.floor(document.querySelector(".input-max").value)

const result = Math.floor(Math.random() * (max - min) + min);

const resultP = document.querySelector (".result-text")
resultP.textContent = `O número sorteado é: ${result}`;
 

}



