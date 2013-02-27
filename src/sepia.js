function changeSepia(imageData){
	
	for(i=0; i<imageData.width*imageData.height*4; i+=4)
	{
			gray = (imageData.data[i]+imageData.data[i+1]+imageData.data[i+2])/3;
			
			imageData.data[i] = gray*1.53;
			imageData.data[i+1] = gray*1.32;
			imageData.data[i+2] = gray*1.20;
	}
	
	return imageData;
	
}