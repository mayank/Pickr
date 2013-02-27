function changeThreshold(imageData,rcolor,gcolor,bcolor,percent){
	
	for(i=0; i<imageData.width*imageData.height*4; i+=4)
	{
			gray = (imageData.data[i]+imageData.data[i+1]+imageData.data[i+2])/3;
			
			if(!(
			imageData.data[i] < rcolor+rcolor*percent && imageData.data[i] > rcolor-rcolor*percent &&
			imageData.data[i+1] < gcolor+gcolor*percent && imageData.data[i+1] > gcolor-gcolor*percent &&
			imageData.data[i+2] < bcolor+bcolor*percent && imageData.data[i+2] > bcolor-bcolor*percent
			))
			{	
				imageData.data[i] = gray;
				imageData.data[i+1] = gray;
				imageData.data[i+2] = gray;
			}
	}
	
	return imageData;
	
}