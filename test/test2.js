    // 画像の初期位置
    let positionX = 0;
    
    // 1秒ごとに画像を動かす関数
    function moveImage() {
      // 画像要素を取得
        const image = document.getElementById('movingImage');
    
      // 画像の位置を更新
        positionX += 10; // 画像を10px右に移動させる（適宜調整してください）
        image.style.left = positionX + 'px';
    
      // 1秒ごとにmoveImage関数を呼び出す
        setTimeout(moveImage, 1000);
    }
    
    // ページの読み込みが完了したらmoveImage関数を呼び出す
    window.addEventListener('load', moveImage);