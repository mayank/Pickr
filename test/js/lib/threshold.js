/*
----------------------------------------------------------
	Image Grayscaling Library including the menu options
-----------------------------------------------------------
*/

// menu for grayscale options

picEditMenu.prototype.threshold = function(){

	var _PICEDITOR = this.editor;
	
	// adding the buttons and other stuff required
	
	var button = document.createElement('button');
		button.innerHTML = 'Apply Changes';
		
	var inputRed = document.createElement('input');
		inputRed.setAttribute('type','text');
		inputRed.maxLength = 3;
		inputRed.style.width = '30px';
		inputRed.value = 'R';
		inputRed.onfocus = function(){ if(this.value == 'R') this.value = ''; }
		inputRed.onblur = function(){ if(this.value == '') this.value = 'R'; }
		
	var inputGreen = document.createElement('input');
		inputGreen.setAttribute('type','text');
		inputGreen.maxLength = 3;
		inputGreen.style.width = '30px';
		inputGreen.value = 'G';
		inputGreen.onfocus = function(){ if(this.value == 'G') this.value = ''; }
		inputGreen.onblur = function(){ if(this.value == '') this.value = 'G'; }
		
	var inputBlue = document.createElement('input');
		inputBlue.setAttribute('type','text');
		inputBlue.maxLength = 3;
		inputBlue.style.width = '30px';
		inputBlue.value = 'B';
		inputBlue.onfocus = function(){ if(this.value == 'B') this.value = ''; }
		inputBlue.onblur = function(){ if(this.value == '') this.value = 'B'; }
	
	var percent = document.createElement('input');
		percent.setAttribute('type','text');
		percent.maxLength = 3;
		percent.style.width = '30px';
		percent.value = '0';
		
	// adding the events
	
	button.onclick = function(){
		
		// getting corrensponding values required
		
		var r = isNaN(inputRed.value)?0:parseInt(inputRed.value);
		var g = isNaN(inputGreen.value)?0:parseInt(inputGreen.value);
		var b = isNaN(inputBlue.value)?0:parseInt(inputBlue.value);
		
		var h = isNaN(percent.value)?0:parseFloat(percent.value);
		
		alert(r*g*b*h);
		
		this.editor = _PICEDITOR;
		
		// reading the imgdata from canvas
		
		var imgdata = this.editor.context.getImageData(0,0,this.editor.imgWidth,this.editor.imgHeight);
		
		// converting thresholding the given imgdata
		
		for(i=0; i<imgdata.width*imgdata.height*4; i+=4)
		{
			gray = (imgdata.data[i]+imgdata.data[i+1]+imgdata.data[i+2])/3;
			

			
				imgdata.data[i] = '0';
				imgdata.data[i+1] = '0';
				imgdata.data[i+2] = '0';
		}
	
		// loading the imagedata onto the canvas again
	
		this.editor.context.putImageData(imgdata,0,0,0,0,this.editor.imgWidth,this.editor.imgHeight);
	
	}
	
	
	// attaching the button to the menu
	
	document.getElementById(this.id).appendChild(inputRed);
	document.getElementById(this.id).appendChild(inputGreen);
	document.getElementById(this.id).appendChild(inputBlue);
	
	document.getElementById(this.id).appendChild(percent);
	document.getElementById(this.id).appendChild(button);
}