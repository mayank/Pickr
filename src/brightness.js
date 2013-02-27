function changeBrightness(imageData,percent){
	
	if(percent > 0 ){
	
		for(i=0; i<imageData.width*imageData.height*4; i+=4)
		{
			imageData.data[i] += (255-imageData.data[i])*percent;
			imageData.data[i+1] += (255-imageData.data[i+1])*percent;
			imageData.data[i+2] += (255-imageData.data[i+2])*percent;
		}
		
	}
	
	else if(percent < 0 ){
	
		for(i=0; i<imageData.width*imageData.height*4; i+=4)
		{
			imageData.data[i] += (imageData.data[i])*percent;
			imageData.data[i+1] += (imageData.data[i+1])*percent;
			imageData.data[i+2] += (imageData.data[i+2])*percent;
		}
		
	}
	
	return imageData;
	
}