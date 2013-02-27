function changeCrop(imageData,xa,ya,xb,yb){
	
	
	var c = document.getElementById("picedit_canvas");
	var ctx = c.getContext("2d");
	
	var width = xb - xa;
	var height = yb - ya;
	
	var newImageData = ctx.createImageData(width,height);
	
	
	return newImageData;
	
}