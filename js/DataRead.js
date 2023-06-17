var data = JSON.parse(Fruites);

var FruitesNumber = 3;
var i = Math.floor(Math.random() * FruitesNumber) + 1;
var Num = parseFloat(i); // 変数をローカルに宣言

var FruitesName = data["A" + i].name;
var FruitesWeight = data["A" + i].weight;
var FruitesImg = data["A" + i].img;
sessionStorage.setItem("Number", Num); // 値を sessionStorage に保存