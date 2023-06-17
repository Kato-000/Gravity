window.addEventListener('DOMContentLoaded', function() {
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
});

function createFallingImage() {
    var image = new Image();
    image.src = 'apple.png';
    image.classList.add('apple');
    
    var windowWidth = window.innerWidth;
    var imageWidth = Math.floor(Math.random() * 100) + 50; // 50から150の間でランダムな幅を設定
    
    image.style.left = Math.floor(Math.random() * (windowWidth - imageWidth)) + 'px'; // ランダムな水平位置を設定
    
    document.body.appendChild(image);
    
    var posY = -image.height; // 初期位置を画面の上端の外側に設定
    
    function fall() {
      posY += 1; // 落下速度を調整する場合は値を変更
    image.style.top = posY + 'px';
    
    if (posY < window.innerHeight) {
        requestAnimationFrame(fall); // まだ画面内にいる場合は再帰的に呼び出す
    } else {
        document.body.removeChild(image); // 画面外に出たら要素を削除
    }
    }
    
    requestAnimationFrame(fall); // 最初のフレームを呼び出す
}

window.addEventListener('DOMContentLoaded', function() {
    var imageCount = 5; // 落下させる画像の数
    
    for (var i = 0; i < imageCount; i++) {
        createFallingImage();
    }
});