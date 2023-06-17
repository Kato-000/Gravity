setTimeout(() => {
    // 5秒後に実行する処理をここに記述
    var value = (weight * 1000 / FruitsWeight[0]).toFixed(1);;
    var Quantity = parseFloat(value); // 変数をローカルに宣言
    sessionStorage.setItem("Quantity", Quantity); // 値を sessionStorage に保存
    location.href='result.html';
  }, 5000);


// ページが読み込まれた際に sessionStorage から値を取得

var Quantity = sessionStorage.getItem("Quantity");
console.log("保存された値: " + Quantity);
// 取得した値を必要な処理に適用するなど

