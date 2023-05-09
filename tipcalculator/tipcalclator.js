const billTotalInput = document.getElementById("billTotalInput")
const tipInput = document.getElementById("tipInput")
const numberofPeople = document.getElementById("numberOfPeople")
const perPersonTotal = document.getElementById("perPersonTotal")
const btnIncrement = document.getElementById('btnone')
const btnDecrement = document.getElementById("btntwo")

let number = Number(numberofPeople.textContent)

btnIncrement.onclick = () => {
    number += 1
    numberofPeople.textContent = number
    let tip = (Number(billTotalInput.value) / 100) * Number(tipInput.value)
    perPersonTotal.textContent = (((Number(billTotalInput.value) + tip) / number)).toFixed(2)
}
btnDecrement.onclick = () =>{
    if (number <= 1){
        number = 1
    }
    else{
        number -= 1
    }
    numberofPeople.textContent = number
    let tip = (Number(billTotalInput.value) / 100) * Number(tipInput.value)
    perPersonTotal.textContent = (((Number(billTotalInput.value) + tip) / number)).toFixed(2)
}
window.onkeyup = () =>{
    let tip = (Number(billTotalInput.value) / 100) * Number(tipInput.value)
    perPersonTotal.textContent = (((Number(billTotalInput.value) + tip) / number)).toFixed(2 )
}