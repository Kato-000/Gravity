var FruitesNumber = 5;
var i = Math.floor(Math.random() * FruitesNumber) + 1;
var Num = parseFloat(i); // 変数をローカルに宣言

var data = JSON.parse(Fruites["A" + i]);

var FruitesName = data.name;
var FruitesWeight = data.weight;
var FruitesImg = data.img;
sessionStorage.setItem("Number", Num); // 値を sessionStorage に保存