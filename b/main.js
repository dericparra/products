var weight = document.querySelector("[data-input='weight']")
var button = document.querySelector("button")
var select = document.querySelector("[data-select]")
var result = document.querySelector("[data-result]")
console.log(result)



button.addEventListener("click", function (event){
  event.preventDefault()
  var finalValue = document.createElement('h1');
  var first = Number(weight.value)
  var selectValue = select.value
  var text = document.createTextNode("O seu investimento é de " + first * selectValue +"$" );
  console.log(finalValue)
  finalValue.appendChild(text);
  result.appendChild(finalValue);
  console.log(text)
})