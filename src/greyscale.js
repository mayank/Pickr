function changeGreyScale(imageData){
	
	for(i=0; i<imageData.width*imageData.height*4; i+=4)
	{
			gray = (imageData.data[i]+imageData.data[i+1]+imageData.data[i+2])/3;
			
			imageData.data[i] = gray;
			imageData.data[i+1] = gray;
			imageData.data[i+2] = gray;
	}
		
	return imageData;
	
}