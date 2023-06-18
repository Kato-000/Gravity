<<<<<<< HEAD
var FruitesNumber = 12;
=======
var FruitesNumber = 14;
>>>>>>> 0a24b161bf2b458f7b2ba24effc91c7d2f214c24
var i = Math.floor(Math.random() * FruitesNumber) + 1;
var Num = parseFloat(i); // 変数をローカルに宣言
var data = JSON.parse(Fruits);

var FruitsName = data["A" + i].names;
var FruitsWeight = data["A" + i].weight;
var FruitsImg = data["A" + i].img;
sessionStorage.setItem("Number", Num); // 値を sessionStorage に保存