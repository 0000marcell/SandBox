import Ember from 'ember';

export default Ember.Controller.extend({
	images: ['https://s3-sa-east-1.amazonaws.com/pousada/imagens/backup/DSC_0005.jpg',
					 'https://s3-sa-east-1.amazonaws.com/pousada/imagens/backup/DSC_0006.jpg',
					 'https://s3-sa-east-1.amazonaws.com/pousada/imagens/backup/DSC_0015.jpg',
			 		 'https://s3-sa-east-1.amazonaws.com/pousada/imagens/backup/DSC_0018.jpg',
					 'https://s3-sa-east-1.amazonaws.com/pousada/imagens/backup/DSC_0023.jpg',
					 'https://s3-sa-east-1.amazonaws.com/pousada/imagens/backup/DSC_0025.jpg',
					 'https://s3-sa-east-1.amazonaws.com/pousada/imagens/backup/DSC_0026.jpg',
					 'https://s3-sa-east-1.amazonaws.com/pousada/imagens/backup/DSC_0028.jpg',
					 'https://s3-sa-east-1.amazonaws.com/pousada/imagens/backup/DSC_0030.jpg',
					 'https://s3-sa-east-1.amazonaws.com/pousada/imagens/backup/DSC_0032.jpg',
					 'https://s3-sa-east-1.amazonaws.com/pousada/imagens/backup/DSC_0033.jpg',
					 'https://s3-sa-east-1.amazonaws.com/pousada/imagens/backup/DSC_0034.jpg',
					 'https://s3-sa-east-1.amazonaws.com/pousada/imagens/backup/DSC_0036.jpg',
					 'https://s3-sa-east-1.amazonaws.com/pousada/imagens/backup/DSC_0322.jpg',
					 'https://s3-sa-east-1.amazonaws.com/pousada/imagens/backup/DSC_0036.jpg',
					 'https://s3-sa-east-1.amazonaws.com/pousada/imagens/backup/DSC_0327.jpg',
					 'https://s3-sa-east-1.amazonaws.com/pousada/imagens/backup/DSC_0332.jpg',
					 'https://s3-sa-east-1.amazonaws.com/pousada/imagens/backup/DSC_0333.jpg',
					 'https://s3-sa-east-1.amazonaws.com/pousada/imagens/backup/DSC_0342.jpg'],
	resize(image) {
		var canvas = document.createElement('canvas');
		var ctx = canvas.getContext('2d');
		var img = new Image();
		img.src = image; 
		img.onload = function () {
			canvas.width = 500;
			canvas.height = 500;
			if(img.height < img.width){
				var x = (img.width/2) - (img.height/2);
				ctx.drawImage(img, x, 0, img.height, img.height, 
					0, 0, 500, 500);
			}else{
				var y = (img.height/2) - (img.width/2);
				ctx.drawImage(img, 0, y, img.width, img.width, 
					0, 0, 500, 500);
			}
			document.body.appendChild(canvas);
		}
	},
	draw(image){
		var canvas = document.createElement('canvas');
		var ctx = canvas.getContext('2d');
		canvas.width = 500;
		canvas.height = 500;
		ctx.drawImage(image, 0, 0, 500, 500);
		document.body.appendChild(canvas);
	},
	actions: {
		didSelectFiles(files){
			createImageBitmap(files[0], 0, 500, 3072, 3072, { resizeWidth: 500, resizeHeight: 500, resizeQuality: 'high'})
				.then((image) => {
				window.URL.createObjectURL(image);
				this.draw(image);			 
			});
		}
	}
});
