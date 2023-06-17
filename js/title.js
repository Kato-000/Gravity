var weight = 10;

function getValue() {
    var inputElement = document.getElementById("myInput");
    var value = inputElement.value;
    console.log("入力された値: " + value);
    weight = parseFloat(value);
    location.href='measuring.html'
}