function backgroundTree() {
    var backgroundImage = new Image();
    backgroundImage.src = 'tree.jpg';
    
    function resizeBackground() {
        var windowWidth  = window.innerWidth;
        var windowHeight = window.innerHeight;
    
        var imageWidth  = backgroundImage.width;
        var imageHeight = backgroundImage.height;
    
        var widthRatio  = windowWidth / imageWidth;
        var heightRatio = windowHeight / imageHeight;
    
        var scale = Math.max(widthRatio, heightRatio);
    
        var scaledWidth  = imageWidth * scale;
        var scaledHeight = imageHeight * scale;
    
        backgroundImage.style.width  = scaledWidth + 'px';
        backgroundImage.style.height = scaledHeight + 'px';
    }
    
    window.addEventListener('resize', resizeBackground);
    
    resizeBackground();
    
    document.body.style.overflow             = 'hidden';
    document.body.style.backgroundImage      = 'url(' + backgroundImage.src + ')';
    document.body.style.backgroundRepeat     = 'no-repeat';
    document.body.style.backgroundPosition   = 'center';
    document.body.style.backgroundAttachment = 'fixed';
}

var i = 0, n = 0;

function createFallingImage() {

    var image = new Image();
    image.src = FruitsImg;
    image.classList.add('fruits');

    var windowWidth  = window.innerWidth;
    var windowHeight = window.innerHeight;
    
    var imageWidth  = Math.floor(Math.random() * image.width) + 50; // ランダムな幅を設定
    var imageHeight = Math.floor(Math.random() * 100) + 50; // 50から150の間でランダムな高さを設定
    
    image.style.left = Math.floor(Math.random() * (windowWidth+100 + imageWidth)) - imageWidth -50+ 'px'; // ランダムな水平位置を設定
    image.style.top  = - imageHeight + 'px'; // 画面の上端の外側に初期位置を設定
    
    document.body.appendChild(image);
    var posY  = - imageHeight - 500; // 初期位置を画面の上端の外側に設定
    var speed = Math.random() * 15 + 5; // 5から20の間でランダムな速度を設定
    var randonNum = Math.random() * 100 - 200

    
    function fall() {
        posY += speed; // 速度に応じて垂直位置を変化させる
        image.style.top = posY + 'px';

    
        if (posY < windowHeight - image.height - i - randonNum) {
            requestAnimationFrame(fall); // まだ画面内にいる場合は再帰的に呼び出す
        } 
        else {
            speed = 0;
            posY = windowHeight - image.height - i - randonNum;
        }
    }
    
    requestAnimationFrame(fall); // 最初のフレームを呼び出す
}

function wait(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}

window.addEventListener('DOMContentLoaded', async function() {
    var imageCount = Quantity; // 落下させる画像の数


    for(;;){
        for (; i < imageCount; i++) {
            createFallingImage();
            await wait(5)
            if(i > window.innerHeight) {
                break;
            }
            if(i - n > 100)break;
        }
        if(i > window.innerHeight) {
            break;
        }
        if (i < imageCount) {
            n = i;
            await wait(50)
            continue;
        }
        break;
    }

    backgroundTree();
});

