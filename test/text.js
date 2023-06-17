function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0,120,200);
	display();
}

var n=0,m=0;
let s_x=[],s_y=[],s_s=[],spead=[],shape=[];
let img;

function preload() {
  img = loadImage('app.jpg'); // 画像のパスを指定して読み込む
}


function display() {
	var i = 0;
	spead[m] = int(random(1, 10));
	s_x[m] = int(random(-windowWidth / 15, windowWidth + windowWidth / 15));
	s_y[m] = -100;
	m++;
	for (i = n; i < m; i++) {
	  image(img, s_x[i], s_y[i], windowWidth / 15, windowWidth / 15); // 画像を描画
	  /*switch(shape[i]){
		  case 0:
			  break;
		  case 1:
			  break;
		  case 2:
			  break;
		  case 3:
			  break;
	  }*/
	  s_y[i] += spead[i];
	}
	if (m > 1000) n++;
  }
  