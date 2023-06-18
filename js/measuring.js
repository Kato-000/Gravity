var weight = sessionStorage.getItem("weight");
console.log("保存された値: " + weight);

setTimeout(() => {
    // 5秒後に実行する処理をここに記述
    var value = (weight * 1000 / FruitsWeight).toFixed(1);;
    var Quantity = parseFloat(value); // 変数をローカルに宣言
    sessionStorage.setItem("Quantity", Quantity); // 値を sessionStorage に保存
    location.href='result.html';
}, 5000);

