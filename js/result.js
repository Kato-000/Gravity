var Quantity = sessionStorage.getItem("Quantity");
console.log("保存された値: " + Quantity);
// 取得した値を必要な処理に適用するなど
var outputElement = document.getElementById("output");
console.log(Quantity);
outputElement.textContent = Quantity;