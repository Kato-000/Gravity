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

if(Weight == 0.3) outputmemo.textContent = "300gで草";
else if(Weight < 1) outputmemo.textContent = "小人?";
else if(Weight < 2.5) outputmemo.textContent = "いい筋トレ道具だね";
else if(Weight < 3) outputmemo.textContent = "赤ちゃん?";
else if(Weight < 5) outputmemo.textContent = "小学生のランドセルぐらい";
else if(Weight < 6) outputmemo.textContent = "ボーリングの玉って人の頭ぐらいらしい";
else if(Weight < 6) outputmemo.textContent = "ボーリングの玉って人の頭ぐらいらしい";
else if(Weight > 62 && Weight < 68) outputmemo.textContent = "成人女性の平均";
else if(Weight > 73 && Weight < 83) outputmemo.textContent = "成人男性の平均";
else if(Weight > 100 && Weight < 150) outputmemo.textContent = "肥満です痩せましょう";
else if(Weight == 132.7) outputmemo.textContent = "痩せろデブ!";
else if(Weight > 200 && Weight < 250) outputmemo.textContent = "人間!?";
else if(Weight < 4300 && Weight > 3800) outputmemo.textContent = "メスのゾウさんですか？";
else if(Weight < 6300 && Weight > 5800) outputmemo.textContent = "オスのゾウさんですか？";
else if(Weight > 10000000 && Weight < 10200000) outputmemo.textContent = "エッフェル塔";
else if(Weight > 5971000000000000000000000 && Weight < 5973000000000000000000000) outputmemo.textContent = "地球";

outputExplanation.textContent = FruitsExplanation;

function goToHome() {
    location.href = 'title.html'
}

function retryMeasure() {
    location.href = 'measuring.html'
}