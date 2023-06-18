var FruitesNumber = 5;
var i = Math.floor(Math.random() * FruitesNumber) + 1;
var Num = parseFloat(i); // 変数をローカルに宣言
var data = JSON.parse(Fruits);

var FruitsName = data.names;
var FruitsWeight = data.weight;
var FruitsImg = data.img;
sessionStorage.setItem("Number", Num); // 値を sessionStorage に保存