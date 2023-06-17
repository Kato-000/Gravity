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
            }
}

