function getValue() {
    var inputElement = document.getElementById("myInput");
    var value = inputElement.value;
    console.log("入力された値: " + value);
    var weight = parseFloat(value); // 変数をローカルに宣言
    if(weight){
        sessionStorage.setItem("weight", weight); // 値を sessionStorage に保存
        location.href = 'measuring.html';
    } else {
        alert("体重を入力してください！")
    location.href = 'measuring.html';
}

// ページが読み込まれた際に sessionStorage から値を取得

var weight = sessionStorage.getItem("weight");
console.log("保存された値: " + weight);
// 取得した値を必要な処理に適用するなど

