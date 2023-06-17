var Quantity = sessionStorage.getItem("Quantity");
console.log("保存された値: " + Quantity);

var outputElement = document.getElementById("output");
console.log(Quantity);
outputElement.textContent = Quantity;