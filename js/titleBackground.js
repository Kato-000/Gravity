var i = 0, n = 0;
var FruitesNumber = 7;
var data = JSON.parse(Fruits);

function createFallingImage() {
    var image = new Image();
    var i = Math.floor(Math.random() * FruitesNumber) + 1;
    var FruitsImg = data["A" + i].img;
    image.src = FruitsImg;
    image.classList.add('fruits');

    var windowWidth  = window.innerWidth;
    var windowHeight = window.innerHeight;
    
    var imageWidth  = Math.floor(Math.random() * (windowWidth + image.width)) + 50; // ランダムな幅を設定
    var imageHeight = Math.floor(Math.random() * (windowHeight + image.height)); // 50から150の間でランダムな高さを設定
    
    image.style.left = imageWidth + 'px'; // ランダムな水平位置を設定
    image.style.top  = imageHeight + 'px'; // 画面の上端の外側に初期位置を設定
    
    document.body.appendChild(image);
}

window.addEventListener('DOMContentLoaded', async function() {
    for (; i < 1000; i++) {
        createFallingImage();
    }
});

