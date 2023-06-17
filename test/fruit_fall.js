function backgroundTree() {
    var backgroundImage = new Image();
    backgroundImage.src = 'tree.jpg';
    
    function resizeBackground() {
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
    
        var imageWidth = backgroundImage.width;
        var imageHeight = backgroundImage.height;
    
        var widthRatio = windowWidth / imageWidth;
        var heightRatio = windowHeight / imageHeight;
    
        var scale = Math.max(widthRatio, heightRatio);
    
        var scaledWidth = imageWidth * scale;
        var scaledHeight = imageHeight * scale;
    
        backgroundImage.style.width = scaledWidth + 'px';
        backgroundImage.style.height = scaledHeight + 'px';
    }
    
    window.addEventListener('resize', resizeBackground);
    
    resizeBackground();
    
    document.body.style.overflow = 'hidden';
    document.body.style.backgroundImage = 'url(' + backgroundImage.src + ')';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = 'fixed';
}


function createFallingImage() {
    backgroundTree();
    var image = new Image();
    image.src = 'apple.jpg';
    image.classList.add('apple');
    
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    
    var imageWidth = Math.floor(Math.random() * 100) + 50; // 50から150の間でランダムな幅を設定
    var imageHeight = Math.floor(Math.random() * 100) + 50; // 50から150の間でランダムな高さを設定
    
    image.style.left = Math.floor(Math.random() * (windowWidth - imageWidth)) + 'px'; // ランダムな水平位置を設定
    image.style.top = -imageHeight + 'px'; // 画面の上端の外側に初期位置を設定
    
    document.body.appendChild(image);
    
    var posY = -imageHeight; // 初期位置を画面の上端の外側に設定
    var speed = Math.random() * 5 + 1; // 1から6の間でランダムな速度を設定
    
    function fall() {
      posY += speed; // 速度に応じて垂直位置を変化させる
      image.style.top = posY + 'px';
      
      if (posY < windowHeight) {
        requestAnimationFrame(fall); // まだ画面内にいる場合は再帰的に呼び出す
      } else {
        document.body.removeChild(image); // 画面外に出たら要素を削除
        createFallingImage(); // 新しい画像を生成して落下させる
      }
    }
    
    requestAnimationFrame(fall); // 最初のフレームを呼び出す
  }
  
  window.addEventListener('DOMContentLoaded', function() {
    var imageCount = 20; // 落下させる画像の数
    
    for (var i = 0; i < imageCount; i++) {
      createFallingImage();
    }
  });