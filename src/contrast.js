function changeContrast(imageData,percent){
	
	if( percent < 0 ){
	
		for(i=0; i<imageData.width*imageData.height*4; i+=4)
		{
			imageData.data[i] += (imageData.data[i]-128)*percent;
			imageData.data[i+1] += (imageData.data[i+1]-128)*percent;
			imageData.data[i+2] += (imageData.data[i+2]-128)*percent;
		}
		
	}
	
	if( percent > 0 ){
	
		for(i=0; i<imageData.width*imageData.height*4; i+=4)
		{
			imageData.data[i] += ((2*imageData.data[i]-128)>255?255:(2*imageData.data[i]-128) - imageData.data[i])*percent;
			imageData.data[i+1] += ((2*imageData.data[i+1]-128)>255?255:(2*imageData.data[i+1]-128) - imageData.data[i+1])*percent;
			imageData.data[i+2] += ((2*imageData.data[i+2]-128)>255?255:(2*imageData.data[i+2]-128) - imageData.data[i+2])*percent;
		}
		
	
	}
	return imageData;
	
}