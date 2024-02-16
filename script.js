function generateNumber() {
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    if (min >= max) {
        alert("O valor mínimo deve ser MENOR que o valor máximo")
    } else {
        const result = Math.floor(Math.random() * (max - min) + min);

        const resultP = document.querySelector(".result-text")
        resultP.textContent = `O número sorteado é: ${result}`;


    }

}

