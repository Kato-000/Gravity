var Quantity = sessionStorage.getItem("Quantity");
console.log("保存された値: " + Quantity);

var Number = sessionStorage.getItem("Number");
console.log("保存された値: " + Number);

var data = JSON.parse(Fruites);
var FruitsName = data["A" + Number].name;
var FruitsWeight = data["A" + Number].weight;
var FruitsImg = data["A" + Number].img;
var FruitsExplanation = data["A" + Number].explanation;

// 取得した値を必要な処理に適用するなど
var outputElement = document.getElementById("output");
var outputExplanation = document.getElementById("explanation");
outputElement.textContent = FruitsName + ":" + Quantity + "個分";
outputExplanation.textContent = FruitsExplanation;

function goToHome() {
    location.href = 'title.html'
}

function retryMeasure() {
    location.href = 'measuring.html'
}