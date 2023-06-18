var Quantity = sessionStorage.getItem("Quantity");
console.log("保存された値Quantity: " + Quantity);

var Number = sessionStorage.getItem("Number");
console.log("保存された値Number: " + Number);

var Weight = sessionStorage.getItem("weight");
console.log("保存された値Number: " + Weight);

var data = JSON.parse(Fruits);

var FruitsName        = data["A" + Number].name;
var FruitsWeight      = data["A" + Number].weight;
var FruitsImg         = data["A" + Number].img;
var FruitsExplanation = data["A" + Number].explanation;

// 取得した値を必要な処理に適用するなど
var outputElement     = document.getElementById("output");
var outputExplanation = document.getElementById("explanation");
if(FruitsWeight * Quantity < 1) outputElement.textContent = FruitsName + ":" + Quantity + "こ！" + "  小人?";
else if(FruitsWeight * Quantity < 2.5) outputElement.textContent = FruitsName + ":" + Quantity + "こ！" + "  いい筋トレ道具だね";
else if(FruitsWeight * Quantity < 3) outputElement.textContent = FruitsName + ":" + Quantity + "こ！" + "  赤ちゃん?";
else if(FruitsWeight * Quantity < 5) outputElement.textContent = FruitsName + ":" + Quantity + "こ！" + "  赤ちゃん?";
else outputElement.textContent = FruitsName + ":" + Quantity + "こ！";


outputExplanation.textContent = FruitsExplanation;

function goToHome() {
    location.href = 'title.html'
}

function retryMeasure() {
    location.href = 'measuring.html'
}