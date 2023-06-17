var data = JSON.parse(Fruites);

var i = Math.floor(Math.random() * 2) + 1;

var FruitesName = data["A" + i].name;
var FruitesWeight = data["A" + i].weight;
var FruitesImg = data["A" + i].img;