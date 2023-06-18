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
var outputmemo = document.getElementById("memo");

outputElement.textContent = FruitsName + ":" + Quantity + "個分";

if(Weight < 1) outputmemo.textContent = "小人?";
else if(Weight < 2.5) outputmemo.textContent = "いい筋トレ道具だね";
else if(Weight < 3) outputmemo.textContent = "赤ちゃん?";
else if(Weight < 5) outputmemo.textContent = "小学生のランドセルぐらい";
else if(Weight < 6) outputmemo.textContent = "ボーリングの玉って人の頭ぐらいらしい";


outputExplanation.textContent = FruitsExplanation;

function goToHome() {
    location.href = 'title.html'
}

function retryMeasure() {
    location.href = 'measuring.html'
}