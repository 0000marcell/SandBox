var style = {
	color: '#000',
	font: '70px Helvetica',
	border: '2px solid gold'
};

origami('.canvas-class')
	.text("Nice!", 10, 70, style)
	.text("Really Nice!", 10, 145, style)
	.draw();
