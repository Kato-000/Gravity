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

const imageFruits = 'fruit_apple.jpg';

function createFallingImage() {
	const image = document.createElement('img');
	image.scr = imageFruits;
	image.classList.add('falling-image');

	const windowWidth  = window.innerWidth;
	const windowHeight = window.innerHeight;
	image.style.left = `${initialLeft}px`;

	function removeImage(){
		image.parentNode.removeChild(image);
	}

	function animateImage(){
		const windowHeight = window.innerHeight;

		let top = parseInt(image.style.top);
		if(top >= windowHeight){
			removeImage();
		}
		else{
			top += 1;
			image.style.top = `${top}px`;

			requestAnimationFrame(animateImage);
		}
	}

	animateImage();

	const imageContainer = document.getElementById('image-container');
	imageContainer.appendChild(image);
}

function startFallingEffect(){
	setInterval(createFallingImage, 500);
}

window.addEventListener('DOMContentLoaded', startFallingEffect);