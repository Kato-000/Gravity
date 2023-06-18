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
    
    var imageWidth  = Math.floor(Math.random() * image.width); // ランダムな幅を設定
    var imageHeight = Math.floor(Math.random() * image.height); // 50から150の間でランダムな高さを設定
    
    image.style.left = Math.floor(Math.random() * (windowWidth + image.width)) - image.width + 'px'; // ランダムな水平位置を設定
    image.style.top  = - imageHeight + 'px'; // 画面の上端の外側に初期位置を設定
    
    document.body.appendChild(image);
    var posY  = - imageHeight - 500; // 初期位置を画面の上端の外側に設定
    var speed;
    var randonNum = Math.random() * 100 - 250;
    if(Quantity == 727 && Quantity == 916) {
        speed = 1;
        randonNum = Math.random() * (windowHeight + image.height);
    }
    else if (Quantity < 1000) speed = Math.random() * 10 + Quantity / 100 + 5; // 5から20の間でランダムな速度を設定
    else if(Quantity > 10000 && Quantity < 12000) speed = 0;
    else speed = Math.random() * 25 + 10;
    
    function fall() {
        posY += speed; // 速度に応じて垂直位置を変化させる
        image.style.top = posY + 'px';

        if (speed == 1){
            speed = 0;
            posY = windowHeight - randonNum;
        }
        else if (posY >= windowHeight - image.height && Quantity < 30 && FruitsWeight <= 3000 && speed != 0){
            speed = 0;
            posY = windowHeight - image.height;
        }
        else if (posY < windowHeight - image.height - i - randonNum  && speed != 0) {
            requestAnimationFrame(fall); // まだ画面内にいる場合は再帰的に呼び出す
        } 
        else {
            speed = 0;
            posY = windowHeight - image.height - i - randonNum;
        }

        image.style.top = posY + 'px';
    }
    
    requestAnimationFrame(fall); // 最初のフレームを呼び出す
}

function wait(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}

window.addEventListener('DOMContentLoaded', async function() {
    for(;;){
        for (; i < Quantity; i++) {
            createFallingImage();
            await wait();
            if(i > window.innerHeight + 100) {
                break;
            }
            if(i - n > 100)break;
        }
        if(i > window.innerHeight + 100) {
            break;
        }
        if (i < Quantity) {
            n = i;
            await wait(50);
            continue;
        }
        break;
    }

    backgroundTree();
});

