var Quantity = sessionStorage.getItem("Quantity");
console.log("保存された値: " + Quantity);

var Number = sessionStorage.getItem("Number");
console.log("保存された値: " + Number);

var data = JSON.parse(Fruites);
FruitsName = data["A" + Number].name;
FruitsExplanation = data["A" + Number].explanation;

// 取得した値を必要な処理に適用するなど
var outputElement = document.getElementById("output");
var outputExplanation = document.getElementById("explanation");
console.log(Quantity);
outputElement.textContent = FruitsName + ":" + Quantity + "個分";
outputExplanation = FruitsExplanation;