var weight = document.querySelector("[data-input='weight']")
var button = document.querySelector("button")
var select = document.querySelector("[data-select]")
var result = document.querySelector("[data-result]")
console.log(result)
var finalValue = document.createElement('h1');
console.log(finalValue)
var text = document.createTextNode("O seu investimento é de " + sum );
console.log(text)
function sum (){
    event.preventDefault()
    var first = Number(weight.value)
    var selectValue = select.value
    return  console.log(first * selectValue +"$")
  }
button.addEventListener("click", sum)