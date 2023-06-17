function getValue() {
    // HTMLのinput要素にアクセスして値を取得
    var inputElement = document.getElementById("myInput");
    var value = inputElement.value;

    // 取得した値を表示
    console.log("入力された値: " + value);
  }