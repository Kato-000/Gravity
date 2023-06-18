
// 画像を表示する関数
function displayImages() {

for (var i = 0; i < 100; i++) {

    var image = new Image();
    var j     = Math.floor(Math.random() * FruitesNumber) + 1;

    image.src = FruitesImg = data["A" + j].img;
    image.classList.add('fruit');

    var windowWidth  = window.innerWidth;
    var windowHeight = window.innerHeight;

    var left = Math.floor(Math.random() * (window.innerWidth + image.width))   - 100;
    var top  = Math.floor(Math.random() * (window.innerHeight + image.height)) - 100;

    image.style.left = left + 'px';
    image.style.top  = top  + 'px';

    // 画像をコンテナに追加
    document.body.appendChild(image);
}
}

window.addEventListener('DOMContentLoaded', displayImages);