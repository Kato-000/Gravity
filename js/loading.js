function createFallingImage() {
    var image = new Image();
    image.src = '../img/apple.jpg';
    image.classList.add('apple');
    
    var windowWidth  = window.innerWidth;
    var windowHeight = window.innerHeight;
    
    var imageWidth  = Math.floor(Math.random() * 100) + 50; // 50から150の間でランダムな幅を設定
    var imageHeight = Math.floor(Math.random() * 500) + 50; // 50から150の間でランダムな高さを設定
    
    image.style.left = Math.floor(Math.random() * (windowWidth - imageWidth)) + 'px'; // ランダムな水平位置を設定
    image.style.top  = -imageHeight + 'px'; // 画面の上端の外側に初期位置を設定
    
    document.body.appendChild(image);
    
    var posY  = -imageHeight; // 初期位置を画面の上端の外側に設定
    var speed = Math.random() * 19 + 1; // 1から6の間でランダムな速度を設定
    
    function fall() {
        posY += speed; // 速度に応じて垂直位置を変化させる
        image.style.top = posY + 'px';
    
        if (posY < windowHeight) {
            requestAnimationFrame(fall); // まだ画面内にいる場合は再帰的に呼び出す
        } 
        else {
            document.body.removeChild(image); // 画面外に出たら要素を削除
            createFallingImage(); // 新しい画像を生成して落下させる
        }
    }
    
    requestAnimationFrame(fall); // 最初のフレームを呼び出す
}

    window.addEventListener('DOMContentLoaded', function() {
    var imageCount = 30; // 落下させる画像の数
    
    for (var i = 0; i < imageCount; i++) {
    createFallingImage();
    }
});